var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 30;
var TEXT_HEIGHT = 5;
var BAR_HEIGHT = 150;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;
var barWidth = 40;
var distanceBetweenBar = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (i === 0) ? 'green' : 'rgba(255, 0, 0, 1)';
    ctx.fillText(names[i], CLOUD_X + distanceBetweenBar*(1 + i), CLOUD_Y + 250);
    ctx.fillRect(CLOUD_X + distanceBetweenBar*(1 + i) + TEXT_WIDTH*i, CLOUD_Y + 70, barWidth, 150);
  }
};

  // ctx.fillText(playerName, CLOUD_X + distanceBetweenBar, CLOUD_Y + 250);
  // ctx.fillRect(CLOUD_X + distanceBetweenBar, CLOUD_Y + 70, 40, BAR_HEIGHT);
  //
  // var playerIndex = 1;
  // var playerName = 'Кекс';
  //
  // ctx.fillStyle = 'blue';
  // ctx.fillText(playerName, CLOUD_X + distanceBetweenBar*2 + TEXT_WIDTH, CLOUD_Y + 250);
  // ctx.fillRect(CLOUD_X + distanceBetweenBar*2 + TEXT_WIDTH, CLOUD_Y + 70, 40, 150);
  //
  // var playerIndex = 2;
  // var playerName = 'Катя';
  //
  // ctx.fillStyle = 'blue';
  // ctx.fillText(playerName, CLOUD_X + distanceBetweenBar*3 + TEXT_WIDTH*2, CLOUD_Y + 250);
  // ctx.fillRect(CLOUD_X + distanceBetweenBar*3 + TEXT_WIDTH*2, CLOUD_Y + 70, 40, 150);
  //
  // var playerIndex = 3;
  // var playerName = 'Игорь';
  //
  // ctx.fillStyle = 'blue';
  // ctx.fillText(playerName, CLOUD_X + distanceBetweenBar*4 + TEXT_WIDTH*3, CLOUD_Y + 250);
  // ctx.fillRect(CLOUD_X + distanceBetweenBar*4 + TEXT_WIDTH*3, CLOUD_Y + 70, 40, 150);
