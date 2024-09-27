import axios from 'axios';

const TODO_API_BASE_URL = 'https://todolist.dev2.cogniteq.com/api/v1/';

export const instance = axios.create({
  baseUrl: TODO_API_BASE_URL,
});

// TODO: why you don't use interceptors in queries ?
instance.interceptors.response.use(
  (res) => {
    console.log(res.status, '<-- статус запроса');
    console.log(res);
    console.log(res.config.url);

    return res;
  },
  (error) => {
    console.log(error, '<-- интерцептор отловил ошибку');
    return error;
  },
);
