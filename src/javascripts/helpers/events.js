import singleBoardView from '../views/singleBoardView';

const events = () => {
  $('body').on('click', (e) => {
    if (e.target.id.includes('boardButton')) {
      const firebaseKey = e.target.id.split('--')[1];
      singleBoardView(firebaseKey);
    }
  });
};

export default events;
