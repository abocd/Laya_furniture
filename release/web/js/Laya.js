var WebGL = laya.webgl.WebGL;
Laya.init(750, 1334, WebGL);
Laya.stage.bgColor = "#fff";
Laya.stage.scaleMode = "exactfit";

onStart();
Laya.loader.load(["res/atlas/home/0-home.atlas"],this.onStart);


function onStart(){
    this.start = new ui.startPageUI();
    this.startx = this.start.start.x;
    this.start.start.x = this.start.start.width * -1;
    Laya.loader.load( ["res/atlas/home/0-tab.atlas",
"res/atlas/home/1-floor.atlas",
"res/atlas/home/2-wallpaper.atlas",
"res/atlas/home/3-sofa.atlas",
"res/atlas/home/4-cabinet.atlas",
"res/atlas/home/5-window.atlas",
"res/atlas/home/top.atlas",
"res/atlas/comp.atlas"],null,Laya.Handler.create(this,onProgress,null,false));
    this.start.y = 0;
    this.start.width = Laya.Browser.width;
    Laya.stage.addChild(this.start);
    this.start.start.on(Laya.Event.CLICK,this,onStartClick);
}

function onProgress(d){
    this.start.percent.text = "内容加载中..."+(d * 100).toFixed(2)+"%";
    // console.info(d)
    if(d ==1){
        this.start.percent.visible = false;
        this.start.start.x = this.startx;
        this.start.start.loadImage(this.start.start.skin)
    }
}

function onStartClick(){
    console.info(777)
    onMain();
    onTab();
    Laya.stage.removeChildAt(0);
    // console.info(Laya.stage);
}

function onMain(){
    this.main = new ui.mainPageUI();
    this.main.y = 0;
    this.main.width = Laya.Browser.width;
    this.main.wall.loadImage("home/top/wall_bg.png",0,0,this.main.wall.width,this.main.wall.height);
    this.main.floor.loadImage("home/top/floot_bg.png",0,0,this.main.floor.width,this.main.floor.height);
    Laya.stage.addChild(this.main);    
}



function onTab(){
    this.ts = new ui.tabSelectUI();
    this.ts.y = 885-105;
    this.ts.width = Laya.Browser.width;
    Laya.stage.addChild(ts);
    // console.info(this.ts.width ,Laya.Browser.width,Laya.Browser.clientWidth,Laya.stage.scaleX)
    this.ts.preview.on(Laya.Event.CLICK,this,onPreview);
    this.ts.viewStack.on(Laya.Event.CLICK,this,onStackClick);
    this.ts.tab.selectHandler = new Laya.Handler(this,onSelect);        
    console.info(this.ts.viewStack);
    for(var i in this.ts.viewStack._childs){
        var item = this.ts.viewStack._childs[i];
        for(var k in item._childs[0]._childs){
            var image = item._childs[0]._childs[k]; //this.ts.viewStack._childs[i]._childs[0][k]
            image.on(Laya.Event.CLICK,this,onImageClick);
        }
    }
}

function onPreview(){
    console.info("preview")
}

function onStackClick(d){
    console.info(d)
}

function onImageClick(f){
 console.info(f,f.target instanceof Laya.Image)    
    if(f.target instanceof Laya.Image){
        var skin = f.target._skin;
        // this.main.floor.skin = f.target._skin;
         console.info(skin);
        //  Laya.stage.addChild(this.main); 
        var skins = skin.split("/");
        var filename = skins[skins.length - 1];
        skins[skins.length - 1] = "750_"+skins[skins.length - 1].substr(4);
        var newskin = skins.join("/");
        switch(skins[skins.length -2]){
                case "1-floor":
                this.main.floor.graphics.clear();
                this.main.floor.loadImage(newskin,0,0,this.main.floor.width,this.main.floor.height);
                break;
                case "2-wallpaper":
                this.main.wall.graphics.clear();
                this.main.wall.loadImage(newskin,0,0,this.main.wall.width,this.main.wall.height);
                break;
                default:
                    insertSprite(newskin);
                break;
        }
        
    }
}

function onSelect(index){
    this.ts.viewStack.selectedIndex = index;
}

function insertSprite(skin){
    var s = new Laya.Sprite();
    
    s.loadImage(skin,0,0,0,0,Laya.Handler.create(this,function(d){
        console.info(d)
        s.pos(this.main.wall.width/2 - d.width/2 ,this.main.wall.height/2 - d.height/2);
        Laya.stage.addChild(s);
        s.size(s.width,s.height);
    }))
    
}