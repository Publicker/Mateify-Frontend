import React, { useEffect, useState } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  AppBar,
  Toolbar,
  List,
  ListItemText,
  Container,
  ListSubheader,
  ListItem,
  ListItemIcon,
  Collapse,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  ExpandLess,
  ExpandMore,
  AccountCircle as AccountCircleIcon,
  MusicNote,
} from "@material-ui/icons";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const App = () => {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://mateify-api.herokuapp.com/users");
    const responseUsers = await response.json();

    setUsers(responseUsers);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = (userIndex) => {
    const newUsers = [...users];
    newUsers[userIndex].songsOpened = !newUsers[userIndex].songsOpened;
    setUsers(newUsers);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Mateify
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container maxWidth="lg">
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Users list
              </ListSubheader>
            }
            className={classes.root}
          >
            {isLoading
              ? [0, 1, 2, 3].map((item, index) => {
                  return (
                    <ListItem key={`skeleton-${index}`}>
                      <ListItemIcon>
                        <Skeleton
                          animation="wave"
                          variant="circle"
                          width={25}
                          height={25}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Skeleton animation="wave" width="80%" />}
                        secondary={<Skeleton animation="wave" width="20%" />}
                      />
                    </ListItem>
                  );
                })
              : users.map((user, index) => {
                  return (
                    <div key={`user-${index}`}>
                      <ListItem button onClick={() => handleClick(index)}>
                        <ListItemIcon>
                          <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${user.name} ${user.surname}`}
                          secondary={`${
                            !user.favoriteSongs.length
                              ? ""
                              : `${user.favoriteSongs.length} song${
                                  user.favoriteSongs.length > 1 ? "s" : ""
                                }`
                          }`}
                        />
                        {user.favoriteSongs.length ? (
                          user.songsOpened ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )
                        ) : null}
                      </ListItem>
                      {user.favoriteSongs.length ? (
                        <Collapse
                          in={user.songsOpened}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {user.favoriteSongs.map((favoriteSong, index) => {
                              return (
                                <ListItem
                                  key={`user${user.index}-song-${favoriteSong._id}`}
                                  button
                                  className={classes.nested}
                                >
                                  <ListItemIcon>
                                    <MusicNote />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={favoriteSong.name}
                                    secondary={favoriteSong.artist}
                                  />
                                </ListItem>
                              );
                            })}
                          </List>
                        </Collapse>
                      ) : null}
                    </div>
                  );
                })}
          </List>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default App;
