var started = false;
var player = new Player();
var computer = new Computer();
var ball = new Ball(350, 200);

var keysDown = {};

var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };


var canvas = document.createElement('canvas');
var width = 700;
var height = 450;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext("2d");

function update() {
    player.update();
    computer.update();

    if (started) {
        ball.update(player.paddle, computer.paddle);
    }
}

function render() {
  context.fillStyle = "#353535";
  context.fillRect(0, 0, width, height);
  ball.render();
  player.render();
  computer.render();
  context.moveTo(350, 0);
  context.lineTo(350, 450);
  context.strokeStyle = "#fff";
  context.setLineDash([7, 5]);
  context.stroke();
}

function step() {
  update();
  render();
  animate(step);
}

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 32 && !ball.moving) {
        started = true;
        ball.moving = true;
        ball.x_speed = 7;
        ball.y_speed = 7;
        document.getElementById('message').innerHTML = "";
    }

    if (event.keyCode === 13) {
      document.getElementById("player-score").innerText = 0;
      document.getElementById("computer-score").innerText = 0;
      document.getElementById('message').innerHTML = "Press the space bar to begin!";
    }
});

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

window.onload = function() {
    document.getElementById("pong-game").appendChild(canvas);
    animate(step);
};
