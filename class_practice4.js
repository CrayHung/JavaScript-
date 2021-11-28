let bubble1;
let bubble2;

function setup(){
	createCanvas(800 , 800);		//建立畫布
    bubble1 = new Bubble(400,400,50);
    bubble2 = new Bubble(300,400,100);
}


function draw(){
	background(0);

    if(bubble1.intersect(bubble2)){
        background(100,0,100);
    }

	bubble1.show();
    bubble2.show();
    bubble1.move();
    //bubble2.move();
    bubble2.x = mouseX;
    bubble2.y = mouseY;
}


//定義 Bubble的constructor
class Bubble {
	constructor( x , y , r ){
		this.x = x;
		this.y = y;
		this.r = r;
        this.brightness = 0;
	}

    intersect(other){
        let d = dist(this.x , this.y , other.x , other.y)
        if(d < this.r + other.r){
            return true;
        }else{
            return false;
        }
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