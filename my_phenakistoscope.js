//6-18 (10) 
const SLICE_COUNT = 8;

//how phenakistoscope runs as a whole
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_FRAME); //STATIC_FRAME / ANIMATED_FRAME / STATIC_DISK / ANIMATED_DISK / OUTPUT_GIF(1000) / OUTPUT_PRINT(A4orA3)
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true); 
  pScope.set_direction(CCW); //CW or CCW - inward or outward
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("cactus" , "png");
  pScope.load_image("horse" , "png");
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
  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  //LAYERS
  // var 'layerName' = new PLayer('elementName');
  // 'layerName'.mode(SWIRL(no.) or RING);
  // 'layerName'.set_boundary(start from centre of slice, path end to edge);

  var layer1 = new PLayer(eagle);
  layer1.mode(RING);
  layer1.set_boundary(400, 1000);

  var layer2 = new PLayer(tumbleweedCentre);
  layer2.mode(RING);
  layer2.set_boundary( 0, 400);

  var layer3 = new PLayer(cactus);
  layer3.mode(RING);
  layer3.set_boundary( 400, 1000);

var layer4 = new PLayer(horse);
  layer4.mode(RING);
  layer4.set_boundary( 400, 1000);

  var layer5 = new PLayer(horseJump);
  layer5.mode(RING);
  layer5.set_boundary( 400, 1000);

}



//below functions are effectively the drawings
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

xSwoop = 0;
ySwoop = -10000;
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

pScope.draw_image("clawL", 400, 900);
pScope.draw_image("clawL", 400, 900);


push()
push();
translate(-2500, 0);
scale(scaleVal2*1.75)
rotate(rotateWing);
pScope.draw_image("wingL", 0, 0);
pop();
push();
translate(1000, 0);
scale(scaleVal2*1.75)
rotate(-rotateWing);
pScope.draw_image("wingR", 1500, 0);
pop();
pop()


pScope.draw_image("eagleHead", 0, 0);//ySwoop + -10000); 
pop()
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







function horse(x, y, animation, pScope){

  let scaleVal = 0.1;

  rotate(8);

  push()
  scale(scaleVal);
  //pScope.draw_image("horse", 400, -4660); // 400, -4660 start pos
  pop()

}

function horseJump(x, y, animation, pScope){

  let scaleVal = 0.1;

  rotate(8);

  push()
  scale(scaleVal);
  let jumpFrames = 0.45;
  if(animation.frame<=jumpFrames){
    let horseY;
    if(jumpFrames<=jumpFrames/2){
      horseY = map(jumpFrames, 0, jumpFrames/2, -4660, -5000);
    }
    else{
      horseY = map(jumpFrames, jumpFrames/2, jumpFrames, -5000, -4660);
    }
    pScope.draw_image("horse", 2000 - animation.frame*1600, horseY); //400, -4660 end pos
  }
  // pScope.draw_image("horse", 400, -4660); //400, -4660 end pos
  pop()

}


  function cactus(x, y, animation, pScope){

    let scaleVal = 0.08;

  rotate(340);

  push()
  scale(scaleVal);
  pScope.draw_image("cactus", 0, -5500);
  pop()
    
  }
  


  
    



//variables: framerate, colours, slices, ring/swirl




//basic basic coded eagle head
//function eagle(x, y, animation, pScope){
//   angleMode(DEGREES);
//   scale(0+animation.frame*5);

  
//   ellipse(0,0, 80,50); // draw head
//   fill(30);
//   ellipse(-10,-10,10,10); //draw eye
//   ellipse(10,-10,10,10); // draw eye
//   fill("#ffff00");
//   beginShape()
//   vertex(-10, 10)
//   vertex(0, 20)
//   vertex(10, 10);
//   vertex(-10, 10);
//   endShape();

// }







//original loaded layers
// //setup of the layers of animation
// function setup_layers(pScope){

//   //background colour
//   new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

//   //LAYERS
//   // var 'layerName' = new PLayer('elementName');
//   // 'layerName'.mode(SWIRL(no.) or RING);
//   // 'layerName'.set_boundary(start from centre of slice, path end to edge);

//   var layer1 = new PLayer(faces);
//   layer1.mode( SWIRL(5) );
//   layer1.set_boundary( 200, 1000 );

//   var layer2 = new PLayer(squares);
//   layer2.mode( RING );
//   layer2.set_boundary( 0, 400 );
// }



// //below functions are effectively the drawings
// //function 'elementName'(x, y, animation, pScope){
// //    scale(no.) / scale(0+animation.frameNo.) / scale(animation.wave)
// //  }

// function faces(x, y, animation, pScope){
  
//   scale(0+animation.frame*2);

//   ellipse(0,0,50,50); // draw head
//   fill(30);
//   ellipse(-10,-10,10,10); //draw eye
//   ellipse(10,-10,10,10); // draw eye
//   arc(0,10,20,10,0,180); // draw mouth

// }

// function squares(x, y, animation, pScope){

//   // this is how you set up a background for a specific layer
//   let angleOffset = (360 / SLICE_COUNT) / 2
//   let backgroundArcStart = 270 - angleOffset;
//   let backgroundArcEnd = 270 + angleOffset;

//   fill(66, 135, 245)
//   arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

//   fill(255)
//   rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

// }