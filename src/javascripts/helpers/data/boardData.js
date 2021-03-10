import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const baseUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => {
      resolve(Object.values(response.data)[0]);
    })
    .catch((error) => reject(error));
});

export { getBoards, getSingleBoard };
