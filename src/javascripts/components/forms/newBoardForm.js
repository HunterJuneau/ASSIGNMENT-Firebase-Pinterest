const newBoardForm = () => {
  $('#boardsContainer').html(`<form class="w-75 mx-auto" id="newBoardForm">
                            <legend>New Board</legend>
                            <div class="mb-3">
                              <label for="boardName" class="form-label">Name</label>
                              <input type="text" class="form-control" id="boardName">
                            </div>
                            <button type="submit" class="btn btn-create">Submit</button>
                          </form>      
  `);
};

export default newBoardForm;
