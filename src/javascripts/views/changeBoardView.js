import showChangeBoards from '../components/cards/changeBoardCard';
import { getBoards } from '../helpers/data/boardData';

const changeBoardView = (uid, pinId) => {
  $('#page').html(`<h1>Boards</h1>
                  <button class="btn btn-create btn-new-board" id="newBoardBtn">New Board</button>
                  <div class="d-flex flex-row flex-wrap" id="boardsContainer"></div>
  `);

  getBoards(uid).then((boardsArray) => {
    if (boardsArray.length) {
      showChangeBoards(pinId, boardsArray);
    }
  });
};

export default changeBoardView;
