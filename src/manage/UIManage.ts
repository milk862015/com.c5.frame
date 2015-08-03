class UIManage {
	static instance:UIManage;
	private dic:Object;
	private curShow:egret.gui.Panel;
	private curKey:string;
	public constructor(){
		if( UIManage.instance != null ){
			throw new TypeError("UIManage Singleton already constructed")
		}
		this.initialize();
		UIManage.instance = this;
	}

	private initialize():void{
		this.dic = {};
		this.dic[UIKey.LoginSkin] = LoginSkin;
		this.dic[UIKey.FightSkin] = FightSkin;
		this.dic[UIKey.ResultSkin] = ResultSkin;
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

	public Show(key:string):void{
		if(this.curKey == key){
			return
		}
		this.Close();
		this.curKey = key;

		var classFactory:any = this.dic[key];
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

	public ShowPopView(panel:egret.gui.Panel):void{
		egret.gui.PopUpManager.addPopUp(panel);
	}

	public ClosePopView( panel:egret.gui.Panel ):void{
		egret.gui.PopUpManager.removePopUp(panel);
	}

	public GetCurKey():string{
		return this.curKey;
	}
}