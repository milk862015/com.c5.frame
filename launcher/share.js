var SGame ={};

// 0-有黑框，等比缩放 1-无黑框，拉伸缩放
SGame.ScaleMode = 0;
//不显示结束页的时候的回调函数
SGame.NotShowCallBack = function(obj){

};

 SGame.Share = function(obj){

};

SGame.Lottery=function (){

};

SGame.ShowLoading = function(){
    var loading = document.getElementById("loading");
    loading.style.display = "block";
};

SGame.HideLoading = function(){
    var loading = document.getElementById("loading");
    loading.style.display = "none";
};