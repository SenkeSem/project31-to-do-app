import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

export const getToDo = async () => {
  try {
    let { data } = await instance.get('/todos');
    return data;
  } catch (error) {
    console.log(error);
  }
};
