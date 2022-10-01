var x=0
var y=0
var draw_circle=""
var draw_rectangle=""
 function setup(){
Canvas=createCanvas(900,600)
}
SpeechRecognition=window.webkitSpeechRecognition
var speech=new SpeechRecognition()
function start(){
document.getElementById("status").innerHTML="System is now listening"
speech.start()
 

}
speech.onresult=function(event)
{
console.log(event)
content=event.results[0][0].transcript
document.getElementById("status").innerHTML="Speech has been recognized as "+content
if (content=="Circle"){
 x=Math.floor(Math.random()*900)
 y=Math.floor(Math.random()*600)
draw_circle="set"
}
if (content=="Rectangle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
   draw_rectangle="set"
   }
}
function draw(){
if (draw_circle=="set"){
 radius=Math.floor(Math.random()*185)
circle(x,y,radius)
document.getElementById("status").innerHTML="Circle is Drawn"
draw_circle=""
}
if (draw_rectangle=="set"){
    rectangle(x,y,75,85)
    document.getElementById("status").innerHTML="Rectangle is Drawn"
draw_rectangle=""    
}

}

