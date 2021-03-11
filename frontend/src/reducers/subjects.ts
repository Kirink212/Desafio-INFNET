const reducer = (data = [], action: any) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        default:
            return data;
    }
}

export default reducer;