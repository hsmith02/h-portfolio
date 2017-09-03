function Computer() {
    this.paddle = new Paddle(10, 200, 10, 60);
}

Computer.prototype.render = function () {
    this.paddle.render();
};

Computer.prototype.update = function () {
    if (Math.floor(Math.random() * 20) > 15){
        return
    }

    if (computer.paddle.y < ball.y){
        computer.paddle.y += 3;
    }
    if(computer.paddle.y > ball.y){
        computer.paddle.y -= 3;
    }
};
