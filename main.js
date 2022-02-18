video = "";
stats = "";
objects = [];

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
    if(stats !=""){
        objectDetector.detect(video, gotResult);
        for (i = 0; i <objects.length; i++) {
            document.getElementById("status").innerHTML="stats : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects detected are :"+ objects.length;

            Fill("#FF0000");
            percent =floor(objects[1].confidence * 100);
            text(objects[1].label + "%", objects[1].x +15, objects.y +15);
            noFill();
            stroke("FF0000");
            Rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
            
        
    }
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    stats = true;
    video.loop();
    video.spees(1);
    video.volume(0);
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}