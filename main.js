x = 0;
y = 0;
draw_apples = "";
apple = "";
speak_data = "";
to_number = 0;
screen_width=window.innerWidth;
screen_height=window.innerHeight;

var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function preload(){
apple=loadImage("apple.jpg");
}

function start() {
    document.getElementById("status").innerHTML = "System is listning please say something";
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech has been recognised as : " + content;
    to_number=Number(content);

    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "Started drawing " + content + " apples";
        draw_apples = "set";
    }
    else{
    document.getElementById("status").innerHTML = "Speech recognised is not a NUMBER!";
    }
}
function setup() {
    canvas = createCanvas(screen_width, screen_height);
}
function draw() {
    if (draw_apples == "set") {
        for(var i=1;i<=to_number;i++){
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple,x,y,50,50) 
        }
        document.getElementById("status").innerHTML = "Apples are drawn "+speak();
        draw_apples = "";
    }
    
}
function speak(){
synth=window.speechSynthesis;
speakdata=content+" Apples are drawn";
utter=new SpeechSynthesisUtterance(speakdata);
synth.speak(utter);
}