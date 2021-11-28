// html引入<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
let bubbles=[];

function setup(){
	createCanvas(800 , 800);		//建立畫布

	/*	產生n個隨機的圓
	for(let i=0 ; i<10 ; i++){
        let x = random(width);
        let y = random(height);
        let r = random(10,40);
        bubbles[i] = new Bubble( x , y , r );
    }
	*/
}
/* 	滑鼠按下後產生一個圓
	function mousePressed(){
		let r = random(10,50);
		let b = new Bubble(mouseX , mouseY, r);
		bubbles.push(b);
	}
*/
// 	滑鼠拖曳後產生一個圓
	function mouseDragged(){
		let r = random(10,50);
		let b = new Bubble(mouseX , mouseY, r);
		bubbles.push(b);
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
	}
	move(){
		this.x = this.x + random( -5 , 5 );
		this.y = this.y + random( -5 , 5 );
	}
	show(){
		stroke(255);		//邊框顏色
		strokeWeight(4);	//邊框寬度
		noFill(); 
		ellipse(this.x , this.y , this.r , this.r);	//畫圓,參數:x軸 ,y軸 , 寬度 , 高度 
	}
}