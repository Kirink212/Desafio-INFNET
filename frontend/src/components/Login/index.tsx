import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions
import { authenticate } from '../../actions/auth';

// Material UI
import { Button, Card, CardContent, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

// Styles
import useStyles from './styles';

interface User {
    username: string;
    password: string;
}

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })
    const [showPass, setShowPass] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const handleClickShowPass = () => setShowPass(!showPass);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(authenticate(loginData, history));
    }

    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [prop]: event.target.value });
    }

    return(
        <Card>
            <CardContent>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h4"> Login </Typography>
                    <TextField
                        name="username"
                        label="Username"
                        fullWidth
                        value={loginData.username}
                        onChange={handleChange("username")}
                    />
                    <FormControl fullWidth>
                        <InputLabel> Password </InputLabel>
                        <Input
                            name="password"
                            type={showPass ? 'text' : 'password'}
                            value={loginData.password}
                            onChange={handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPass}
                                        onMouseDown={(event) => event.preventDefault()}
                                    >
                                        {showPass ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button className={classes.submit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default Login;