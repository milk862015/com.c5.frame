/**
 * Created by Administrator on 2015/5/12.
 */

InputManage = {};
InputManage.screenW = 640;
InputManage.screenH = 1008;
InputManage.scale = 0;
InputManage.scaleX = 0;
InputManage.scaleY = 0;
InputManage.IsFirstShow = true;

InputManage.layoutInfo = {
    "loadGif":{"width":124,"height":124,"left":250,"top":350}
};

InputManage.Show = function(){

    for(var key in InputManage.layoutInfo){
        var tg = document.getElementById(key);
        for( var pr in InputManage.layoutInfo[key] ){
            InputManage.setStyleAuto(tg,pr,InputManage.layoutInfo[key][pr]);
        }
    }
};

InputManage.init = function(){
    InputManage.curClientWidth = document.documentElement.offsetWidth;
    InputManage.curClinetHeight = document.documentElement.offsetHeight;

    var scaleX = InputManage.curClientWidth/InputManage.screenW;
    var scaleY = InputManage.curClinetHeight/InputManage.screenH;
    scaleX = Math.floor(scaleX*100)/100;
    scaleY = Math.floor(scaleY*100)/100;
    if( scaleX > scaleY ){
        InputManage.scale = scaleY
    }else{
        InputManage.scale = scaleX;
    }
    InputManage.scaleX = scaleX;
    InputManage.scaleY = scaleY;
};


// mode w
InputManage.setStyleAuto = function( target,pr,baseValue,mode ){
    var value;
    if(mode == "w"){
        value = InputManage.getCurW(baseValue);
    }else if( pr == "left" ){
        value = InputManage.scaleX * baseValue;
    }else if( pr == "top" ) {
        value = InputManage.scaleY * baseValue;
    }else if(pr == "height") {
        value = InputManage.scaleY * baseValue;
    }else if(pr == "width"){
        value = InputManage.scaleX * baseValue;
    }else{
        value = InputManage.getCurH(baseValue);
    }

    InputManage.setStyle(target,pr,value);
};

InputManage.hideGame = function(){
    var gameDiv = document.getElementById('gameDiv');
    gameDiv.style.display = 'none';

    var inputDiv = document.getElementById('register');
    inputDiv.style.display = 'block';
};

InputManage.showGame = function(){
    var gameDiv = document.getElementById('gameDiv');
    gameDiv.style.display = 'block';

    var inputDiv = document.getElementById('register');
    inputDiv.style.display = 'none';
};

InputManage.getCurH = function(base){
    return InputManage.scale * base;
};

InputManage.getCurW = function(base){
    return InputManage.scale * base;
};

// target
InputManage.setStyle = function( target,pr,value ){
    target.style[pr] = value + "px";
};