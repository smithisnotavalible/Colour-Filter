function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
tint_colour = ""
}
function draw(){
    image (video,0,0,300,300);
    tint(tint_colour)
}
function take_snapshot(){
    save('smith.png')
}
function filter_tint(){
    tint_colour=document.getElementById("colour_name").value;
}