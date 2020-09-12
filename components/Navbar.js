import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: 32
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [drawer, toggleDrawer] = useState(false)


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" color="light">
                    <Toolbar>
                        <IconButton edge="start" onClick={() => toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Inspect Person
                        </Typography>

                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={() => {handleClose(); window.location.href = '/api/auth/signout'}}>Sign out</MenuItem>
                            </Menu>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>

            <Drawer anchor="left" open={drawer} onClose={() => toggleDrawer(false)}>
                <div style={{width: '16rem'}}>
                    <List>
                        <ListItem button>
                            <ListItemIcon><SearchIcon/></ListItemIcon>
                            <ListItemText primary="Create new search"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><HistoryIcon/></ListItemIcon>
                            <ListItemText primary="Previous searches"/>
                        </ListItem>
                    </List>
                </div>

            </Drawer>

        </>
    );
}