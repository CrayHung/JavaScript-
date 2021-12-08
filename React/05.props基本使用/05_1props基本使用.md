## 如果今天想要從組件外面丟參數進去給組件使用

## 則在渲染組件到頁面時可以帶入外部參數

html的標籤也可以想成是一組key:value的組合	ex: <div id="test">

id為key   test為value



```jsx
ReactDOM.render( <Person name="tom" age="18" sex="男"/> , document.getElementById('test'))
```

可以看到透過Person產生的實例對象中的props屬性被傳入參數

```js
props: {name: 'tom', age: '18', sex: '男'}
```

再將props的屬性內容值放在render的return中

```JSX
 class Person extends React.Component
        {
            render(){
                return(
                    <ul>
                        <li>{this.props.name}</li>
                        <li>{this.props.age}</li>
                        <li>{this.props.sex}</li>
                    </ul>
                )
            }
        }
       //渲染組件到頁面
        ReactDOM.render( <Person name="tom" age="18" sex="男"/> , document.getElementById('test1'))
        ReactDOM.render( <Person name="cat" age={2} sex="男"/> , document.getElementById('test2'))
```



## 問題

1.如果今天人的信息特別多?  不只name.age.sex...

2.真實狀況是透過server傳回人的信息 , 要如何不寫死傳入組件?



## 解法:

使用...擴展運算符

在引入React.js + Babel.js的情況下 ,  允許使用...來展開對象來當作**標籤屬性傳遞** , 其他地方都不能

```jsx
const p = {name:"tom" , age:18 , sex:"女"}
ReactDOM.render( <Person {...p} /> , document.getElementById('test1'))
```

{...p}	其中  { } 代表內包js語句...p

`額外補充
原生的js不允許...展開對象
如果是(...p)會報錯 , 因為擴展運算符不能展開對象`
`{...p}可以 , 代表要複製p對象`

## 問題:

如果今天傳入的參數沒有name , 或要限制傳入的value型態  ,  或在沒有傳入參數沒有給value時給定默認值