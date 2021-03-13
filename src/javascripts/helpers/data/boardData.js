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

const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseUrl}/boards/${firebaseKey}.json`)
    .then(() => {
      getBoards(uid).then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const createBoard = (newBoard) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/boards.json`, newBoard)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/boards/${response.data.name}.json`, body).then(() => {
        getBoards(newBoard.uid).then((boardsArray) => resolve(boardsArray));
      });
    })
    .catch((error) => reject(error));
});

export {
  getBoards, getSingleBoard, deleteBoard, createBoard
};
