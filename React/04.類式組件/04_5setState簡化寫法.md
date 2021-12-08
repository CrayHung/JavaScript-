簡化 :

1. 如果自定義的function很多 , 每次構造器裡面都要寫修正this指向的問題...太麻煩了

2. 為什麼使用構造器?  因為要給對象的state設定初始值(isHot:true) , 如果可以不用構造器就可以附初始值就好了



解決:

**在class中可以直接寫附值語句** 

wheel = 4 代表在實例對象中增加一個屬性wheel 值為1

但如果初始化的值是外部傳過來的 , 那就還是要寫constructor來接

```js
class Car{
	constructor(name,price){
		this.name=name
		this.price=price
	}
	wheel = 4	//注意 : 在class中不能隨便定義變量 , 故不可以用var wheel=4
}
var c1 = new Car('benz',100)
console.log(c1);		// Car{name: "benz" price: 100 wheel: 4}
```

所以簡寫成如下

1.將constructor中state改為附值語句

2.將demo( ) 改為附值語句

```js
class Weather extends React.Component{
           
    		//給實例對象上的state附初始值
            state = {isHot:false , wind:'微風'}
            
           render(){
            const {isHot,wind} = this.state
            return <h2 onClick={this.demo}> 今天天氣很{isHot ? '炎熱' : '涼爽'} ,{wind}</h2>
            }
			
			//將自定義func demo改為附值函式
            demo = function(){
                const isHot = this.state.isHot
                this.setState( {isHot : !isHot} )
            }
       }
```

但自定義的demo =function( )中的this又不對了 !!

因為將`  demo = function()`改為附值語句的意思是 : 
將原本在Weather原型上的demo , 改放在實例對象上
但其中的this不是指向Weather創建出來的對象

## 解法:

**將function改為箭頭函式**

```js
demo = () =>{
                const isHot = this.state.isHot
                this.setState( {isHot : !isHot} )
            }
```

為什麼?  

因為箭頭函式本身沒有this , 所以這邊的this會往原型去找 , 故找到Weather創建的實例對象

{ demo = () =>{      看成     demo = 附值 ,  附的值是箭頭函式 }

所以最終的簡化寫法如下

```js
//創建類式組件
        class Weather extends React.Component{
           
            //給state附初始值
            state = {isHot:false , wind:'微風'}
            
           render(){
            const {isHot,wind} = this.state
            return <h2 onClick={this.demo}> 今天天氣很{isHot ? '炎熱' : '涼爽'} ,{wind}</h2>
            }

            //自定義func一定要寫成 附箭頭函式 , 解決this指向問題
            demo = () => {
                const isHot = this.state.isHot
                this.setState( {isHot : !isHot} )
            }
       }
       //渲染組件到頁面
        ReactDOM.render( <Weather/> , document.getElementById('test'))
```

