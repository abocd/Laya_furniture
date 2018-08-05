var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var tabSelectUI=(function(_super){
		function tabSelectUI(){
			
		    this.tab_header=null;
		    this.floor=null;
		    this.wall=null;
		    this.sofa=null;
		    this.cabinet=null;
		    this.window=null;

			tabSelectUI.__super.call(this);
		}

		CLASS$(tabSelectUI,'ui.tabSelectUI',_super);
		var __proto__=tabSelectUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tabSelectUI.uiView);

		}

		tabSelectUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"height":450},"child":[{"type":"Tab","props":{"y":0,"x":0,"width":750,"selectedIndex":0,"height":56},"child":[{"type":"Button","props":{"stateNum":2,"skin":"home/0-tab/btn_tap0.png","name":"item0"}},{"type":"Button","props":{"x":150,"stateNum":2,"skin":"home/0-tab/btn_tap1.png","name":"item1"}},{"type":"Button","props":{"x":300,"stateNum":2,"skin":"home/0-tab/btn_tap2.png","name":"item2"}},{"type":"Button","props":{"x":450,"stateNum":2,"skin":"home/0-tab/btn_tap3.png","name":"item3"}},{"type":"Button","props":{"x":600,"stateNum":2,"skin":"home/0-tab/btn_tap4.png","name":"item4"}}]},{"type":"Image","props":{"y":56,"x":0,"var":"tab_header","skin":"home/0-tab/conbg.png","sizeGrid":"100,100,100,100"}},{"type":"Panel","props":{"y":56,"width":750,"var":"floor","vScrollBarSkin":"comp/vscroll.png","height":394},"child":[{"type":"Image","props":{"y":52,"x":56,"skin":"home/1-floor/big_floor_img1.png"}},{"type":"Image","props":{"y":52,"x":314,"skin":"home/1-floor/big_floor_img2.png"}},{"type":"Image","props":{"y":52,"x":571,"skin":"home/1-floor/big_floor_img3.png"}},{"type":"Image","props":{"y":227,"x":56,"skin":"home/1-floor/big_floor_img4.png"}},{"type":"Image","props":{"y":227,"x":314,"skin":"home/1-floor/big_floor_img5.png"}},{"type":"Image","props":{"y":227,"x":571,"skin":"home/1-floor/big_floor_img6.png"}},{"type":"Image","props":{"y":401,"x":56,"skin":"home/1-floor/big_floor_img7.png"}},{"type":"Image","props":{"y":401,"x":314,"skin":"home/1-floor/big_floor_img8.png"}}]},{"type":"Panel","props":{"y":56,"x":0,"width":750,"var":"wall","vScrollBarSkin":"comp/vscroll.png","height":394},"child":[{"type":"Image","props":{"y":47,"x":56,"skin":"home/2-wallpaper/big_wall_img1.png"}},{"type":"Image","props":{"y":49,"x":314,"skin":"home/2-wallpaper/big_wall_img2.png"}},{"type":"Image","props":{"y":53,"x":572,"skin":"home/2-wallpaper/big_wall_img3.png"}},{"type":"Image","props":{"y":229,"x":53,"skin":"home/2-wallpaper/big_wall_img4.png"}},{"type":"Image","props":{"y":231,"x":312,"skin":"home/2-wallpaper/big_wall_img5.png"}},{"type":"Image","props":{"y":226,"x":570,"skin":"home/2-wallpaper/big_wall_img6.png"}},{"type":"Image","props":{"y":387,"x":67,"skin":"home/2-wallpaper/big_wall_img7.png"}}]},{"type":"Panel","props":{"y":56,"x":0,"width":750,"var":"sofa","vScrollBarSkin":"comp/vscroll.png","height":394},"child":[{"type":"Image","props":{"y":52,"x":56,"skin":"home/3-sofa/big_sofa_img1.png"}},{"type":"Image","props":{"y":56,"x":319,"skin":"home/3-sofa/big_sofa_img2.png"}},{"type":"Image","props":{"y":47,"x":574,"skin":"home/3-sofa/big_sofa_img3.png"}},{"type":"Image","props":{"y":235,"x":56,"skin":"home/3-sofa/big_sofa_img4.png"}},{"type":"Image","props":{"y":231,"x":312,"skin":"home/3-sofa/big_sofa_img5.png"}},{"type":"Image","props":{"y":228,"x":573,"skin":"home/3-sofa/big_sofa_img6.png"}},{"type":"Image","props":{"y":393,"x":57,"skin":"home/3-sofa/big_sofa_img7.png"}},{"type":"Image","props":{"y":391,"x":317,"skin":"home/3-sofa/big_sofa_img8.png"}},{"type":"Image","props":{"y":390,"x":579,"skin":"home/3-sofa/big_sofa_img9.png"}}]},{"type":"Panel","props":{"y":56,"x":0,"width":750,"var":"cabinet","vScrollBarSkin":"comp/vscroll.png","height":394},"child":[{"type":"Image","props":{"y":54,"x":60,"skin":"home/4-cabinet/big_sark_img1.png"}},{"type":"Image","props":{"y":51,"x":318,"skin":"home/4-cabinet/big_sark_img2.png"}},{"type":"Image","props":{"y":54,"x":574,"skin":"home/4-cabinet/big_sark_img3.png"}},{"type":"Image","props":{"y":227,"x":58,"skin":"home/4-cabinet/big_sark_img4.png"}},{"type":"Image","props":{"y":231,"x":318,"skin":"home/4-cabinet/big_sark_img5.png"}},{"type":"Image","props":{"y":233,"x":577,"skin":"home/4-cabinet/big_sark_img6.png"}},{"type":"Image","props":{"y":398,"x":55,"skin":"home/4-cabinet/big_sark_img7.png"}},{"type":"Image","props":{"y":397,"x":322,"skin":"home/4-cabinet/big_sark_img8.png"}},{"type":"Image","props":{"y":399,"x":580,"skin":"home/4-cabinet/big_sark_img9.png"}},{"type":"Image","props":{"y":578,"x":62,"skin":"home/4-cabinet/big_sark_img10.png"}},{"type":"Image","props":{"y":570,"x":320,"skin":"home/4-cabinet/big_sark_img11.png"}}]},{"type":"Panel","props":{"y":56,"x":0,"width":750,"var":"window","vScrollBarSkin":"comp/vscroll.png","height":394},"child":[{"type":"Image","props":{"y":57,"x":53,"skin":"home/5-window/big_window_img1.png"}},{"type":"Image","props":{"y":52,"x":318,"skin":"home/5-window/big_window_img2.png"}},{"type":"Image","props":{"y":52,"x":580,"skin":"home/5-window/big_window_img3.png"}},{"type":"Image","props":{"y":232,"x":59,"skin":"home/5-window/big_window_img4.png"}},{"type":"Image","props":{"y":226,"x":320,"skin":"home/5-window/big_window_img5.png"}},{"type":"Image","props":{"y":230,"x":580,"skin":"home/5-window/big_window_img6.png"}},{"type":"Image","props":{"y":395,"x":56,"skin":"home/5-window/big_window_img7.png"}},{"type":"Image","props":{"y":392,"x":315,"skin":"home/5-window/big_window_img8.png"}},{"type":"Image","props":{"y":395,"x":575,"skin":"home/5-window/big_window_img9.png"}},{"type":"Image","props":{"y":559,"x":66,"skin":"home/5-window/big_window_img10.png"}},{"type":"Image","props":{"y":552,"x":314,"skin":"home/5-window/big_window_img11.png"}},{"type":"Image","props":{"y":542,"x":580,"skin":"home/5-window/big_window_img12.png"}}]}]};
		return tabSelectUI;
	})(View);