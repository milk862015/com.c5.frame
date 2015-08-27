class UIManage {
	static instance:UIManage;
	private curShow:egret.gui.Panel;
	private curClass:any;
	public constructor(){
		if( UIManage.instance != null ){
			throw new TypeError("UIManage Singleton already constructed")
		}
		this.initialize();
		UIManage.instance = this;
	}

	private initialize():void{
	}

	static GetInstance():UIManage{
		if(UIManage.instance == null){
			UIManage.instance = new UIManage();
		}

		return UIManage.instance;
	}

	public GetShowUI():egret.gui.Panel{
		return this.curShow
	}

	public Show(classFactory:any):void{
		if(this.curClass == classFactory){
			return
		}
		this.Close();
		this.curClass = classFactory;

		if( classFactory != null ){
			this.curShow = new classFactory()
		}

		if( this.curShow ){
			Core.UILayer.addElement(this.curShow)
		}
	}

	public Close():void{
		if(this.curShow  && this.curShow.parent){
			var pa:egret.gui.Panel = <egret.gui.Panel>this.curShow.parent;
			pa.removeElement(this.curShow);
			this.curShow = null;
		}
	}

	public ShowPopView(classFactory:any,effect?:boolean):void{
		if( effect === void 0 ){effect= true}

		var target:any = new classFactory();
		if( effect ){
			target["scaleX"] = 0;
			target["scaleY"] = 0;
			egret.Tween.get(target).to({scaleX:1,scaleY:1},300);
		}
		egret.gui.PopUpManager.addPopUp(target,true,true);

		//…Ë÷√µØ¥∞µƒƒ£Ã¨’⁄’÷
		egret.gui.PopUpManager.modalColor = 0x000000;
		egret.gui.PopUpManager.modalAlpha = 0.8;
	}

	public ClosePopView( target:egret.gui.UIComponent,effect?:boolean ):void{
		if( effect === void 0 ){effect= true}
		if( effect ){
			egret.Tween.get(target).to({scaleX:0,scaleY:0},300).call(this.removeTarget,this,[target]);
		}else{
			this.removeTarget(target);
		}
	}

	private removeTarget( target:egret.gui.UIComponent ):void{
		egret.gui.PopUpManager.removePopUp(target);
	}

	public GetCurClass():any{
		return this.curClass;
	}
}