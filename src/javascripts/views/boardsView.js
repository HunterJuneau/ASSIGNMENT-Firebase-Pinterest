import showBoards from '../cards/boardsCard';
import { getBoards } from '../helpers/data/boardData';

const boardsView = (uid) => {
  $('#page').html(`<h1>Boards</h1>
                  <div class="d-flex flex-row flex-wrap" id="boardsContainer"></div>
  `);

  getBoards(uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    }
  });
};

export default boardsView;
