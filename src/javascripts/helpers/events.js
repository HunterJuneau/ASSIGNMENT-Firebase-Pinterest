import boardsView from '../views/boardsView';
import singleBoardView from '../views/singleBoardView';
import {
  createPin, deletePin, getBoardPins, movePin
} from './data/pinData';
import showPins from '../components/cards/pinsCard';
import { deleteBoard, createBoard } from './data/boardData';
import showBoards from '../components/cards/boardsCard';
import newPinForm from '../components/forms/newPinForm';
import newBoardForm from '../components/forms/newBoardForm';
import changeBoardView from '../views/changeBoardView';

const events = (uid) => {
  $('body').on('click', (e) => {
    if (e.target.id === 'brand') {
      boardsView(uid);
    }

    if (e.target.id.includes('boardButton')) {
      const firebaseKey = e.target.id.split('--')[1];
      singleBoardView(firebaseKey);
    }

    if (e.target.id.includes('pinDelete')) {
      const firebaseKey = e.target.id.split('--')[1];
      const boardId = e.target.id.split('--')[2];

      deletePin(firebaseKey, boardId).then((pinsArray) => showPins(pinsArray));
    }

    if (e.target.id.includes('boardDelete')) {
      const firebaseKey = e.target.id.split('--')[1];

      deleteBoard(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
      getBoardPins(firebaseKey).then((pinsArray) => {
        pinsArray.forEach((pinObject) => {
          deletePin(pinObject.firebaseKey);
        });
      });
    }

    if (e.target.id.includes('newPinBtn')) {
      const boardId = e.target.id.split('--')[1];
      newPinForm(boardId);

      $('#newPinForm').on('submit', (e2) => {
        e2.preventDefault();

        const newPin = {
          name: $('#pinName').val(),
          image: $('#pinImage').val(),
          boardId,
        };

        createPin(newPin).then((pinsArray) => showPins(pinsArray));
      });
    }

    if (e.target.id.includes('newBoardBtn')) {
      newBoardForm();

      $('#newBoardForm').on('submit', (e2) => {
        e2.preventDefault();

        const newBoard = {
          name: $('#boardName').val(),
          uid,
        };

        createBoard(newBoard).then((boardsArray) => showBoards(boardsArray));
      });
    }

    if (e.target.id.includes('pinChangeBoard')) {
      const pinId = e.target.id.split('--')[1];
      changeBoardView(uid, pinId);
    }

    if (e.target.id.includes('movePin')) {
      const firebaseKey = e.target.id.split('--')[1];
      const pinObject = { boardId: e.target.id.split('--')[2] };

      movePin(firebaseKey, pinObject, uid).then((boardsArray) => showBoards(boardsArray));
    }
  });
};

export default events;
