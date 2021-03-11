import singleBoardView from '../views/singleBoardView';
import { deletePin, getBoardPins } from './data/pinData';
import showPins from '../cards/pinsCard';
import { deleteBoard } from './data/boardData';
import showBoards from '../cards/boardsCard';

const events = (uid) => {
  $('body').on('click', (e) => {
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
  });
};

export default events;
