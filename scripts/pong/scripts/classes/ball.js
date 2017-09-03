function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = 2;
    this.y_speed = 2;
    this.radius = 8;
    this.moving = false;
}

Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
};

Ball.prototype.update = function () {
    this.y += this.y_speed;
    this.x += this.x_speed;
};

Ball.prototype.update = function (paddle1, paddle2) {
    this.y += this.y_speed;
    this.x += this.x_speed;
    var top_x = this.x - 8;
    var top_y = this.y - 8;
    var bottom_x = this.x + 8;
    var bottom_y = this.y + 8;

    if (this.y - 8 < 0) { // hitting the top wall
        this.y = 8;
        this.y_speed = -this.y_speed;
    } else if (this.y + 8 > 450) { // hitting the bottom wall
        this.y = 442;
        this.y_speed = -this.y_speed;
    }

    if (this.x < 15) { // point was scored for player
        this.y_speed = 0;
        this.x_speed = 0;
        this.x = 350;
        this.y = 200;
        this.moving = false;
        score = document.getElementById("player-score").innerText;
        if (score < 11) {
        document.getElementById("player-score").innerText = parseInt(score) + 1;
        }
    }

    if (this.x > 685) { // point was scored for computer
        this.y_speed = 0;
        this.x_speed = 0;
        this.x = 350;
        this.y = 200;
        this.moving = false;
        score = document.getElementById("computer-score").innerText;
        if (score < 11) {
          document.getElementById("computer-score").innerText = parseInt(score) + 1;
        }
    }

    //ending the game
    var score_player = document.getElementById("player-score").innerText;
    var score_computer = document.getElementById("computer-score").innerText;

    if (score_player == 11) {
        document.getElementById('message').innerHTML = "You Won! Press enter to play again.";
    }

    if (score_computer == 11) {
        document.getElementById('message').innerHTML = "You Lost! Press enter to try again.";
    }

    var cond1 = top_x < (paddle1.x + paddle1.width) &&
                bottom_x > paddle1.x &&
                top_y < (paddle1.y + paddle1.height) &&
                bottom_y > paddle1.y;

    var cond2 = top_x < (paddle2.x + paddle2.width) &&
                bottom_x > paddle2.x &&
                top_y < (paddle2.y + paddle2.height) &&
                bottom_y > paddle2.y;

    if (top_x > 200 && cond1) {
        this.x_speed = -this.x_speed



// speeds up the ball

        this.y_speed  = Math.floor((Math.random() * 6)) -3
    } else if (cond2) {
        this.x_speed = -this.x_speed;
        this.y_speed  = Math.floor((Math.random() * 6)) -3
    }
};
