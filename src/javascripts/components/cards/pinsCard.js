const showPins = (pinsArray) => {
  let domString = '';

  pinsArray.forEach((pin) => {
    domString += `<div class="card m-1 rounded pin-card">
                    <img class="card-img-top" src="${pin.image}" alt="${pin.name}">
                    <div class="card-body">
                      <h5 class="card-title">${pin.name}</h5>
                      <button class="btn btn-warning btn-sm pin-change-board" id="pinChangeBoard--${pin.firebaseKey}">Change Board</button>
                      <button class="btn btn-danger btn-sm pin-delete" id="pinDelete--${pin.firebaseKey}--${pin.boardId}">Delete</button>
                    </div>
                  </div>`;
  });

  $('#pinContainer').html(domString);
};

export default showPins;
