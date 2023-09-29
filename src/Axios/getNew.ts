import axios, {AxiosResponse, AxiosError} from 'axios';
import {New} from '../Redux/Type';

const BASE_URL = 'http://192.168.1.73:3000/api';

export const getNew = (): Promise<New[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/get-all`)
      .then(function (response: AxiosResponse) {
        resolve(response.data as New[]);
      })
      .catch(function (error: AxiosError) {
        console.log(error);
        reject(error);
      });
  });
};
