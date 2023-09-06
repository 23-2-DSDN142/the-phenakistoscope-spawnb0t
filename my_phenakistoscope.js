//6-18 (10) 
const SLICE_COUNT = 8;

//how phenakistoscope runs as a whole
function setup_pScope(pScope){
  pScope.output_mode(STATIC_DISK); //STATIC_FRAME / ANIMATED_FRAME / STATIC_DISK / ANIMATED_DISK / OUTPUT_GIF(1000) / OUTPUT_PRINT(A4orA3)
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true); 
  pScope.set_direction(CCW); //CW or CCW - inward or outward
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("cactus" , "png");
  pScope.load_image("horse" , "png");
  pScope.load_image("eagleTailPlaceholder" , "png");
  pScope.load_image("wingL" , "png");
  pScope.load_image("wingR" , "png");
  pScope.load_image("clawL" , "png");
  pScope.load_image("clawR" , "png");
  pScope.load_image("eagleBodyPlaceholder" , "png");
  pScope.load_image("eagleHeadPlaceholder" , "png");
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

}



//below functions are effectively the drawings
//function 'elementName'(x, y, animation, pScope){
//    scale(no.) / scale(0+animation.frameNo.) / scale(animation.wave)
//  }

function eagle(x, y, animation, pScope){
  
  pScope.fill_background('#b7e2f3');
  // ellipse(500, 500, 10000);

  let xEagleStart = 6000//right
  let yEagleStart = -12000 //top
  let xEagleFurthest = -6000//left
  let yEagleBottom = -7500//bottom (change?)

  let xSwoop = xEagleStart 
  let ySwoop = yEagleStart

  let scaleVal = 0.08;


// //scaling
// if(animation.frame <= 0.5){
//   scaleVal = (0.04);
// }
// else{
//   scaleVal = (0.08);
// }

push()
scale(scaleVal);
if(animation.frame <= 0.5){
  ySwoop = map(animation.frame, 0, 0.5, yEagleStart, yEagleBottom);
}
else{
  ySwoop = map(animation.frame, 0.5, 1, yEagleBottom, yEagleStart);
}

xSwoop = map(animation.frame, 0, 1, xEagleStart, xEagleFurthest);





pScope.draw_image("eagleTailPlaceholder", xSwoop, ySwoop+400);

pScope.draw_image("clawL", xSwoop-400, ySwoop+900);
pScope.draw_image("clawL", xSwoop+400, ySwoop+900);

pScope.draw_image("wingL", xSwoop-1200, ySwoop);
pScope.draw_image("wingR", xSwoop+1200, ySwoop);

pScope.draw_image("eagleBodyPlaceholder", xSwoop+60, ySwoop);

pScope.draw_image("eagleHeadPlaceholder", xSwoop, ySwoop);//ySwoop + -10000); 


pop()





//red ellipse for reference
// fill(255, 0, 0);
// ellipse(0, -800, 100, 100);



 
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
  pScope.draw_image("horse", 400, -4660);
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