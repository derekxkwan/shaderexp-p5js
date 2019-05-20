let nshader;

let past_frame;
let cur_frame;
let shrimp;
let shrimp_dim = [0.5, 0.5];

function preload()
{
    nshader = loadShader("nshader.vert", "nshader.frag");
    shrimp = loadImage('../assets/shrimp.png');
}

function setup()
{
    createCanvas(windowWidth, windowHeight);


    past_frame = createGraphics(windowWidth, windowHeight);
    cur_frame = createGraphics(windowWidth, windowHeight, WEBGL);
    //cam = createCapture(VIDEO);
    //cam.size(windowWidth, windowHeight);
    cur_frame.noStroke();
   // cam.hide();
    
   
}



function draw()
{
  
    cur_frame.shader(nshader);


     let cur_w = windowWidth*shrimp_dim[0];
    let cur_h = windowHeight*shrimp_dim[1];
    let cur_x = (windowWidth - cur_w)/2.0;;
    let cur_y = (windowHeight - cur_h)/2.0;

    cur_frame.background(0);
    cur_frame.image(shrimp, -cur_w/2.0, -cur_h/2.0, cur_w, cur_h);

    nshader.setUniform("tex0", cur_frame);
    nshader.setUniform("numpix", mouseX/10.0);

    cur_frame.rect(0,0,width,height);
    

    image(cur_frame, 0, 0, width, height);


}


function windowResized()
{
    resizeCanvas(windowWidth,windowHeight);
}
