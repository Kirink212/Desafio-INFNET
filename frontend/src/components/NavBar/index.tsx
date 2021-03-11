import React, { useEffect, useState } from 'react';

// Router
import { Link, useHistory } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';

// Material UI
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

// Styles
import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [token, setToken] = useState(localStorage.getItem('token'));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
    }

    const LoginLogoutLink = () => {
        if (token) {
            return <Button color="inherit" onClick={logout}> Logout </Button>;
        }

        return (
            <Link to={`/login`} className={classes.links}>
                    <Button color="inherit"> Login </Button>
            </Link>
        );
    };

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [dispatch]);

    return(
        <AppBar className={classes.navbar} position="static">
            <Toolbar>
                <Typography variant="h6"> INFNET CHALLENGE </Typography>
                <Link to='/' className={classes.links}>
                    <Button color="inherit"> Home </Button>
                </Link>
                <LoginLogoutLink />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;