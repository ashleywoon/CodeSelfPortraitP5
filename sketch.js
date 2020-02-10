/*
  CodeSelfPortrait
  by Ashley Woon
  
  Creates self portrait of author using various shapes, lines, and colors.
*/

//State machine
var state;
var stateHappy=0;
var stateSad=1;
var stateAngry=2;
var stateSleepy=3;

//coordinate variables
var leftX;
var leftY;
var rightX;
var rightY;
var tearLeft=320;
var tearRight=320;

//color variables
var skin;
var darkerSkin;
var lips;
var brows;
var hair;

function setup() {
  createCanvas(1000,1000);
  state=stateHappy;
  skin=color(241, 205, 185);
  darkerSkin=color(234, 200, 180);
  lips=color(231,135,135);
  brows=color(100,63,12);
  hair=color(148.75,6.8,30.6);
}

function draw() {
  // print mouse coordinates
  //print(mouseX + " : " + mouseY);

  //background dependant on state; happy=pink, sad=black, sleepy=blue, angry=red
  if(state==stateHappy)
    background(231,135,135);
  else if(state==stateSad)
    background(44,52,144);
  else if(state==stateAngry)
    //background(169,24,52);
    background(84.5,12,26);
  else if(state==stateSleepy)
    background(130,191,207);
  noStroke();
  
  //hair
  fill(hair);
  ellipse(500,360, 500,600);
  
  //neck
  fill(darkerSkin);
  rect(425,518, 150, 200);
  
  //ear
  ellipse(332,326, 55,90);
  
  //face shape and coloring
  fill(skin);
  ellipse(width/2, height/3, width/3, height/2.4);
  
  //left eye, right eye
  stroke(0);
  strokeWeight(2);
  fill(255);
  ellipse(width/2.4, height/3.5, 90, 60);
  ellipse(width/1.75, height/3.5, 90, 60);
  //left and right iris coloring
  strokeWeight(4);
  fill(131, 67, 7);
  ellipse(420,290, 50,50);
  ellipse(570, 290, 50,50);
  //left and right pupil
  fill(0);
  ellipse(420,290, 10,10);
  ellipse(570, 290, 10,10);
  //left and right light reflection
  fill(255);
  noStroke();
  ellipse(430,280, 10,10);
  ellipse(580,280, 10,10);
  
  //left and right eyebrow
  fill(brows);
  quad(360,240, 389,224, 460,225, 465,239);
  quad(630,240, 600,224, 528,225, 520,239);
  
  //nose
  fill(175.5,150,135);
  quad(505,350, 510,373, 500,384, 515,373);
  
  //mouth
  fill(lips);
  arc(width/2, height/2.2, 90, 40, QUARTER_PI, PI);

  //accessories
  //jade necklace
  stroke(255,234,0);
  strokeWeight(5);
  line(423,610, 500,710);
  noStroke();
  fill(28,250,62);
  ellipse(500,715, 40, 40);
  fill(0);
  ellipse(500,715, 10,10);
  stroke(255,234,0);
  line(575,610, 500,710);
  
  //earring
  noStroke();  fill(102,125,133);
  ellipse(327,359, 5,5);
  stroke(102,125,133);
  line(327,360, 331,401);
  stroke(0);
  strokeWeight(.5);
  ellipse(320,401, 30,30);
  fill(255);
  ellipse(325,403, 30,30);
  fill(0);
  ellipse(325,401, 25,25);
  fill(123,12,165);
  ellipse(330,401, 25,25);
  
  //shirt
  noStroke();
  quad(420,630, 260,720, 256,740, 240,1000);
  quad(578,630, 740,720, 746,740, 760,1000);
  //v-neck
  quad(420,630, 500,750, 760,1000, 240,1000);
  quad(578,630, 500,750, 240,1000, 760,1000);

  //changing emotion
  //stateSad
  if(state==stateSad) {
    sad();
  }
  //stateAngry
  else if(state==stateAngry){
    angry();
  }
  //stateSleepy
  else if(state==stateSleepy) {
    sleepy();
  }
  scribbles();
}

function sad() {
  //lowered eyelids,
  noStroke();
  fill(skin);
  ellipse(width/2.4, height/3.5-15, 90, 60);
  ellipse(width/1.75, height/3.5-15, 90, 60);
  //smile to frown
  arc(width/2, height/2.2, 90, 40, PI/6, PI);
  fill(lips);
  arc(width/2, height/2.2, 90, 40, PI, TWO_PI);
  //crying
  leftX=433;
  rightX=554;
  fill(0,0,255);
  for(var j=320; j<1000; j++) {
    ellipse(leftX, tearLeft, 10,15);
    ellipse(rightX, tearRight, 10,15);
  }
  if(second()%2==0) {
    tearLeft=tearLeft+2;
    tearRight=tearRight+1;
  }
  else {
    tearLeft=tearLeft+1;
    tearRight=tearRight+2;
  }
}

function angry() {
  //frown
  fill(skin);
  arc(width/2, height/2.2, 90, 40, PI/6, PI);
  fill(lips);
  arc(width/2, height/2.2, 90, 40, PI, TWO_PI);
  fill(241, 205, 185);
  arc(width/2, height/2.2+10, 90, 40, PI, TWO_PI);
  //angry tick
  leftX=540,
  leftY=160,
  rightX=593,
  rightY=210;
  fill(255,0,0);
  arc(leftX, leftY, 45,45, 0, HALF_PI);
  arc(rightX, leftY, 45,45, HALF_PI, PI);
  arc(leftX, rightY, 45,45, PI+QUARTER_PI+QUARTER_PI, 0);
  arc(rightX, rightY, 45,45, PI, PI+QUARTER_PI+QUARTER_PI);
  fill(skin);
  arc(leftX, leftY, 35,35, 0, HALF_PI);
  arc(rightX, leftY, 35,35, HALF_PI, PI);
  arc(leftX, rightY, 35,35, PI+QUARTER_PI+QUARTER_PI, 0);
  arc(rightX, rightY, 35,35, PI, PI+QUARTER_PI+QUARTER_PI);
  if(second() %2==0) {
    fill(255,0,0);
    arc(leftX, leftY, 50,50, 0, HALF_PI);
    arc(rightX, leftY, 50,50, HALF_PI, PI);
    arc(leftX, rightY, 50,50, PI+QUARTER_PI+QUARTER_PI, 0);
    arc(rightX, rightY, 50,50, PI, PI+QUARTER_PI+QUARTER_PI);
    fill(skin);
    arc(leftX, leftY, 40,40, 0, HALF_PI);
    arc(rightX, leftY, 40,40, HALF_PI, PI);
    arc(leftX, rightY, 40,40, PI+QUARTER_PI+QUARTER_PI, 0);
    arc(rightX, rightY, 40,40, PI, PI+QUARTER_PI+QUARTER_PI);
  }
  //left eyebrown raise
  if(second()%3==0) {
    noStroke();
    fill(skin);
    quad(360,240, 389,224, 460,225, 465,239);
    fill(brows);
    quad(360,240-25, 389,224-25, 460,225, 465,239);
    quad(630,240, 600,224, 528,225, 520,239);
  }
}

function sleepy() {
  //lowered eyelids
  if(second()%3==0) {
    noStroke();
    fill(skin);
    ellipse(width/2.4, height/3.5-5, 90, 60);
    ellipse(width/1.75, height/3.5-5, 90, 60);
  }
  else if(second()%2==0) {
    noStroke();
    fill(skin);
    ellipse(width/2.4, height/3.5-15, 90, 60);
    ellipse(width/1.75, height/3.5-15, 90, 60);
  }
  else {
  //closed eyelids
    fill(skin);
    ellipse(width/2.4, height/3.5, 100, 70);
    ellipse(width/1.75, height/3.5, 100, 70);
    stroke(0);
    arc(width/2.4, height/3.5, 90, 60, 0, PI);
    arc(width/1.75, height/3.5, 90, 60, 0, PI);
  }

  //yawning
  noStroke();
  fill(skin);
  arc(width/2, height/2.2, 90, 40, QUARTER_PI, PI);
    //mouth open
    if(second()%5==0) {
      fill(lips);
      arc(width/2, height/2.2, 90, 40, 0, TWO_PI);
    }
    else {
    //closing mouth
      fill(lips);
      arc(width/2, height/2.2, 45, 20, 0, TWO_PI);
    }
}

function scribbles() {
  var scribble=random(5);
  var sColor=random(0,255);
  stroke(sColor);
  strokeWeight(scribble);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed() {
  //hard-coding emotions to key and changing state
  if(key=='0')
    state=stateHappy;
  else if(key == '1') 
    state=stateSad;
  else if(key =='2')
    state=stateAngry;
  else if(key== '3')
    state=stateSleepy;
}
