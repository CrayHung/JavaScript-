// html引入p5.js  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
let bubbles=[];
//let bubble;

function setup(){
	createCanvas(800 , 800);		//建立畫布
    for(let i=0 ; i<10 ; i++){      //建立10個 "隨機的x,y,r"  
        let x = random(width);
        let y = random(height);
        let r = random(10,50);
	    let b = new Bubble(x , y, r);   //建立Bubble物件b
        bubbles.push(b);                //將b物件丟進去bubbles Array中
    }
}

function mousePressed(){            //當滑鼠按下後, 將滑鼠的xy傳入click()
    for(let i=0 ; i<bubbles.length ; i++){
        bubbles[i].clicked(mouseX,mouseY);
    }
}



function draw(){
	background(0);
    for(let i=0 ; i<bubbles.length ; i++){
		bubbles[i].move();
		bubbles[i].show();
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
    clicked(mx,my){
        let d = dist(mx , my , this.x , this.y);
        if(d<this.r){
            this.brightness = 255;
        }else{
            this.brightness = 0;
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