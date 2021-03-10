import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

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

export default getBoardPins;
