/**
 * Created by Administrator on 2015/8/20.
 */
class ScrollPanel extends egret.gui.Group{
    static PANEL_COUNT:number =3;
    private lst:egret.gui.ArrayCollection;
    private gLst:egret.gui.Group[];
    private _curIndex:number = 0;
    public constructor(){
        super();
    }

    public createChildren():void{
        this.lst =  new egret.gui.ArrayCollection();

        this.gLst = [];
        for( var i:number=0; i< ScrollPanel.PANEL_COUNT;i++ ){
            var gg:egret.gui.Group = new egret.gui.Group();
            gg.width = egret.Stage.STAGE_WIDTH;
            gg.height = egret.Stage.STAGE_HEIGHT;
            this.gLst.push(gg);
            gg.y =  egret.Stage.STAGE_HEIGHT * i;
            this.addElement(gg);
        }
    }

    public Show( index:number ):void{
        if( this._curIndex != index ){
            this._curIndex = index;
        }
    }

    public AddClassFactory(classFactory:any):void{
        this.lst.addItem(classFactory);
    }

    public ClearClassFactory( classFactory:any ):void{
        var index:number = this.lst.getItemIndex(classFactory);
        if( index != -1 ){
            this.lst.removeItemAt(index);
        }
    }

    public ClearAllClassFactory( classFactory:any ):void{
            this.lst.removeAll();
    }
}