var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;
var GAME_STATE = "running";

var detectCollisions = require('./detectCollisions.js');
var player = require('./player.js');
var scene = require('./scene.js');
var Box = require('./Obstacles/Box.js');
var boxes = [];

function generateBox(){
  boxes.push(new Box(100, 100, 10, window.innerWidth, canvas.height -180  ));
  if (GAME_STATE == "running")
    setTimeout(generateBox,  Math.ceil(Math.random()*3)*1000);
}
generateBox();

function gameLoop(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  player.update();
  boxes.forEach(function(box){
    box.update();
    var thereWasACollision = detectCollisions(player, box);
    if (thereWasACollision) {
      GAME_STATE = "dead";
    }
  });

  scene.render(ctx, canvas);
  player.render(ctx);
  boxes.forEach(function(box){
    box.render(ctx);
  })
  if (GAME_STATE == "running")
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
