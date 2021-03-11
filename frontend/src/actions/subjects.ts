import * as api from '../api';

export const fetchSubjects = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchSubjects();
        
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}