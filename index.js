var screen = document.getElementById("gamePlay");
var ctx = screen.getContext("2d");
var bird = new Image();
bird.src = "./bird.png";
ctx.drawImage(bird, 0, 0, 60, 50);

var gravity = 10;
var flap_stregth = 10;

class bird {
  constructor(height, vel) {
    this.height = height;
    this.speed = vel;
  }
}
