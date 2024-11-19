var screen = document.getElementById("gamePlay");
var ctx = screen.getContext("2d");
var bird = new Image();
bird.src = "./bird.png";
ctx.drawImage(bird, 0, 0, 60, 50);
