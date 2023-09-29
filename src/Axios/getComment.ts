import axios, {AxiosResponse, AxiosError} from 'axios';
import {Comment} from '../Redux/Type';

const BASE_URL = 'https://64d21592f8d60b1743616c85.mockapi.io';

export const getComment = (): Promise<Comment[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/test`)
      .then(function (response: AxiosResponse) {
        resolve(response.data as Comment[]);
      })
      .catch(function (error: AxiosError) {
        console.log(error);
        reject(error);
      });
  });
};
export const getCommentById = (id: string): Promise<Comment> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/test/${id}`)
      .then(function (response: AxiosResponse) {
        resolve(response.data as Comment);
      })
      .catch(function (error: AxiosError) {
        console.log(error);
        reject(error);
      });
  });
};
