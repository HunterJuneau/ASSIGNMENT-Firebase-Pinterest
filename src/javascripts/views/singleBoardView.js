import showPins from '../cards/pinsCard';
import { getSingleBoard } from '../helpers/data/boardData';
import { getBoardPins } from '../helpers/data/pinData';

const singleBoardView = (firebaseKey) => {
  $('#page').html(`<h1 id="boardHeading"></h1>
                  <div class="d-flex flex-row flex-wrap" id="pinContainer"></div>`);

  getSingleBoard(firebaseKey).then((boardObject) => {
    $('#boardHeading').html(boardObject.name);
  });

  getBoardPins(firebaseKey).then((pinsArray) => showPins(pinsArray));
};

export default singleBoardView;
