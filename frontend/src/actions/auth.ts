import * as api from '../api';

export const authenticate = (loginData: any, history: any) => async (dispatch: any) => {
    try {
        const { data } = await api.authenticate(loginData);

        dispatch({ type: 'LOGIN', payload: data});

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}