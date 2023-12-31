
const SLICE_COUNT = 6;

//how phenakistoscope runs as a whole
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK); //STATIC_FRAME / ANIMATED_FRAME / STATIC_DISK / ANIMATED_DISK / OUTPUT_GIF(1000) / OUTPUT_PRINT(A4orA3)
 pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false); 
  pScope.set_direction(CCW); 
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("horseGrey" , "png");
  pScope.load_image("eagleTail" , "png");
  pScope.load_image("wingL" , "png");
  pScope.load_image("wingR" , "png");
  pScope.load_image("clawL" , "png");
  pScope.load_image("clawR" , "png");
  pScope.load_image("eagleHead" , "png");
  pScope.load_image("tumbleweed" , "png");
  pScope.load_image("cactus" , "png")
}



//setup of the layers of animation
function setup_layers(pScope){

  //background colournoStr
  new PLayer(null, 220);  //whole circle background, ignoring boundaries

  var layer7 = new PLayer(skyBackground);
  layer7.mode(RING);
  layer7.set_boundary(0,1000);
  
  var layer1 = new PLayer(eagle);
  layer1.mode(RING);
  layer1.set_boundary(400, 1000);

  let layer2 = new PLayer(tumbleweed);
  layer2.mode(RING);
  layer2.set_boundary( 0, 400);

  var layer3 = new PLayer(cactus);
  layer3.mode(RING);
  layer3.set_boundary( 400, 1000);

  var layer4 = new PLayer(horseJump);
  layer4.mode(RING);
  layer4.set_boundary( 400, 1000);

  var layer5 = new PLayer(horse);
  layer5.mode(RING);
  layer5.set_boundary( 400, 1000);

  var layer6 = new PLayer(dustCloud);
  layer6.mode(RING);
  layer6.set_boundary( 400, 1000);

  
}




function skyBackground (x,y,animation,pScope){
  pScope.fill_background("#bde0f0"); 

  noStroke();
  fill("#c5e3f0"); 
  ellipse(0, 0, 1900)

  noStroke();
  fill("#cee7f2"); 
  ellipse(0, 0, 1200)
}






function eagle(x, y, animation, pScope){
  

  push()
  let xEagleStart = 6000//right
  let yEagleStart = -12000 //top
  let xEagleFurthest = -3000//left
  let yEagleBottom = -7500//bottom (change?)

  let xSwoop = xEagleStart 
  let ySwoop = yEagleStart

  let scaleVal = 0.08;
  let scaleVal2;

//scaling
if(animation.frame <= 0.5){
  scaleVal2 = map(animation.frame, 0, 0.5, 0.6, 0.8);
}
else{
  scaleVal2 = map(animation.frame, 0.5, 1, 0.8, 0.6);;
}

push()
scale(scaleVal);
if(animation.frame <= 0.5){
  ySwoop = map(animation.frame, 0, 0.5, yEagleStart, yEagleBottom);
}
else{
  ySwoop = map(animation.frame, 0.5, 1, yEagleBottom, yEagleStart);
}

xSwoop = map(animation.frame, 0, 1, xEagleStart, xEagleFurthest);



if(animation.frame <= 0.25){
  rotateWing = map(animation.frame, 0, 0.25, 60, -60);
}
else if(animation.frame > 0.25 && animation.frame <=0.5){
  rotateWing = map(animation.frame, 0.25, 0.5, -40, 40);
}
else if(animation.frame > 0.5 && animation.frame <=0.75){
  rotateWing = map(animation.frame, 0.5, 0.75, 120, -120);
}
else{
  rotateWing = map(animation.frame, 0.75, 1, -40, 40);
}



push();

translate(xSwoop, ySwoop);
scale(scaleVal2);

push()
scale(scaleVal2*12.5)
pScope.draw_image("eagleTail", -10, 100);
pop()

push()
scale(4);
pScope.draw_image("clawL", -220, 420);
pScope.draw_image("clawR", 170, 420);
pop()

push()
push();
translate(-400, -50);
scale(scaleVal2*20)
rotate(rotateWing);
pScope.draw_image("wingL", -250, 0);
pop();
push();
translate(400, -50);
scale(scaleVal2*20)
rotate(-rotateWing);
pScope.draw_image("wingR", 60, 0);
pop();
pop()

push()
scale(10)
pScope.draw_image("eagleHead", -15, 0);//ySwoop + -10000); 
pop()
pop()
pop()
pop()



//yellow tumbleweed background
noStroke();
fill('#FDDa85');
ellipse(0, 0, 800)
}





function cactus(x, y, animation, pScope){

push()

scale(0.6);
rotate(-13);
pScope.draw_image("cactus", 0, 795);

pop()

  
}





function tumbleweed(x, y, animation, pScope){
  //yellow background drawn in eagle function so that it is layered behind the loaded image
  
  if(animation.frame == 0){
    scale(2.55)
    rotate(180)
    pScope.draw_image("tumbleweed", -5, y)
  
  }
}





function horseJump(x, y, animation, pScope){
  push()
    let scaleVal = 0.2;
    let jumpFrames = 0.45;
    let horseStart = -2900;
    let horseBounce = -3230;
    translate(-230, 6)
    rotate(28);
  
  
    push()
    scale(scaleVal);
    
    if(animation.frame<=jumpFrames){
      let horseY;
      if(animation.frame<=jumpFrames/2){
        horseY = map(animation.frame, 0, jumpFrames/2, horseStart, horseBounce);
      }
      else{
        horseY = map(animation.frame, jumpFrames/2, jumpFrames, horseStart, horseBounce);
      }

      pScope.draw_image("horseGrey", 1200-animation.frame*1600, horseY); 
    }
    pop()
    pop()
  }


  


function horse(x, y, animation, pScope){

  let HorseScaleVal = 0.2;
  let jumpFrames = 0.45;
  let yOffset = 500;
  let xOffset = 1000;
  let horseStartX = -400;
  let horseStartY = -2515;
  let horseEndX = -4500;
  let horseEndY = -1000;


  scale(HorseScaleVal);
  if(animation.frame>=jumpFrames){ 
  let yLift = map(animation.frame, jumpFrames, 1, horseStartY+yOffset, horseEndX); 
  let xLift = map(animation.frame, jumpFrames, 1, horseStartX+xOffset, horseEndY); 

  translate(xLift, yLift); 
    rotate(8);
    pScope.draw_image("horseGrey", 0, 0);

}
}
  





function dustCloud(x, y, animation, pScope){


if(animation.frame < 1 && animation.frame>=0.65){
  let cloudsX = animation.frame*300;
  let cloudsY = animation.frame*-30;
  let opacity = animation.frame*0.5

   push()
   translate(cloudsX, cloudsY);

    push()
    scale(0.5);
    translate(-180, -750)
    rotate(-20)

  fill(234, 215, 187, opacity*250);
  noStroke();
  //cloud large
  ellipse(25, -20, 50, 60)
  ellipse(65, -50, 70, 40)
  ellipse(100, -20, 60, 60)
  ellipse(60, -10, 70, 60)
  
  //smaller clouds
  push()
  scale(0.75)
  translate(40, 0)
  fill(234, 215, 187, opacity*180);
  ellipse(210, 0, 50, 40)
  ellipse(215, -20, 40, 30)
  ellipse(230, 0, 50, 40)
  ellipse(215, 0, 40, 30)
  pop()

  fill(234, 215, 187, opacity*110);
  ellipse(160, 70, 25, 30)
  ellipse(135, 70, 55, 30)
  ellipse(140, 80, 30, 30)

pop()
pop();
}
}

