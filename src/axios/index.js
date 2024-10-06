import axios from 'axios';

const TODO_API_BASE_URL = 'https://todolist.dev2.cogniteq.com/api/v1/';

export const axiosInstance = axios.create({
  baseURL: TODO_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: why you don't use interceptors in queries ?
axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res.status, '<-- статус запроса');
    console.log(res);

    return res;
  },
  (error) => {
    console.log(error, '<-- интерцептор отловил ошибку');
    console.log(error);

    return error;
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
