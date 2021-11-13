# Json

- json 即為 物件為基礎的一種資料延伸格式

- json 和 物件最大差別在於

  - json的 key要用 "" 包起來

  - json沒有屬性不包含函數型態

  - json可以為物件 , 也可以是字串 , 也可以是陣列

    <script>
        //物件
    	var person = { 
            "name":"mary",
            "age":"10"
        }
    
        //字串
        var person = '{
            "name":"tom",
            "age":"10"
        }'
        
        //陣列
        var person = 
        [
            {
                
            "name":"mary",
            "age":"10
            },
            {
            "name":"john",
            "age":"12"
            },     
        ];
        
        
        //上例取出 JSON的值
        person[0].name	//mary
        person[1].age	//12
    

## JSON常用函式

- JSON.stringify()		//可將物件或陣列格式的JSON , 轉換為字串格式的JSON (傳資料到後端就要用字串傳)

  ``` javascript
  var json1=[1,2,"3"];
  JSON.stringify(json1);		//"[1,2,"3"]"
  ```

- JSON.parse()		//將字串格式的JSON , 轉換為原本物件或陣列格式的JSON

  ``` javascript
  var json2="[1,2,"3"]";
  JSON.parse(json2);			//[1,2,"3"]
  ```

## 一般常見函式

- toString()	//將任何型態轉換成字串
- parseInt()   //字串轉整數 (會忽略小數點)
- parseFloat

- substr()  //從源自串取出子字串並傳回 , 不改變原字串

  ```
  var str = "hello";
  str.substr(0,2);		//"he"
  ```

- split()   //分割字串,並回傳分割後的陣列

  ```
  var str = "h,ap,py";
  str.split(',')  		//以逗號分割 , ['h','ap','py']
  
  var str2 = "a!c"
  str.split("")			//以空字串分割 , 故回傳每個字元   ["a","!","c"]
  ```

- toLowerCase()    toUpperCase()   //改大小寫 , 回傳一個新字串 , 不改變原字串

  ```
  var str="AbcD";
  str.toLowerCase();		//"abcd"
  ```

  