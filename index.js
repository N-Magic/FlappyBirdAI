var screen = document.getElementById("gamePlay");
var ctx = screen.getContext("2d");
var bird = new Image();
bird.src = "./bird.png";
ctx.drawImage(bird, 0, 0, 60, 50);

var totalBirds = 100;
var gravity = 10;
var flap_stregth = 10;

class bird {
  constructor(height, vel, l1, l2, l3, l4, l5, l6, l7, l8, score, life) {
    this.height = height;
    this.speed = vel;
    this.l1 = l1;
    this.l2 = l2;
    this.l3 = l3;
    this.l4 = l4;
    this.l5 = l5;
    this.l6 = l6;
    this.l7 = l7;
    this.l8 = l8;
    this.score = score;
    this.life = life;
  }
}
let birds = new Array[bird]();
for (i = 0; i < totalBirds; i++) {}

function round() {
  let birds = new Array[bird]();
  for (i = 0; i < totalBirds; i++) {
    birds.add(bird(50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true));
  }
}
