function Player() {
    this.paddle = new Paddle(680, 200, 10, 60);
}

Player.prototype.render = function() {
    this.paddle.render();
};

Player.prototype.update = function() {
    var key;
    var value;

    for (key in keysDown) {
        value = Number(key);
        if (value === 38) { // up arrow
            this.paddle.move(0, -4);
        } else if (value === 40) { // down arrow
            this.paddle.move(0, 4);
        } else {
            this.paddle.move(0, 0);
        }
    }
};
