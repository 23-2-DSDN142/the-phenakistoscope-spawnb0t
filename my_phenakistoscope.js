
//REWRITE NOTES - PROFESSIONALISM

//6-18 (10) 
const SLICE_COUNT = 8;

//how phenakistoscope runs as a whole
function setup_pScope(pScope){
  pScope.output_mode(STATIC_FRAME); //STATIC_FRAME / ANIMATED_FRAME / STATIC_DISK / ANIMATED_DISK / OUTPUT_GIF(1000) / OUTPUT_PRINT(A4orA3)
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false); 
  pScope.set_direction(CCW); //CW or CCW - inward or outward
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("cactus" , "png");
  pScope.load_image("horseGrey" , "png");
  pScope.load_image("eagleTail" , "png");
  pScope.load_image("wingL" , "png");
  pScope.load_image("wingR" , "png");
  pScope.load_image("clawL" , "png");
  pScope.load_image("clawR" , "png");
  pScope.load_image("eagleHead" , "png");
}



//setup of the layers of animation
function setup_layers(pScope){

  //background colour
  new PLayer(null, 220);  //whole circle background, ignoring boundaries

  var layer1 = new PLayer(eagle);
  layer1.mode(RING);
  layer1.set_boundary(400, 1000);

  var layer2 = new PLayer(tumbleweedCentre);
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

}



//function 'elementName'(x, y, animation, pScope){
//    scale(no.) / scale(0+animation.frameNo.) / scale(animation.wave)
//  }

function eagle(x, y, animation, pScope){
  
  pScope.fill_background('#b7e2f3');

  let xEagleStart = 6000//right
  let yEagleStart = -12000 //top
  let xEagleFurthest = -6000//left
  let yEagleBottom = -7500//bottom (change?)

  let xSwoop = xEagleStart 
  let ySwoop = yEagleStart

  let scaleVal = 0.08;
  let scaleVal2;

//scaling
if(animation.frame <= 0.5){
  scaleVal2 = map(animation.frame, 0, 0.5, 0.5, 0.8);
}
else{
  scaleVal2 = map(animation.frame, 0, 0.5, 0.8, 0.5);;
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


// for showing no swoop but animated frame
// xSwoop = 0;
// ySwoop = -10000;



scaleVal2 = 0.8

if(animation.frame <= 0.25){
  flap = map(animation.frame, 0, 0.25, );
}
else{
  flap = map(animation.frame, 0.25, 0.5, 0.8, 0.5);;
}


if(animation.frame <= 0.5){
  rotateWing = map(animation.frame, 0, 0.5, -30, 30);
}
// else if(animation.frame > 0.25 && animation.frame <=0.5){

// }
else{
  rotateWing = map(animation.frame, 0.5, 1, 30, -30);
}



push();

translate(xSwoop, ySwoop);
scale(scaleVal2);

push()
scale(scaleVal2*1.25)
pScope.draw_image("eagleTail", 0, 1000);
pop()

push()
scale(1.7);
pScope.draw_image("clawL", -400, 950);
pScope.draw_image("clawR", 400, 950);
pop()

push()
push();
translate(-1000, 100);
scale(scaleVal2*1.75)
rotate(rotateWing);
pScope.draw_image("wingL", -1500, 0);
pop();
push();
translate(1000, 100);
scale(scaleVal2*1.75)
rotate(-rotateWing);
pScope.draw_image("wingR", 1500, 0);
pop();
pop()

push()
scale(scaleVal2*1.4)
pScope.draw_image("eagleHead", -50, 0);//ySwoop + -10000); 
pop()
pop()
pop()

 
//cactus drawing in code
push()
scale(1);
rotate(350)
  translate(17, -485)

  // (114, 191, 86) main green
  // (160, 215, 125) lighter green front branch
  // (107, 175, 80) darker green back branch
  // (87, 153, 58) thorns

  fill(114, 191, 86);
  noStroke();
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(-10, -12);
  curveVertex(-20, -15);
  curveVertex(-30, -12)
  curveVertex(-40, 0);
  curveVertex(-40, 0);
  endShape();

  rect(-40, -1, 40, 90)
pop()
}





function cactus(x, y, animation, pScope){

  

  let scaleVal = 0.08;

rotate(350);

push()
scale(scaleVal);
// pScope.draw_image("cactus", 0, -5500);
pop()
  
}




function tumbleweedCentre(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) /2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill('#FDD985')
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  stroke('#AB7E4C')
  strokeWeight(7);
  line(0, 0, 0, -50);
  line(0, -50, 10, -100);
  line(10, -100, -30, -130);
  line(-30, -130, )

}





function horseJump(x, y, animation, pScope){
  push()
    let scaleVal = 0.1;
    let jumpFrames = 0.45;
    rotate(8);
  
  
    //400, -4660 is this horse's end pos. You may want to tweak the start pos (currently 300, -5000, 1900 - animation.frame*1600 and horseY)
  
    push()
    scale(scaleVal);
    
    if(animation.frame<=jumpFrames){//horse jump in first section of animation (jumpframes is at top of code, currently 0.45)
      let horseY;//create y val for horse
      if(animation.frame<=jumpFrames/2){//jump up
        horseY = map(animation.frame, 0, jumpFrames/2, -4660, -5000);
      }
      else{ //jump fall
        horseY = map(animation.frame, jumpFrames/2, jumpFrames, -5000, -4660);
      }

      // horseY = -4660;
      pScope.draw_image("horseGrey", 1900 - animation.frame*1600, horseY); //400, -4660 is the horse end pos. you may want to tweak start pos (currently 300, -5000)
    }
    // pScope.draw_image("horse", 400, -4660); //400, -4660 end pos
    pop()
  
    pop()
  }





function horse(x, y, animation, pScope){

  let scaleVal = 0.1;
  let jumpFrames = 0.45;
  let xOffset = 1000;

  scale(scaleVal);
  if(animation.frame>=jumpFrames){ 
//-4660, 400 horse start pos, -3000, -8660 end pos - probably tweak end points based on eagle, easiest way to do so is in static_disc mode
  let yLift = map(animation.frame, jumpFrames, 1, -4600+500, -8660); //500 is an offset to tweak start pos based on frame no
  let xLift = map(animation.frame, jumpFrames, 1, 400+xOffset, -3000); // 1000 is an offset to tweak start pos based on frame no

  translate(xLift, yLift); //used a translate for the horse position in case you want to animate the rotation/scale as well
    rotate(8);
    pScope.draw_image("horseGrey", 0, 0);

}
}





  
  


  
    



//variables: framerate, colours, slices