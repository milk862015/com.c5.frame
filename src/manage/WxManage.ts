/**
 * Created by Administrator on 2015/7/6.
 */
class WxManage{
    static instance:WxManage;
    private timestamp:string;
    private appId:string;
    private nonceStr:string;
    constructor(){
        if(WxManage.instance != null){
            throw new TypeError("WxManage Singleton already constructed");
        }

        WxManage.instance = this;
        this.initialize();
    }

    private initialize():void{

    }

    static GetInstance():WxManage{
        if( WxManage.instance == null ){
            WxManage.instance = new WxManage();
        }

        return WxManage.instance
    }

    public Init():void{
        this.timestamp = Math.floor(new Date().getTime()/1000).toString();
        GameHttp.GetTicket("",this.timestamp,this.getTicketCallback,this);
    }

    private getTicketCallback( e:egret.Event ):void{
        var urlLoader:egret.URLLoader = <egret.URLLoader>e.target;
        urlLoader.removeEventListener(egret.Event.COMPLETE,this.getTicketCallback,this);

        var obj:any;
        try{
            obj = JSON.parse(urlLoader.data)
        }catch(e){
            obj = {}
        }

        if( obj.hasOwnProperty("result") && obj["result"] != false ){
            var bodyConfig:BodyConfig = new BodyConfig();
            bodyConfig.debug = true;
            bodyConfig.appId = this.appId;
            bodyConfig.nonceStr = this.nonceStr;
            bodyConfig.signature = obj["result"];
            bodyConfig.timestamp = parseInt(this.timestamp);
            bodyConfig.jsApiList = ["onMenuShareTimeline","onMenuShareAppMessage"];
            if(wx){
                wx.config(bodyConfig);
                wx.ready(function(){
                   alert("ready")
                });
            }
        }
    }
}