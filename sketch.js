//global variables
var bgshapesize = 20;
var shapeY1 = -100;
var shapeY2 = 0;
var shapeY3 = 100;
var sparkmove = -50;
var sparkmove2 = 220;
var sparkmoveX = -300;

// Setup code goes here
function setup() {
    createCanvas(900, 600, WEBGL);
    print("10 different shapes");
    print("global variables ");
    print("functions");
    print("for... while loops");
    print("input (key or mouse)");
    print("animation");
    rectMode(CENTER);

}


// Draw code goes here
function draw() {
    background(0);
    if (mouseX>width/2){
    	background('#b5bace');
    }
    else{background (0);}
  
    noStroke();
    if (mouseIsPressed) {
        triangle(0, 200, -250, -150, 250, -150);
    } else {
        shapegroup1();
        shapegroup2();
        shapegroup3();
    }


    // shapes in da bkgd
    shapegroup1();
    shapegroup2();
    shapegroup3();
    // the sparkles on the side
    sparkle1();
    sparkle2();

    //a line
    stroke (255,204,0);
    fill(255,204,0);
    strokeWeight (4);
    line(-100,-200,100,-200);

    arc(0,230,80,80,0,PI);

stroke(0);
fill(255);
strokeWeight(1);
      //pyramid
    rotateY(millis() / 1000);
    cone(-60, -90);
  
    //torus
    rotateX(frameCount * 0.07);
    rotateY(frameCount * 0.05);
    torus(150, 25);

}

// first row of shapes
function shapegroup1() {
    circle(-150, shapeY1, bgshapesize);
    ellipse(-50, shapeY1, 40, bgshapesize);
    rect(50, shapeY1, 30, bgshapesize);
    square(150, shapeY1, bgshapesize, 5);
}

// second row of shapes
function shapegroup2() {
    circle(-150, shapeY2, bgshapesize);
    ellipse(-50, shapeY2, 40, bgshapesize);
    rect(50, shapeY2, 30, bgshapesize);
    square(150, shapeY2, bgshapesize, 5);
}

// third row of shapes
function shapegroup3() {
    circle(-150, shapeY3, bgshapesize);
    ellipse(-50, shapeY3, 40, bgshapesize);
    rect(50, shapeY3, 30, bgshapesize);
    square(150, shapeY3, bgshapesize, 5);
}



// left sparkle
function sparkle1() {
    beginShape();
    vertex(30 + sparkmoveX, 50 + sparkmove);
    vertex(40 + sparkmoveX, 75 + sparkmove);
    vertex(50 + sparkmoveX, 50 + sparkmove);
    vertex(75 + sparkmoveX, 40 + sparkmove);
    vertex(50 + sparkmoveX, 32 + sparkmove);
    vertex(40 + sparkmoveX, 5 + sparkmove);
    vertex(30 + sparkmoveX, 32 + sparkmove);
    vertex(5 + sparkmoveX, 40 + sparkmove);
    endShape();
}

// right sparkle
function sparkle2() {
    beginShape();
    vertex(30 + sparkmove2, 50 + sparkmove);
    vertex(40 + sparkmove2, 75 + sparkmove);
    vertex(50 + sparkmove2, 50 + sparkmove);
    vertex(75 + sparkmove2, 40 + sparkmove);
    vertex(50 + sparkmove2, 32 + sparkmove);
    vertex(40 + sparkmove2, 5 + sparkmove);
    vertex(30 + sparkmove2, 32 + sparkmove);
    vertex(5 + sparkmove2, 40 + sparkmove);
    endShape();
}
