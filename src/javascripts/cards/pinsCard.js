const showPins = (pinsArray) => {
  let domString = '';

  pinsArray.forEach((pin) => {
    domString += `<div class="m-1">
                    <img class="pin-image" src="${pin.image}" alt="${pin.name}">
                    <h5>${pin.name}</h5>
                  </div>`;
  });

  $('#pinContainer').html(domString);
};

export default showPins;
