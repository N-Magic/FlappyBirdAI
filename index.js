var screen = document.getElementById("gamePlay");
var ctx = screen.getContext("2d");
var birdPic = new Image();
birdPic.src = "./bird.png";
// ctx.drawImage(birdPic, 20, 0, 60, 50);

var gravity = 0.08;
var flap_stregth = 10;

var pipeWidth = 100;
var pipeSpacing = 200;
var pipeSpeed = 10;

var totalBirds = 100;
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

class pipePair {
  constructor(horizontal, bottom) {
    this.horizontal = horizontal;
    this.bottom = bottom;
  }
}

let birds = [];
let pipePairs = [];

// Could be switched to save multiple birds weights in an array
bestWeights = new weights(0, 0, 0, 0, 0, 0, 0, 0);

function startRound() {
  pipePairs.push(new pipePair(600, 800 - Math.random() * 600));
  for (i = 0; i < totalBirds; i++) {
    birds.push(new bird(50, 0, tweakWeights(bestWeights), 0, true));
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
  ctx.clearRect(0, 0, screen.width, screen.height);
  while (pipePairs.length < 3) {
    nextPos = pipePairs[pipePairs.length - 1].horizontal + pipeSpacing;
    pipePairs.push(new pipePair(nextPos, 800 - Math.random() * 600));
  }

  for (let pipePair of pipePairs) {
    let theDistance = pipePair.horizontal;
    let theHeight = pipePair.bottom;
    ctx.fillStyle = "green";
    ctx.fillRect(theDistance, theHeight, pipeWidth, 600); // Assuming pipeWidth is defined elsewhere
  }

  // console.log("starting to loop through the birds");

  for (let bird of birds) {
    if (bird.life == true) {
      bird.vel += gravity;
      bird.height += bird.vel;
      if (evaluateNetwork(bird) == true) {
        bird.jump();
      }
      ctx.drawImage(birdPic, 20, bird.height, 60, 50);
    }
  }

  // console.log("ending the loop through the birds");

  if (birdsAlive > 0) {
    requestAnimationFrame(gameLoop);
  } else {
    for (let bird of birds) {
      var bestScore = 0;
      if (bird.score > bestScore) {
        bestScore = bird.score;
        bestWeights = bird.weights;
      }
    }
    startRound();
  } // This code will either keep the game running, or save best weights, and then starts a new round
}

function evaluateNetwork(bird, pipePair) {
  let jump = false;

  return jump;
}

startRound();
