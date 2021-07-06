var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(800, 400); 
  
  btn_red = createButton("Red");
  btn_red.position(100, 50);
  btn_red.mousePressed(red);

  btn_green = createButton("Green");
  btn_green.position(200, 50);
  btn_green.mousePressed(green);
}

function draw() 
{
  background(r,g,b);
}

function red()
{
  r = 225;
  g = 0;
  b = 0;
}

function green()
{
  r = 0;
  g = 225;
  b = 0;
}