import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

export const fetchSubjects = () => {
    const config = {
        headers: {
            'authorization': localStorage.getItem('token'),
        }
    };

    return API.get('/curso', config);
};

export const authenticate = (data: any) => API.post('/auth', data);