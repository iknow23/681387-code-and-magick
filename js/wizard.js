(function () {
  'use strict';

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  //  вставляю игроков в соответствии с шаблоном
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };




  var render = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.data.WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(window.data.wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.wizard = {
    render: render
  };

})();
