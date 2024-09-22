import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getToDo = async () => {
  try {
    let { data } = await instance.get('/todos');
    return data;
  } catch (error) {
    console.log(error);
  }
};

// TODO: why you don't use interceptors in queries ?
instance.interceptors.response.use(
  (res) => {
    console.log(res.status, '<-- статус запроса');
    return res;
  },
  (error) => {
    console.log(error, '<-- интерцептор отловил ошибку');
    return error;
  },
);
