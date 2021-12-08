# 想法

1. 在類組件的constructor中做   1.初始附值  2.解決非透過實例調用this的指向問題

2. ReactDom.render渲染類組件到頁面

將demo function放在constructor中

```JSX
class Weather extends React.Component{
            constructor(props){
                super(props)
                this.state = {isHot:false}
            }
           render(){
            const {isHot} = this.state
            return <h2 onClick={demo}> 今天天氣很{isHot ? '炎熱' : '涼爽'} </h2>
            }
            demo(){
                console.log(this)		//此處的this為undefined
            }
       }
```

# 問題

因為demo不是透過實例調用 (demo透過onClick調用) , 所以demo中的this指向onClick (undefined)

而constructor , render都是透過Weather實例調用 , 所以其中的this都是指向實例

# 解法

在constructor中加入

```jsx
this.demo = this.demo.bind(this)
```

```jsx
class Weather extends React.Component{
            constructor(props){
                super(props)
                this.state = {isHot:false}
                this.demo = this.demo.bind(this)
            }
           render(){
            const {isHot} = this.state
            return <h2 onClick={demo}> 今天天氣很{isHot ? '炎熱' : '涼爽'} </h2>
            }
            demo(){
                console.log(this)		//此處的this為實例對象
            }
       }
```

## 說明

## this.demo  =  this.demo.bind(this)



### **[先看右側  this.demo.bind(this)]**

左邊的this代表constructor的實例對象

而透過這個實例對象調用demo (demo為Weather的原型)

bind作用  

​	1.生成新函數   

​	2.改變函數的" this "為傳入的實例對象(this)

所以右邊整體就是 " 透過Weather創建的實例對象去調用原型demo後所產生的新函數 "



**[ 再看左側  this.demo ]**

將右側的函數附值給此對象自身,並給這個右側附值的函數取名叫demo

所以整體就是

# 在實例自身加上demo函數 , 而此新增的demo函數為 : 透過Weather創建的實例對象 , 去調用原型demo後所產生的新函數



所以對象和prototype上都有demo( )

![image-20211208122352794](C:\Users\Cray.Hung\AppData\Roaming\Typora\typora-user-images\image-20211208122352794.png)

之後調用demo都會先找自身的

