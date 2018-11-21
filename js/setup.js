var PLAYER_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PLAYER_LAST_NAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var PLAYER_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var PLAYER_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
//создаю функцию для поиска случайного числа в пределах max,min значений
function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

//вместо индекса в массиве вставляю генератор случайного числа:
//для name - от 0 до 7
//для coatColor - от 0 до 5
//для eyesColor - от 0 до 4
var players = [
  {
    name: PLAYER_NAMES[randomInteger(0, 7)] + PLAYER_LAST_NAMES[randomInteger(0, 7)],
    coatColor: PLAYER_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: PLAYER_EYES_COLORS[randomInteger(0, 4)]
  },
  {
    name: PLAYER_NAMES[randomInteger(0, 7)] + PLAYER_LAST_NAMES[randomInteger(0, 7)],
    coatColor: PLAYER_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: PLAYER_EYES_COLORS[randomInteger(0, 4)]
  },
  {
    name: PLAYER_NAMES[randomInteger(0, 7)] + PLAYER_LAST_NAMES[randomInteger(0, 7)],
    coatColor: PLAYER_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: PLAYER_EYES_COLORS[randomInteger(0, 4)]
  },
  {
    name: PLAYER_NAMES[randomInteger(0, 7)] + PLAYER_LAST_NAMES[randomInteger(0, 7)],
    coatColor: PLAYER_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: PLAYER_EYES_COLORS[randomInteger(0, 4)]
  }
]

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//вставляю игроков в соответствии с шаблоном
var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < players.length; i++) {
  fragment.appendChild(renderWizard(players[i]));
}
similarListElement.appendChild(fragment);

//показываю окно настроек игрока
var setupModal = document.querySelector('.setup');
setupModal.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
