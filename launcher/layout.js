/**
 * Created by Administrator on 2015/6/2.
 */
/**
 * Created by Administrator on 2015/5/12.
 */

LayoutSys = {};
LayoutSys.screenW = 640;
LayoutSys.screenH = 1008;
LayoutSys.scale = 0;
LayoutSys.scaleX = 0;
LayoutSys.scaleY = 0;
LayoutSys.IsFirstShow = true;

LayoutSys.layoutInfo = {
    "loadImg":{"width":124,"height":124,"left":250,"top":300}
};

LayoutSys.Show = function(){
    for(var key in LayoutSys.layoutInfo){
        var tg = document.getElementById(key);
        for( var pr in LayoutSys.layoutInfo[key] ){
            LayoutSys.setStyleAuto(tg,pr,LayoutSys.layoutInfo[key][pr]);
        }
    }
};
LayoutSys.Init = function(){
    LayoutSys.curClientWidth = document.documentElement.offsetWidth;
    LayoutSys.curClinetHeight = document.documentElement.offsetHeight;

    var scaleX = LayoutSys.curClientWidth/LayoutSys.screenW;
    var scaleY = LayoutSys.curClinetHeight/LayoutSys.screenH;
    scaleX = Math.floor(scaleX*100)/100;
    scaleY = Math.floor(scaleY*100)/100;
    if( scaleX > scaleY ){
        LayoutSys.scale = scaleY
    }else{
        LayoutSys.scale = scaleX;
    }
    LayoutSys.scaleX = scaleX;
    LayoutSys.scaleY = scaleY;
};


// mode w
LayoutSys.setStyleAuto = function( target,pr,baseValue,mode ){
    var value;
    if(mode == "w"){
        value = LayoutSys.getCurW(baseValue);
    }else if( pr == "left" ){
        value = LayoutSys.scaleX * baseValue;
    }else if( pr == "top" ) {
        value = LayoutSys.scaleY * baseValue;
    }else{
        value = LayoutSys.getCurH(baseValue);
    }

    LayoutSys.setStyle(target,pr,value);
};

LayoutSys.hideGame = function(){
    var gameDiv = document.getElementById('gameDiv');
    gameDiv.style.display = 'none';

    var inputDiv = document.getElementById('register');
    inputDiv.style.display = 'block';
};

LayoutSys.showGame = function(){
    var gameDiv = document.getElementById('gameDiv');
    gameDiv.style.display = 'block';

    var inputDiv = document.getElementById('register');
    inputDiv.style.display = 'none';
};

LayoutSys.getCurH = function(base){
    return LayoutSys.scale * base;
};

LayoutSys.getCurW = function(base){
    return LayoutSys.scale * base;
};

LayoutSys.setStyle = function( target,pr,value ){
    target.style[pr] = value + "px";
};