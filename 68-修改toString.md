# 修改toString()

## 期望功能 , 印出per1  per2訊息

原本toString會印出的是[object object] , 透過修改原型的toString方法 , 印出個人資訊

```
//構造函數
function Person(name,age){
	this.name=name;
	this.age=age;
}

//在原型對象中添加sayName方法
Person.prototype.sayName = function(){
	alert("hello,我是"+this.name);
}

//修改原型對象中的toString方法
Person.prototype.toString = function(){
	return "name="+this.name+",age="+this.age+";
}

var per1 = new Person("孫悟空" , 18);
var per2 = new Person("豬八戒" , 28);

console.log(per1);	//--->name=孫悟空,age=18
console.log(per2);	//--->name=豬八戒,age=28
```

