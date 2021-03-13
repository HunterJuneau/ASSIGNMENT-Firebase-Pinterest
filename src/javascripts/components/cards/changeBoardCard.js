const showChangeBoards = (pinId, boardsArray) => {
  let domString = '';

  boardsArray.forEach((board) => {
    domString += `<div class="card mx-auto my-2" style="width: 18rem">
                    <div class="card-body">
                      <h5 class="card-title">${board.name}</h5>
                      <button type="button" class="btn btn-warning m-3" id="movePin--${pinId}--${board.firebaseKey}">Move Here</button>
                    </div>
                  </div>`;
  });

  $('#boardsContainer').html(domString);
};

export default showChangeBoards;
