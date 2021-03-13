const newPinForm = () => {
  $('#pinContainer').html(`<form class="w-75 mx-auto" id="newPinForm">
                            <legend>New Pin</legend>
                            <div class="mb-3">
                              <label for="pinName" class="form-label">Name</label>
                              <input type="text" class="form-control" id="pinName">
                            </div>
                            <div class="mb-3">
                              <label for="pinImage" class="form-label">Image URL</label>
                              <input type="url" class="form-control" id="pinImage">
                            </div>
                            <button type="submit" class="btn btn-create">Submit</button>
                          </form>      
  `);
};

export default newPinForm;
