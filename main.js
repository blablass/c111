prediction_1 = ""
prediction_2 = ""
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Camera = document.getElementById("Camera")
Webcam.attach(Camera)
function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captureIMG' src='"+ data_uri +"'>"
    });
}
console.log("ml5 version" ,ml5.version)
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BQQigr_cF/model.json", modelloaded)
function modelloaded(){
    console.log("modelloaded")
}
function speak(){
    var sync = window.speechSynthesis;
    data1 = "the first prediction is " + prediction_1
    data2 = "the second prediction is " + prediction_2 
    var utter = new SpeechSynthesisUtterance(data1 + data2)
    sync.speak(utter)
}