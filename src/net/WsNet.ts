/**
 * Created by Administrator on 2015/8/3.
 */
class WsNet{
    static instance:WsNet;
    private socket:egret.WebSocket;
    public constructor(){
        if( WsNet.instance != null ){
            throw new TypeError("WsNet Singleton already constructed");
        }
        WsNet.instance  = this;
        this.initialize();
    }

    static GetInstance():WsNet{
        if( WsNet.instance == null ){
            WsNet.instance = new WsNet();
        }

        return WsNet.instance;
    }

    private initialize():void{
        this.socket = new egret.WebSocket();
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
        this.socket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        this.socket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this);
    }

    private onSocketError( e:egret.IOErrorEvent ):void{

    }

    private onSocketOpen( e:egret.Event ):void{

    }

    private onSocketClose( e:egret.Event ):void{

    }

    private onReceiveMessage( e:egret.ProgressEvent ):void{

    }
}