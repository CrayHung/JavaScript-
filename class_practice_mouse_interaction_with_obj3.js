// html引入p5.js  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
let bubbles=[];
//let bubble;

function setup(){
	createCanvas(800 , 800);		//建立畫布
    
}

function mouseDragged(){                
    /*當滑鼠拖曳, 將滑鼠的xy傳入clicked() ,
     如果回傳是ture , 代表點到的區域在園內 ,
     則將此物件splice出來*/
    let r = 40;
    let b = new Bubble(mouseX , mouseY , r);
    bubbles.push(b);

}



function draw(){
	background(0);
    for(let i=0 ; i<bubbles.length ; i++){
        if(bubbles[i].clicked(mouseX,mouseY)){
            bubbles[i].changeColor(255);
        }else{
            bubbles[i].changeColor(0);
        }
		bubbles[i].move();
		bubbles[i].show();
    }

    if(bubbles.length>10){
        bubbles.splice(0,1);
    }

}


//定義 Bubble的constructor
class Bubble {
	constructor( x , y , r ){
		this.x = x;
		this.y = y;
		this.r = r;
        this.brightness = 0;
	}

    changeColor(bright){
        this.brightness = bright;
    }

    clicked(mx,my){                 
        /*根據mouse傳入的點xy , 如果點xy和圓的xy點的距離大於半徑(r) , 
        則回傳true(代表傳入的兩點在圓外)*/
        let d = dist(mx , my , this.x , this.y);
        if(d<this.r){
            return true;
        }else{
            return false;
        }
    }

	move(){
		this.x = this.x + random( -1 , 1 );
		this.y = this.y + random( -1 , 1 );
	}

	show(){
		stroke(255);		//邊框顏色
		strokeWeight(3);	//邊框寬度
        fill(this.brightness , 100);
        ellipse(this.x , this.y , this.r , this.r);	//畫圓,參數:x軸 ,y軸 , 寬度 , 高度 
	}
}