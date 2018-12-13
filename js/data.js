(function () {
  'use strict';

  var wizards = [];
  var WIZARDS_QUANTITY = 4;

  //  создаю функцию для поиска случайного числа в пределах max,min значений
  function getRandomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  window.data = {
    wizards: wizards,
    WIZARDS_QUANTITY: WIZARDS_QUANTITY,
    getRandomInteger: getRandomInteger
  };

})();
