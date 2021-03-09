const showBoards = (boardsArray) => {
  let domString = '';

  boardsArray.forEach((board) => {
    domString += `<div class="card mx-auto my-2" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${board.name}</h5>
                      <button type="button" class="btn btn-board m-3" id="${board.firebaseKey}">View Board</button>
                    </div>
                  </div>`;
  });

  $('#boardsContainer').html(domString);
};

export default showBoards;
