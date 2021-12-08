已取得Weather創建的實例對象資料

接著只要改變isHot的狀態(State)就完成



但如果直接修改isHot , React不認

```jsx
//錯誤寫法
demo(){
 	//獲取原來的isHot值
 	const isHot = this.state.isHot
    //直接改  錯誤!!!
 	this.state.isHot = !isHot
 }
```



正確的寫法要透過一個API (setState)去進行更改 , 且因為可能有多個state , 故要指定傳入的對象

```jsx
//正確寫法
demo(){
 	//獲取原來的isHot值
 	const isHot = this.state.isHot
    //狀態(state) 透過setState修改
 	this.setState( {isHot : !isHot} )
 }
```

且使用setState更改是一種更新 , 不影響其他state

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
                this.state = {isHot:false , wind:'微風'}
                //解決原型demo中的this指不到實例的問題
                this.demo = this.demo.bind(this)
            }
           render(){
            const {isHot,wind} = this.state
            return <h2 onClick={this.demo}> 今天天氣很{isHot ? '炎熱' : '涼爽'} ,{wind}</h2>
            }

           //正確寫法
    demo(){
        //獲取原來的isHot值
        const isHot = this.state.isHot
        //狀態(state) 透過setState修改
        this.setState( {isHot : !isHot} )
     }
       }
       //渲染組件到頁面
        ReactDOM.render( <Weather/> , document.getElementById('test'))
            
    </script>

    </body>
</html>
 
```

但看完覺得還是很複雜...

真實開發使用簡化寫法
