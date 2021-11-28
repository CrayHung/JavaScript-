// html引入p5.js  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
let bubbles=[];
//let bubble;

function setup(){
	createCanvas(800 , 800);		//建立畫布
    for(let i=0 ; i<10 ; i++){      //建立10個 "隨機的x,y,r"  
        let x = random(width);
        let y = random(height);
        let r = random(40,100);
	    let b = new Bubble(x , y, r);   //建立Bubble物件b
        bubbles.push(b);                //將b物件丟進去bubbles Array中
    }
}

function mousePressed(){                
    /*當滑鼠按下後, 將滑鼠的xy傳入clicked() ,
     如果回傳是ture , 代表點到的區域在園內 ,
     則將此物件splice出來*/
    for(let i=0 ; i<bubbles.length ; i++){
        if(bubbles[i].clicked(mouseX,mouseY)){
            bubbles.splice(i,1);
            i--;
        }
    }
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