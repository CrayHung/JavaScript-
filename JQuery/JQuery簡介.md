## JQuery 和 JavaScript 比較



```html
<!--HTML-->
<div>
    <input id="text1" class="in" type="text">
    </input>
	
	<input id="text2" class="in" type="text">
	</input>
</div>
```

## 抓節點

```javascript
//  JS 選取id , tag , class

document.getElementById("text1");
document.getElementsByTagName("div");
document.getElementsByClassName("in");

//  JQuery 選取id , tag , class
$("#text1");
$("div");
$(".in");
```

## 抓節點元素值

```javascript
// 如果要取出所有<input>的元素內容

//  JS無法直接取得所有元素 , 所以要寫個for迴圈
var inputs = document.getElementsByTagName("input");
for(var i=0;i<inputs.length;i++){
	if(inputs[i].type=="text"){
		console.log(inputs[i]);
	}
}

//	JQuery
$("input:text");
```

## JQuery 對節點操作

```
find()		找出所有特定節點(div)下的特定子節點(p)
$("div").find("p").css("background-color","red");


each()		找出所有指定類型的節點
 $("p").each(function(){                     
	$(this).css("color","blue");
});


children()	所有特定節點(div)下的所有子節點
 $("div").children().css('color','green');
 
 
parent()	所有特定節點下的父節點
```

JQuery對節點內容操作

```
append()	方法內放欲新增的資料 , 會在所有指定元素之尾端插入
$(".content").append("<p> 新增文字 數字 </p>");


remove()	刪除指定內容 (包含節點下的所有tag也刪掉)
$(".content").remove();


empty()		刪除元素內容 , 節點還存在
$(".content").empty();


text()		取得或設定元素內容文字
$("p").text();				//取得所有p標籤的文字

val()		取得或設定元素內容值
$("#aa").val(30);			//將id為aa的value設為30
```

## $(document).ready()

效果.效果同 window.onload = function(){ } , DOM載入便會觸發

以下三種寫法相同意思

```
$(document).ready(function(){
});
```

```
$()ready.(function(){
});
```

```
$(function(){
});
```

## 事件綁定(Event Binding)

### 滑鼠事件

```
$("p").mouseout(function(){
	$(this).css('background-color','white')
});


$("p").mouseover(function(){
	$(this).css('background-color','red')
});
```

### 鍵盤事件

```
$("input").keydown(function(){
	alert("觸發鍵盤");
});
```

### 視窗事件

```
$(window).resize(function(){
	console.log( "螢幕寬" + $(this).width() );
	console.log( "螢幕高" + $(this).height() );
})
```

# 表單事件

綁定change事件

```
$("input").change(function(){
	alert("你改變了文字");
});
```

綁定on事件   傳入參數 : ( 綁定事件名稱 ,  執行的function )

```
$("button").on("change",function(){
});
```

```$("button").on("change",function(){
$("button").on("click",function(){
});
```

```
$("button").on("change",自定義的func());
```
