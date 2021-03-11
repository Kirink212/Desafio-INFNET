import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Material UI
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

// Styles
import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();

    return(
        <AppBar className={classes.navbar} position="static">
            <Toolbar>
                <Typography variant="h6"> INFNET CHALLENGE </Typography>
                <Link to='/' className={classes.links}>
                    <Button color="inherit"> Home </Button>
                </Link>
                <Link to='/login' className={classes.links}>
                    <Button color="inherit"> Login </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;