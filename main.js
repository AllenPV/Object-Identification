img = "";
status = "";
objects = [];
function setup(){
    Canvas = createCanvas(640,420);
    Canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status :Detecting Object";
}
function preload(){
    img = loadImage('https://www.theladders.com/wp-content/uploads/dog-cat-190709-800x450.jpg');
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function draw()
{
    image(img,0,0,640,420);
   if(status != ""){
       for(i = 0;i<objects.length;i++){
           document.getElementById("status").innerHTML = "Status-Object Detected";
           fill("#FF0000");
           percent = floor(objects[i].confidence*100);
           text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
   }

    
}

function gotResult(error,results){
    if(error){
    console.log(error);
    }
    console.log(results);
    objects = results;
}