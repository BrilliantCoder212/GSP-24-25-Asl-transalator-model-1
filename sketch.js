letter='waiting'
function preload() {
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0GAx1e5w_/');
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

  classifyVideo();
}

function classifyVideo() {
  classifier.classify(video, gotResults);
  
  
  
  
}
function draw(){
    image(video, 0, 0, 400, 400);
  
  
   textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(letter, width / 2, height - 16);
  
}
function gotResults(error,results){
   if (error) {
    console.log(error);
    return;
  }
  console.log(results);
  letter= results[0].label;
  classifyVideo();
}






