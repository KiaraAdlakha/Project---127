function preload()
{
    harry_potter=loadSound("music2.mp3");
    peter_pan=loadSound("music.mp3");
}
function setup()
{
canvas=createCanvas(600,500);
canvas.position(600,300);
video=createCapture(VIDEO);
video.hide();
}
function draw()
{
image(video,0,0,600,500);
}