原生javascript事件綁定方式有三種

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/> 
        <meta content="width=device.width, initial-scale=1.0"/>
    </head>
    <body>
   		<button id="btn1">btn1</button>
        <button id="btn2">btn2</button>
        <button onclick="demo()">btn3</button>
        
        <script>
			var btn1 = document.getElementById('btn1')
			btn1.addEventListener('click',()=>{
            	alert('btn1被案了')
        	})
            
            var btn2 = document.getElementById('btn2')
            btn2.onclick= ()=>{
                alert('btn2被案了')
            }
            
            function demo(){
                alert('btn3被案了')
            }
            
        </script>
       

    </body>
</html>

```





## react建議使用第三種function方式綁定 ( 減少document.) 的操作 

## 	(但前兩種也還可以跑出來)

- **在return的h2標籤上增加onClick={demo}**

  - 所有原生的on事件 (onclick,ondrag,ondrop....) , React都重新寫一份大寫的 , 使用要用大寫的 (onClick,onDrag,onDrop....)

    

  - 原生的onclick後要執行的函數用**" "**包住 , 但React用" " 包住代表string型態 , 所以應該是要讀入函數名稱

    { demo()  }

    但改成onClick={ demo() } 這樣代表**將demo()的返回值(undefined)附值給onClick**
    
    所以應該改為onClick={demo}  代表將**demo函數**附值給onClick , 這樣每次執行onClick一次,就調用demo一次
    
    


```jsx
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/> 
        <meta content="width=device.width, initial-scale=1.0"/>
        <title>類式組件</title>
    </head>
    <body>
        <div id="test">
        </div>

        <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel" >

        //創建類式組件
        class Weather extends React.Component{
            constructor(props){
                super(props)
                this.state = {isHot:false}
            }
           render(){
            const {isHot} = this.state
            return <h2 onClick={demo}> 今天天氣很{isHot ? '炎熱' : '涼爽'} </h2>
            }
       }
       //渲染組件到頁面
        ReactDOM.render( <Weather/> , document.getElementById('test'))
        
        function demo(){
                console.log('案了')
            }
    </script>

    </body>
</html>

```

## 問題: 

但demo拿不到constructor(Weather創建的) 的實例

