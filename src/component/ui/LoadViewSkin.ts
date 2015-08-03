/**
 * Created by Administrator on 2015/6/17.
 */
class LoadViewSkin extends egret.gui.Panel{
    private loadProgress:egret.gui.UIAsset;
    private loadTxt:egret.gui.Label;
    private loading:egret.gui.Label;
    private baby:egret.gui.UIAsset;
    private bg:egret.gui.UIAsset;

    private baseW:number = 0;
    private baseX:number = 0;
    public constructor(){
        super();
        this.skinName = "skins.ui.LoadViewSkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(e:egret.Event):void{
        this.initialize();
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);

        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
        GameResponse.GetInstance().addEventListener(GameEvent.LOAD_PROGRESS,this.onProgressHandler,this);
        //GameResponse.GetInstance().addEventListener(GameEvent.LOAD_COMPLETE,this.onCompleteHandler,this);

        this.baseW = this.loadProgress.width;
        this.baseX = this.baby.x;
        this.setProgress(0);

        egret.Tween.get(this.loading,{loop:true}).wait(200).call(this.updateLoading,this);
    }

    private updateLoading():void{
        if( this.loading.text.length > 9 ){
            this.loading.text = "loading";
        }else{
            this.loading.text = this.loading.text + ".";
        }
    }

    private setProgress( value:number ):void{
        if( value < 0){
            value = 0;
        }else if( value > 100 ){
            value = 100;
        }

        this.loadProgress.width = value/100 * this.baseW;
        this.baby.x = this.baseX + value/100 * this.baseW;

        this.loadTxt.text = value + "%";
    }

    private onProgressHandler( e:GameEvent ):void{
        var cur:number = e.cur;
        var total:number = e.total;
        var progress:number = Math.floor(cur/total*100);
        this.setProgress(progress);
    }

    //private onCompleteHandler( e:GameEvent ):void{
    //
    //}

    private onCompleteHandler( e:GameEvent ):void{

    }

    public HideBg():void{
        this.bg.visible = false;
    }

    private onRemoveFromStage( e:egret.Event ):void{
        egret.Tween.removeTweens(this.loading);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);

        GameResponse.GetInstance().removeEventListener(GameEvent.LOAD_PROGRESS,this.onProgressHandler,this);
        //GameResponse.GetInstance().removeEventListener(GameEvent.LOAD_COMPLETE,this.onCompleteHandler,this);
    }

    private initialize():void{

    }
}