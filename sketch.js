let rectWidth = 5;
let yPos = [];
let speed = [];
let sizes = [];

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<windowWidth/5; i++)
  {
    yPos.push(0);
    speed.push(Math.random()*15+5);
    sizes.push(Math.random() * 8 + 2);
  }
}

function draw() 
{
  background(0,0,0);  
  for(let i=0; i<windowWidth; i+=10)
  {
    fill(0,255,0);
    let index = i/5;
    rect(i,yPos[index],sizes[index],20);
    yPos[index]+=speed[index];
    if(yPos[index] >= windowHeight)
    {
      yPos[index]=0;
    }
  }
  
}
