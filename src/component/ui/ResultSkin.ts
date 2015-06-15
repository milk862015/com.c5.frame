class ResultSkin extends egret.gui.Panel{
	public constructor(){
		super();
		this.skinName = "skins.ui.ResultSkin";
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
	}

	private onAddToStage(e:egret.Event):void{
		this.initialize();
		this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);

		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
	}

	private onRemoveFromStage( e:egret.Event ):void{
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this);
	}

	private initialize():void{

	}

}