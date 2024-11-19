var screen = document.getElementById("gamePlay");
var ctx = screen.getContext("2d");
var birdPic = new Image();
birdPic.src = "./bird.png";
ctx.drawImage(birdPic, 20, 0, 60, 50);

var totalBirds = 100;
var gravity = 0.5;
var flap_stregth = 10;
let birdsAlive = 0;
var mutation = 0.0001; // Max value of 2 - will make every bird random every round

class weights {
  constructor(l1, l2, l3, l4, l5, l6, l7, l8) {
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
    this.vel = vel;
    this.weights = weights;
    this.score = score;
    this.life = life;
  }

  jump() {
    this.vel = flap_stregth;
  }
}

let birds = [];
for (i = 0; i < totalBirds; i++) {}

// Could be switched to save multiple birds weights in an array
bestWeights = new weights(0, 0, 0, 0, 0, 0, 0, 0);

birds = new Array[bird]();

function startRound() {
  for (i = 0; i < totalBirds; i++) {
    birds.add(bird(50, 0, tweakWeights(bestWeights), 0, true));
  }
  birdsAlive = totalBirds;
  gameLoop();
}

function tweakWeights(weights) {
  weights.l1 += (Math.random() - 0.5) * mutation;
  weights.l2 += (Math.random() - 0.5) * mutation;
  weights.l3 += (Math.random() - 0.5) * mutation;
  weights.l4 += (Math.random() - 0.5) * mutation;
  weights.l5 += (Math.random() - 0.5) * mutation;
  weights.l6 += (Math.random() - 0.5) * mutation;
  weights.l7 += (Math.random() - 0.5) * mutation;
  weights.l8 += (Math.random() - 0.5) * mutation;
}

function gameLoop() {
  for (birdy in birds) {
    if (birdy.life == true) {
      // TODO Code for bird each turn
    }
  }

  if (birdsAlive > 0) {
    requestAnimationFrame(gameLoop);
  } else {
    for (birdy in birds) {
      var bestScore = 0;
      if (birdy.score > bestScore) {
        bestScore = birdy.score;
        bestWeights = birdy.weights;
      }
    }
    startRound();
  } // This code will either keep the game running, or save best weights, and then starts a new round
}

function evaluateNetwork(bird, pipePair) {
  // TODO Code to determine if the bird will flap
}
