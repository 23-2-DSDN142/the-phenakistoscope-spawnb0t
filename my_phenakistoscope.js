//6-18 (10) 
const SLICE_COUNT = 6;

//how phenakistoscope runs as a whole
function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000)); //STATIC_FRAME / ANIMATED_FRAME / STATIC_DISK / ANIMATED_DISK / OUTPUT_GIF(1000) / OUTPUT_PRINT(A4orA3)
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true); 
  pScope.set_direction(CCW); //CW or CCW - inward or outward
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("cactus" , "png");
  pScope.load_image("horsePlaceholder" , "png");
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
  layer1.mode(SWIRL(1));
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(tumbleweedCentre);
  layer2.mode(RING);
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(cactus);
  layer3.mode(RING);
  layer3.set_boundary( 0, 400 );

var layer4 = new PLayer(horse);
  layer4.mode(RING);
  layer4.set_boundary( 0, 400 );
}



//below functions are effectively the drawings
//function 'elementName'(x, y, animation, pScope){
//    scale(no.) / scale(0+animation.frameNo.) / scale(animation.wave)
//  }

function eagle(x, y, animation, pScope){
  
  push()
  scale(0.07);
  pScope.draw_image("eagleTailPlaceholder", 0, 400);
  pop()

  push()
  scale(0.1);
  pScope.draw_image("wingL", -1200, -400);

  scale(1);
  pScope.draw_image("wingR", 1200, -400);
  pop()

  push()
  scale(0.14);
  pScope.draw_image("clawL", -500, 300);

  scale(1);
  pScope.draw_image("clawR", 500, 300);
  pop()

  push()
  scale(0.09);
  pScope.draw_image("eagleBodyPlaceholder", 0, -600);
  pop()
  
  push()
  scale(0.08);
  pScope.draw_image("eagleHeadPlaceholder", -100, -500);
  pop()

}

function tumbleweedCentre(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill('#d8f9ff')
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  stroke('#ffd59a')
  strokeWeight(7);
  line(0, 0, 0, -50);
  line(0, -50, 10, -100);
  line(10, -100, -30, -130);
  line(-30, -130, )

}


function horse(x, y, animation, pScope){

  translate(-100, 740);
  rotate(185);
  scale(0.1);
  pScope.draw_image("horsePlaceholder", 0,2800);

}


  function cactus(x, y, animation, pScope){

    translate(0, 800);
    rotate(160);
    scale(0.1);
    pScope.draw_image("cactus", -2200, 3000);
  
  }

  







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