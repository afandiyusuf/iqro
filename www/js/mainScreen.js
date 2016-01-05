var MainScreen = function(stage)
{
    
    var thisStage = stage;
    this.init = function(){
        var vertMargin = sH/6;
        var horMargin = sW/10;
        var bg = new createjs.Bitmap("image/bg_wood.png");
        bg.image.onload = handleOnLoad;
        bg.scaleX = reScale(bg.image.width,sW);
        bg.scaleY = reScale(bg.image.height,sH);
        
        var header = new createjs.Bitmap("image/bg_blue.png");
        header.image.onload = handleOnLoad;
        header.scaleX = reScale(header.image.width,sW);
        header.scaleY = reScale(header.image.height,sH/8);
        
        
        var button1 = new createjs.Bitmap("image/bg_red.png");
        button1.image.onload = handleOnLoad;
        button1.scaleX = reScale(button1.image.width,sW/5);
        button1.scaleY = reScale(button1.image.height,sW/5);
        button1.x = horMargin;
        button1.y = header.y+(header.image.height*header.scaleY)+vertMargin;
        
        var button2 = new createjs.Bitmap("image/bg_red.png");
        button2.image.onload = handleOnLoad;
        button2.scaleX = reScale(button2.image.width,sW/5);
        button2.scaleY = reScale(button2.image.height,sW/5);
        button2.x = horMargin+button1.x+(button2.image.width * button2.scaleX);
        button2.y = button1.y;
        
        var button3 = new createjs.Bitmap("image/bg_red.png");
        button3.image.onload = handleOnLoad;
        button3.scaleX = reScale(button2.image.width,sW/5);
        button3.scaleY = reScale(button2.image.height,sW/5);
        button3.x = horMargin+button2.x+(button2.image.width * button2.scaleX);
        button3.y = button1.y;
        
        var nextUI = new createjs.Bitmap("image/bg_red.png");
        button3.image.onload = handleOnLoad;
        button3.scaleX = reScale(button2.image.width,sW/5);
        button3.scaleY = reScale(button2.image.height,sW/5);
        button3.x = horMargin+button2.x+(button2.image.width * button2.scaleX);
        button3.y = button1.y;
        
        
        stage.addChild(bg);
        stage.addChild(header);
        stage.addChild(button1);
        stage.addChild(button2);
        stage.addChild(button3);
        stage.update();
        
        
        
        function handleOnLoad()
        {
            stage.update();
        }
    }
};

function reScale(from, to)
{
    return to/from;
}

