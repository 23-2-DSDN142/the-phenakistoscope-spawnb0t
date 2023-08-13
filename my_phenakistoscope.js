//6-18 (10) 
const SLICE_COUNT = 10;

//how phenakistoscope runs as a whole
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK); //STATIC_FRAME / ANIMATED_FRAME / STATIC_DISK / ANIMATED_DISK / OUTPUT_GIF(sizePixels) / OUTPUT_PRINT(A4orA3)
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true); 
  pScope.set_direction(CCW); //CW or CCW - inward or outward
  pScope.set_slice_count(SLICE_COUNT);
}



//setup of the layers of animation
function setup_layers(pScope){

  //background colour
  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  //LAYERS
  // var 'layerName' = new PLayer('elementName');
  // 'layerName'.mode(SWIRL(no.) or RING);
  // 'layerName'.set_boundary(start from centre of slice, path end to edge);

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}



//below functions are effectively the drawings
//function 'elementName'(x, y, animation, pScope){
//    scale(no.) / scale(0+animation.frameNo.) / scale(animation.wave)
//  }

function faces(x, y, animation, pScope){
  
  scale(0+animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}

//negative numbers reverse movements

//LOAD IMAGE
//pScope.load_image("imageName" , "extension")
//function 'imageName'
//    scale();
//    pScope.draw.image("imageName")