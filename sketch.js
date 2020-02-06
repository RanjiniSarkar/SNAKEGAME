var s;
var scl = 20;

var food; 
var score = 0;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}    

function draw() {
    background(51);

    if(s.eat(food)) {
        pickLocation();
        score = score + 1;
      }
    
    s.death();
   
    s.update();
    s.show();

    
    fill("#ff0000");
    rect(food.x, food.y, scl, scl);
    
    fill("white");
    textSize(15)
    text("CLICK ON THE ARROW KEYS TO MOVE THE SNAKE",150,300)
    
    text("SCORE" + score,50,100)
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        s.dir(0, -1);
    }
    else if(keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    }
    else if(keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    }
    else if(keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}