# Javascript 

## chapter 2陣列操作

- push   在此陣列的最後加入一個元素，並回傳新的陣列長度

  ```
  var ary=["A","B","C"];
  var len=ary.push("D");
  console.log(len);		//4
  console.log(ary);		//["A","B","C","D"]
  ```

  

- pop　取得陣列中最後一個值，並刪除此陣列最後的元素，

  ```
  var ary=["A","B","C","D"];
  var value = ary.pop()
  console.log(value);		//
  console.log(ary);		//["A","B","C"]
  ```

  

- slice( n , m)   取得**範圍*****n~m-1***的元素內容

```
var ary = ["A","B","C","D"];
var ary1 = ary.slice(0,2);
console.log(ary1);			//["A","B"].
```

