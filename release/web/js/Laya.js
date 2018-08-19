function onStart(){this.scale=null,this.start_point_info=null,this.flipping=!1,this.start=new ui.startPageUI,this.startx=this.start.start.x,this.start.start.x=-999*this.start.start.width,Laya.loader.load(["res/atlas/home/0-tab.atlas","res/atlas/home/1-floor.atlas","res/atlas/home/2-wallpaper.atlas","res/atlas/home/3-sofa.atlas","res/atlas/home/4-cabinet.atlas","res/atlas/home/5-window.atlas","res/atlas/home/top.atlas","res/atlas/home/vscroll.atlas","home/1-floor/750_floor_img10.png","home/1-floor/750_floor_img2.png","home/1-floor/750_floor_img4.png","home/1-floor/750_floor_img6.png","home/1-floor/750_floor_img8.png","home/1-floor/750_floor_img1.png ","home/1-floor/750_floor_img3.png","home/1-floor/750_floor_img5.png","home/1-floor/750_floor_img7.png","home/1-floor/750_floor_img9.png","home/2-wallpaper/750_wall_img1.png","home/2-wallpaper/750_wall_img3.png","home/2-wallpaper/750_wall_img5.png","home/2-wallpaper/750_wall_img7.png","home/2-wallpaper/750_wall_img2.png","home/2-wallpaper/750_wall_img4.png","home/2-wallpaper/750_wall_img6.png","home/2-wallpaper/750_wall_img8.png","home/music/bg.mp3","res/atlas/comp.atlas"],null,Laya.Handler.create(this,onProgress,null,!1)),Laya.stage.addChild(this.start),this.start.y=0,this.start.x=(Laya.Browser.width/Laya.Browser.height*1334-this.start.width)/2,this.start.start.on(Laya.Event.CLICK,this,onStartClick),Laya.stage.on(Laya.Event.MOUSE_MOVE,this,onScale),Laya.stage.on(Laya.Event.MOUSE_UP,this,onStopScale)}function onProgress(a){this.start.percent.text="内容加载中..."+(100*a).toFixed(2)+"%",a>=1&&(this.start.percent.visible=!1,this.start.start.x=this.startx,this.start.start.loadImage(this.start.start.skin),Laya.SoundManager.playMusic("home/music/bg.mp3",-1),Laya.SoundManager.setMusicVolume(.1))}function onStartClick(){onMain(),onTab(),onLable(),Laya.stage.removeChildAt(0),showDragRegion()}function onMain(){this.main=new ui.mainPageUI,this.main.y=0,this.start.x=0,this.main.width=Laya.Browser.width,this.main.wall.loadImage("home/top/wall_bg.png",0,0,this.main.wall.width,this.main.wall.height),this.main.floor.loadImage("home/top/floot_bg.png",0,0,this.main.floor.width,this.main.floor.height),this.main.home.on(Laya.Event.CLICK,this,onClickMain),Laya.stage.addChild(this.main),mainhome=this.main.home}function onTab(){this.ts=new ui.tabSelectUI,this.ts.scaleX=Laya.stage.width/950,this.ts.scaleY=this.ts.scaleX,this.ts.x=(Laya.stage.width-this.ts.width)/2,this.ts_proration=this.ts.width/this.ts.height,this.ts.x=0,this.ts.height=this.ts.width/this.ts_proration,this.ts.y=Laya.stage.height-this.ts.height*this.ts.scaleY,Laya.stage.addChild(ts),this.ts.viewStack.on(Laya.Event.CLICK,this,onStackClick),this.ts.tab.selectHandler=new Laya.Handler(this,onSelect);for(var a in this.ts.viewStack._childs){var t=this.ts.viewStack._childs[a];for(var e in t._childs[0]._childs){t._childs[0]._childs[e].on(Laya.Event.CLICK,this,onImageClick)}}onPreview()}function onLable(){this.labelFloor=new Laya.Image,this.labelFloor.x=Laya.stage.width-105,this.labelFloor.y=Laya.stage.height-this.ts.height*this.ts.scaleY-165,Laya.stage.addChild(this.labelFloor),this.labelFloor.visible=!1,this.labelWall=new Laya.Image,this.labelWall.x=Laya.stage.width-105,this.labelWall.y=45,Laya.stage.addChild(this.labelWall),this.labelWall.visible=!1}function onPreview(){this.preview=new Laya.Button,this.preview.skin="home/top/photo_icon.png",this.preview.x=Laya.stage.width-105,this.preview.y=Laya.stage.height-this.ts.height*this.ts.scaleY-105,this.preview.stateNum=1,this.preview.width=82,this.preview.height=82,Laya.stage.addChild(this.preview),this.preview.on(Laya.Event.CLICK,this,onPreviewClick)}function onPreviewClick(a){console.info("preview"),clearIco(),this.ts.visible=!1,this.preview.visible=!1;var t=Laya.stage.drawToCanvas(Laya.stage.width,Laya.stage.height-this.ts.height*this.ts.scaleY,0,0).getCanvas(),e=new Image;e.src=t.toDataURL(),e.width=Laya.Browser.clientWidth,e.style.position="fixed",e.style.left=0,e.style.top=0,e.style.zIndex=18,document.getElementsByTagName("body")[0].appendChild(e),showFooter(),a.stopPropagation()}function showFooter(){}function onStackClick(a){a.stopPropagation()}function onImageClick(a){if(console.info(a,a.target instanceof Laya.Image),a.target instanceof Laya.Image){var t=a.target._skin;console.info(t);var e=t.split("/");e[e.length-1];e[e.length-1]="750_"+e[e.length-1].substr(4);var i=e.join("/");switch(e[e.length-2]){case"1-floor":this.main.floor.graphics.clear(),this.main.floor.loadImage(i,0,0,this.main.floor.width,this.main.floor.height),e[e.length-1]="txt.png";s=e.join("/");this.labelFloor.graphics.clear(),this.labelFloor.loadImage(s,0,0),this.labelFloor.visible=!0;break;case"2-wallpaper":this.main.wall.graphics.clear(),this.main.wall.loadImage(i,0,0,this.main.wall.width,this.main.wall.height),e[e.length-1]="text_750_"+e[e.length-1].substr(4);var s=e.join("/");this.labelWall.graphics.clear(),this.labelWall.loadImage(s,0,0),this.labelWall.visible=!0;break;default:insertSprite(i)}}}function onSelect(a){this.ts.viewStack.selectedIndex=a}function insertSprite(a){clearIco(null);var t=new Laya.Sprite,e=new Laya.Image;e.loadImage(a,0,0,0,0,Laya.Handler.create(this,function(i){e.pivotX=e.width/2,e.pivotY=e.height/2,t.pos(this.main.wall.width/2-i.width/2,this.main.wall.height/2-i.height/2),e.size(e.width,e.height),t.addChildAt(e,0),t.addChildAt(_drawLineBox(e),1);var s=new Laya.Image;s.loadImage("home/top/delete.png",0,0,40,40),s.pos(e.width*Math.abs(e.scaleX)/-2-5,e.height*Math.abs(e.scaleY)/-2-5),s.on(Laya.Event.MOUSE_DOWN,this,onDelete),s.pivot(20,20),s.alpha=.6,t.addChildAt(s,2);var o=new Laya.Image;if(o.loadImage("home/top/scale.png",0,0,40,40),o.pos(e.width*Math.abs(e.scaleX)/2+5,e.height*Math.abs(e.scaleY)/-2-5),o.on(Laya.Event.MOUSE_MOVE,this,onStartScale),o.on(Laya.Event.MOUSE_UP,this,onStopScale),o.alpha=.6,o.pivot(20,20),t.addChildAt(o,3),-1!==a.indexOf("window")){var n=new Laya.Image;n.loadImage("home/top/flipping.png",0,0,40,40),n.pos(e.width*Math.abs(e.scaleX)/-2-5,e.height*Math.abs(e.scaleY)/2+5),n.on(Laya.Event.MOUSE_DOWN,this,onFlipping),n.alpha=.6,n.pivot(20,20),t.addChildAt(n,4),n.visible=!0}t.zOrder=getMaxOrder(),this.main.home.addChild(t),e.on(Laya.Event.MOUSE_DOWN,this,onStartDrag),t.on(Laya.Event.MOUSE_UP,this,onStopDrag)}))}function _drawLineBox(a){var t=new Laya.Sprite;return t.pos(a.width*Math.abs(a.scaleX)/-2,a.height*Math.abs(a.scaleY)/-2),t.graphics.drawLine(-10,-10,a.width*a.scaleX+10,-10,"#efefef",1),t.graphics.drawLine(a.width*a.scaleX+10,-10,a.width*a.scaleX+10,a.height*a.scaleY+10,"#efefef",1),t.graphics.drawLine(a.width*a.scaleX+10,a.height*a.scaleY+10,-10,a.height*a.scaleY+10,"#efefef",1),t.graphics.drawLine(-10,a.height*a.scaleY+10,-10,-10,"#efefef",1),t.alpha=.6,t}function clearIco(a){for(var t in this.main.home._childs){var e=this.main.home._childs[t];for(var i in e._childs)i>0&&(e._childs[i].visible=!1)}null!=a&&a.stopPropagation()}function onDelete(a){console.info(a),a.target.parent.destroy(),a.stopPropagation()}function onFlipping(a){a.target.parent._childs[0].scaleX*=-1,this.flipping=!0,a.stopPropagation()}function onStopFlipping(a){this.flipping=!1,a.stopPropagation()}function onClickMain(a){console.info(a),ocm=a,a.target&&a.target.parent&&a.target.parent instanceof mainPageUI&&clearIco(),a.stopPropagation()}function onStartScale(a){if(null==this.scale){console.info(a,a.target.parent.scaleX);var t=100/(a.target.parent._childs[0].width*a.target.parent.scaleX);console.info("====",t),a.target.parent.scaleX*=1+t,a.target.parent.scaleY*=1+t,this.scale=a.target,resetIcoPos(a.target)}a.stopPropagation()}function onStopScale(a){console.info(a),null!=this.scale&&(this.scale=null,this.start_point_info=null),a.stopPropagation()}function onScale(a){if(null!=this.scale){if(void 0!==a.nativeEvent.changedTouches)t=a.nativeEvent.changedTouches[0];else var t=a.nativeEvent;if(null==this.start_point_info)this.start_point_info=t;else{var e=t,i=e.pageY-this.start_point_info.pageY;0==i&&(i=this.start_point_info.pageX-e.pageX),i<0?(this.scale.parent.scaleX+=.02,this.scale.parent.scaleY+=.02):i>0&&this.scale.parent.scaleX>.5&&(this.scale.parent.scaleX-=.02,this.scale.parent.scaleY-=.02),resetIcoPos(this.scale),this.start_point_info=e}}}function resetIcoPos(a){var t=40/(a.parent._childs[2].width*a.parent.scaleX);a.parent._childs[2].scaleX=t,a.parent._childs[2].scaleY=t,a.parent._childs[3].scaleX=t,a.parent._childs[3].scaleY=t,a.parent._childs[4].scaleX=t,a.parent._childs[4].scaleY=t}function onClickStop(a){this.start_point_info=null,a.stopPropagation()}function showDragRegion(){this.main.home.width,this.main.home.height}function onStartDrag(a){if(console.info(a),null==this.scale){clearIco();for(var t in a.target.parent._childs)a.target.parent._childs[t].visible=!0;a.target.parent.zOrder=getMaxOrder(),Laya.Tween.to(a.target.parent,{scaleX:1.05*a.target.parent.scaleX,scaleY:1.05*a.target.parent.scaleY},400,Laya.Ease.elasticInOut,null,0),a.target.parent.startDrag(null,!0,100),a.stopPropagation()}else a.stopPropagation()}function getMaxOrder(){var a=0;for(var t in this.main.home._childs)this.main.home._childs[t].zOrder>a&&(a=this.main.home._childs[t].zOrder);return a+1}function onStopDrag(a){console.info(a),null==this.scale?this.flipping?onStopFlipping(a):(Laya.Tween.to(a.target.parent,{scaleX:a.target.parent.scaleX/1.05,scaleY:a.target.parent.scaleY/1.05},400,Laya.Ease.elasticInOut,null,0),a.stopPropagation()):onStopScale(a)}function onMouseOut(a){null==this.scale||onStopScale(a)}function showFooter(){document.getElementById("footer").style.display="block"}function hideFooter(){document.getElementById("footer").style.display="none"}function showOpen(){Zepto("#open .main").show(),Zepto("#open .main-quan").hide(),Zepto("#open").fadeIn(),setTimeout(function(){Zepto("#open .main-quan").css("display","block")},2e3)}function hideOpen(){document.getElementById("open").style.display="none"}function showQuan(){Zepto("#open .main").hide(),Zepto("#open .main-quan").css("display","block")}function hideQuan(){Zepto("#open .main-quan").hide()}var WebGL=laya.webgl.WebGL;Laya.init(750,1334,WebGL),Laya.stage.bgColor="#fff",Laya.stage.screenMode=Laya.Stage.SCREEN_NONE,Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_HEIGHT,Laya.loader.load(["res/atlas/home/0-home.atlas"],Laya.Handler.create(this,onStart));var dragRegion;Zepto(function(a){var t=a(window).width(),e=.85*t,i=(t-e)/2,s=(a(window).height()-1334*e/750)/2;Zepto("#open .main img").css({left:i,marginTop:s})});