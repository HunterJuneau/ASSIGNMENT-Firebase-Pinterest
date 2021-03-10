import singleBoardView from '../views/singleBoardView';
import { deletePin } from './data/pinData';
import showPins from '../cards/pinsCard';

const events = () => {
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
  });
};

export default events;
