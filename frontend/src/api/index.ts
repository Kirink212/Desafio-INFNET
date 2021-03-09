import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchSubjects = () => axios.get(BASE_URL + '/curso');
export const authenticate = () => axios.post(BASE_URL + '/auth');