import axios, {AxiosResponse, AxiosError} from 'axios';
import {Comment} from '../Redux/Type';

const BASE_URL = 'https://64d21592f8d60b1743616c85.mockapi.io';

export const postComment = (comment: Comment): Promise<Comment> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/test`, comment)
      .then(function (response: AxiosResponse) {
        resolve(response.data as Comment);
      })
      .catch(function (error: AxiosError) {
        console.log(error);
        reject(error);
      });
  });
};
