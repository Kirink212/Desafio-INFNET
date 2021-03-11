const reducer = (data = [], action: any) => {
    switch(action.type) {
        case 'LOGIN':
            localStorage.setItem('token', action.payload.token);

            return action.payload;
        case 'LOGOUT':
            localStorage.clear();

            return data;
        default:
            return data;
    }
}

export default reducer;