(function () {
  'use strict';

  var successHandler = function (wizards) {
    window.data.wizards = wizards;

    window.wizard.render();

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, window.utils.errorHandler);

  //  пишу код открытия модального окна настроек игрока
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  //  пишу функции открытия/закрытия модального окна настроек игрока
  var popupOpen = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === 27) {
        popupClose();
      }
    });
  };

  var popupClose = function () {
    setup.classList.add('hidden');
  };

  //  применяю функции к обработчикам событий
  setupOpen.addEventListener('click', function () {
    popupOpen();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      popupOpen();
    }
  });

  setupClose.addEventListener('click', function () {
    popupClose();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      popupClose();
    }
  });

  //  пишу код изменения цвета мантии игрока по нажатии на неё
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('.setup-wizard-form').querySelector('[name="coat-color"]');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.data.wizards[window.data.getRandomInteger(0, 5)].colorCoat;
    wizardCoatInput.setAttribute('value', wizardCoat.style.fill);
  });

  //  пишу код изменения цвета глаз игрока по нажатии на них
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('.setup-wizard-form').querySelector('[name="eyes-color"]');

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.data.wizards[window.data.getRandomInteger(0, 4)].colorEyes;
    wizardEyesInput.setAttribute('value', wizardEyes.style.fill);
  });

  //  пишу код изменения цвета файербола игрока по нажатии на него
  var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardFireballWrapInput = wizardFireballWrap.querySelector('input');

  wizardFireballWrap.addEventListener('click', function () {
    wizardFireballWrap.style.background = window.data.wizards[window.data.getRandomInteger(0, 4)].colorFireball;
    wizardFireballWrapInput.setAttribute('value', window.data.wizards[window.data.getRandomInteger(0, 4)].colorFireball);
  });

  //wizardFireballWrap.addEventListener('click', function () {
  //  wizardFireballWrap.style.background = PLAYER_FIREBALL_COLORS[getRandomInteger(0, 4)];
  //  wizardFireballWrapInput.setAttribute('value', wizardFireballWrap.style.background);
  //});

  window.setup = setup;

})();
