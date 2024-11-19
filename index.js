var screen = document.getElementById("gamePlay");
var ctx = screen.getContext("2d");
var birdPic = new Image();
birdPic.src = "./bird.png";
ctx.drawImage(birdPic, 20, 0, 60, 50);

var totalBirds = 100;
var gravity = 0.5;
var flap_stregth = 10;
let birdsAlive = 0
var mutation = 0.0001

class weights {
  constructor(l1,l2,l3,l4,l5,l6,l7,l8) {
    this.l1 = l1;
    this.l2 = l2;
    this.l3 = l3;
    this.l4 = l4;
    this.l5 = l5;
    this.l6 = l6;
    this.l7 = l7;
    this.l8 = l8;
  }
}

class bird {
  constructor(height, vel, weights, score, life) {
    this.height = height;
    this.speed = vel;
    this.weights = weights
    this.score = score;
    this.life = life;
  }

  jump() {
    this.speed = flap_stregth;
  }
}

let birds = [];
for (i = 0; i < totalBirds; i++) {}

bestBird = new bird(50, 0, weights(0,0,0,0,0,0,0,0), 0, true);
secondBird = new bird(50, 0, weights(0,0,0,0,0,0,0,0), 0, true);
thirdBird = new bird(50, 0, weights(0,0,0,0,0,0,0,0), 0, true);


birds = new Array[bird]();


function startRound() {
  for (i = 0; i < totalBirds; i++) {
    birds.add(bird(50, 0, tweakWeights(bestBird.weights), 0, true));
  }
  birdsAlive = totalBirds
}

function tweakWeights(weights) {
  weights.l1 += (Math.random() - 0.5) * mutation
  weights.l2 += (Math.random() - 0.5) * mutation
  weights.l3 += (Math.random() - 0.5) * mutation
  weights.l4 += (Math.random() - 0.5) * mutation
  weights.l5 += (Math.random() - 0.5) * mutation
  weights.l6 += (Math.random() - 0.5) * mutation
  weights.l7 += (Math.random() - 0.5) * mutation
  weights.l8 += (Math.random() - 0.5) * mutation
  return
}

function gameLoop

function evaluateNetwork(l1,l2,l3,l4,l5,l6,l7,l8) {

}
