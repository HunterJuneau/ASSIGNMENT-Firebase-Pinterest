const showPins = (pinsArray) => {
  let domString = '';

  pinsArray.forEach((pin) => {
    domString += `<div class="m-1 rounded pin-card">
                    <img class="rounded-top pin-image" src="${pin.image}" alt="${pin.name}">
                    <div class="p-1">
                      <h5>${pin.name}</h5>
                      <button class="btn btn-danger btn-sm" id="pinDelete--${pin.firebaseKey}--${pin.boardId}">Delete</button>
                    </div>
                  </div>`;
  });

  $('#pinContainer').html(domString);
};

export default showPins;
