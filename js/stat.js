var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_X = 40;
var GAP_Y = 40;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT/2 - 5;
var BAR_HEIGHT = CLOUD_HEIGHT - FONT_GAP - GAP_Y - GAP_Y;

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
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP_X + BAR_WIDTH*i + GAP_X*i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + BAR_WIDTH*i + GAP_X*i, CLOUD_HEIGHT - GAP + (-(barHeight*times[i]) / maxTime));
    ctx.fillStyle = (i === 0) ? 'rgba(255, 0, 0, 1)' : 'rgba(2, 14, 134, 1)';
    if (i === 1) {
      ctx.fillStyle = 'rgba(2, 14, 134, 1)';
    }
    if (i === 2) {
      ctx.fillStyle = 'rgba(2, 14, 134, 0.3)';
    }
    if (i === 3) {
      ctx.fillStyle = 'rgba(2, 14, 134, 0.6)';
    }
    ctx.fillRect(CLOUD_X + GAP_X + BAR_WIDTH*i + GAP_X*i, CLOUD_Y*23, BAR_WIDTH, -(barHeight*times[i]) / maxTime);
  }
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText(playerName, CLOUD_X + GAP_X, CLOUD_HEIGHT - GAP);
  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(CLOUD_X + GAP_X + BAR_WIDTH*playerIndex + GAP_X*playerIndex, CLOUD_Y*23, BAR_WIDTH, -barHeight);
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Кекс', CLOUD_X + GAP_X + BAR_WIDTH + GAP_X, CLOUD_HEIGHT - GAP);
  // ctx.fillStyle = 'rgba(2, 14, 134, 1)';
  // ctx.fillRect(CLOUD_X + GAP_X + BAR_WIDTH*playerIndex + GAP_X*playerIndex, CLOUD_Y*23, BAR_WIDTH, -barHeight);
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Катя', 320, 250);
  // ctx.fillStyle = 'rgba(2, 14, 134, 0.3)';
  // ctx.fillRect(CLOUD_X + GAP_X + BAR_WIDTH*playerIndex + GAP_X*playerIndex, CLOUD_Y*23, BAR_WIDTH, -barHeight);
  //
  // ctx.fillStyle = '#000';
  // ctx.fillText('Игорь', 410, 250);
  // ctx.fillStyle = 'rgba(2, 14, 134, 0.6)';
  // ctx.fillRect(CLOUD_X + GAP_X + BAR_WIDTH*playerIndex + GAP_X*playerIndex, CLOUD_Y*23, BAR_WIDTH, -barHeight);
};
