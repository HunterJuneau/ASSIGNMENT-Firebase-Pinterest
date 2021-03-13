import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getBoards } from './boardData';

const baseUrl = firebaseConfig.databaseURL;

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`).then((response) => {
    if (response.data) {
      resolve(Object.values(response.data));
    } else {
      resolve([]);
    }
  }).catch((error) => reject(error));
});

const deletePin = (firebaseKey, boardId) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseUrl}/pins/${firebaseKey}.json`)
    .then(() => {
      getBoardPins(boardId).then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const createPin = (newPin) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/pins.json`, newPin)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/pins/${response.data.name}.json`, body).then(() => {
        getBoardPins(newPin.boardId).then((pinsArray) => resolve(pinsArray));
      });
    })
    .catch((error) => reject(error));
});

const movePin = (firebaseKey, pinObject, uid) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => {
      getBoards(uid).then((boardsArray) => resolve(boardsArray));
    })
    .catch((error) => reject(error));
});

export {
  getBoardPins, deletePin, createPin, movePin
};
