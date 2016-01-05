   var sW = window.innerWidth;
    var sH = window.innerHeight;
function init(){
 
    var stage = new createjs.Stage("demoCanvas");
    stage.canvas.width = sW;
    stage.canvas.height = sH;

    var mainScreen = new MainScreen(stage)
    mainScreen.init();

}