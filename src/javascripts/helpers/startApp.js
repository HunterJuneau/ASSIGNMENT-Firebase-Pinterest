import showBoards from '../components/boards';
import getBoards from './data/boardData';

const startApp = (uid) => {
  $('#page').html(`<h1>Boards</h1>
                  <div class="d-flex flex-row flex-wrap" id="boardsContainer"></div>
  `);

  getBoards(uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    }
  });
};

export default startApp;
