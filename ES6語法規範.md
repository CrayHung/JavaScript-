## ES6與法規範

- let , const 取代var
- 字串一律使用單引號
- 解構賦值

```js
const arr=[1,2,3,4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first , second]=arr;
```

```js
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  }
  
  // good
  function getFullName(obj) {
    const { firstName, lastName } = obj;
  }
```

- object屬性定義一起
- 使用擴展運算符 ( ... ) 拷貝Array

```js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

- 使用Array.from方法，將類似Array的對象轉為Array

```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

- ## **Arrow Function 箭頭函式**  (簡短 , 解決 'this' 的問題)   (但無法使用為function constructor)

  - (ES5)   function(){}
  - (ES6)   () => {}

```javascript
//ES5

function sayHi(){
	console.log('hello world')
}


//ES6

const sayHi = () => { console.log('hello world')}
const sayHi = (tom) => { console.log(' hello world ' + user)}	//hello world tom
const sayHi = tom => { console.log(' hello world ' + user)}		//hello world tom (只有一個參數時可以不用())
```





```javascript
// 問題

var person = {
	name: 'tom' ,
	age: 18 ,
	sayHi: function(){
		(function(){
			console.log(this)		//如果直接this , 這個this會指向window   錯誤!
		})()
		//IIFE 立即執行的func
	}
}

person.sayHi()
```

```javascript
//ES5 解法

var person = {
	name: 'tom' ,
	age: 18 ,
	sayHi: function(){
		var self = this				//用一個變數去接this , 再把this丟給內部func
		(function(){
			console.log(self)
		})()
	}
}

person.sayHi()
```

```js
//ES6 解法

var person = {
	name: 'tom' ,
	age: 18 ,
	sayHi: function(){
		(() => {						//使用箭頭函式的方式 , this就綁訂了person object
			console.log(this)
		})()
	}
}

person.sayHi()
```

- ## map()   forEach() ,   filter() ,  find()

  - 模擬現實世界的實體對象時，使用Object
  - key: value的數據結構，使用Map結構

```js
let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
```

- 取代class prototype , 多使用class constructor定義物件

```js
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
```



- Module 模塊

參考 https://www.itread01.com/articles/1485017905.html