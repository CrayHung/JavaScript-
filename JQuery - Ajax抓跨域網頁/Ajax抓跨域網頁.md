問題 : 

```
ccess to XMLHttpRequest at http://192.168.1.250/iostatus.htm@admin:admin from origin http://127.0.0.1:5500 has been blocked by CORS policy: response to preflight request doesn't pass access control check: No 'Access-control-allow-origin' header is present on the requested resource
```

## 

## 同源政策  (Same-origin policy)       跨來源資源共用  (Cross-origin Resource Sharing)

瀏覽器的Same Origin Policy(同源政策)
基於**安全性**的考量，規定當你的瀏覽器要呼叫API時，需要是同一個來源 **相同協定、埠號 (如果有指定) 以及主機位置。**
如果是不同來源，瀏覽器依然會幫你發出request，*** 但會把收到的response阻擋起來不給你的瀏覽器。***

- **跨域只針對瀏覽器做限制 , 如果用postman 呼叫API的時候就不會有CORS的問題) **

```
假設情境:
client丟了一個request給server(刪除資料) , 雖然因為跨域的關係client收不到response , 但server收到request還是把資料刪了... 
```

simple request 條件

- method : GET   POST   HEAD 之一
- header 限制



## 方法1: (沒做出來)

- ## API的response中加入新的http header  , 如符合條件 , 則將response傳給瀏覽器 ; 反之則阻擋response並發出錯誤訊息

**Preflight request (預檢請求)**

Preflight request 是一個瀏覽器在送出真正的request前，會先送出的輕量request(使用OPTIONS方法)，只有header沒有body。header部分，它包含兩個部分的資訊：

1. HTTP methods (`Access-Control-Request-Method`)
   表示這個請求的方法，EX. POST, DELETE... 瀏覽器會自動處理
2. HTTP headers (`Access-Control-Request-Headers`)
   這個值放的會是這個請求額外自訂的header名稱，若有多個則用“,”區隔，瀏覽器會自動處理將所有不屬於simple request的header欄位都列出來。

送出後Preflight request給API Server後，API Server會回應一個Preflight response，此時便會判斷上述的兩個資訊：methods和headers。若資訊顯示通過，則會告訴瀏覽器是否可以繼續往下執行真正的request，並確認真正的request是否有權限可以將response放行回web server，否則便會給予CORS相關的錯誤訊息。



有些狀況要在request中自行加RequestHeader

```
req.open("GET" , finalUrl);
req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');			//加這行設定RequestHeader

req.onload=function(){...}
```



## 方法2 [正解] :

- ## 後端API的header加上設定屬性

Access-Control-Allow-Origin: *



## 方法3  :

- ## CORS Proxy (跨域代理伺服器)

- ![](C:\Users\Cray.Hung\Desktop\JavaScript 筆記\JQuery - Ajax抓跨域網頁\7.png)

  https://blog.huli.tw/2021/02/19/cors-guide-2/



因為跨域限制是因為瀏覽器才有的 , 所以先透過非瀏覽器的方式取的API response , 加上該給的header通行證 , 再傳回給client端。

使用cors-anywhere將 https://cors-anywhere.herokuapp.com/ 加在API URL前面就可以了

```
//  corsURL = https://cors-anywhere.herokuapp.com/
//  apiURL = http://192.168.1.250/iostatus.htm@admin:admin
var finalUrl ="https://cors-anywhere.herokuapp.com/http://192.168.1.250/iostatus.htm@admin:admin";
```

console會看到403的錯誤

![](C:\Users\Cray.Hung\Desktop\JavaScript 筆記\JQuery - Ajax抓跨域網頁\1.png)

切到network(網路) , 知道是API 顯示的403錯誤

![](C:\Users\Cray.Hung\Desktop\JavaScript 筆記\JQuery - Ajax抓跨域網頁\2.png)

點此紅色錯誤並選到response(回應) , 右鍵 open in new tab (在新分頁中開啟)

![](C:\Users\Cray.Hung\Desktop\JavaScript 筆記\JQuery - Ajax抓跨域網頁\3.png)

cros-anywhere的聲明頁面，點選按鈕“request temporaty access to the demo server”

![](C:\Users\Cray.Hung\Desktop\JavaScript 筆記\JQuery - Ajax抓跨域網頁\4.png)

跑出這一行文字，現在已經可以暫時使用這個server了

![](C:\Users\Cray.Hung\Desktop\JavaScript 筆記\JQuery - Ajax抓跨域網頁\5.png)

回到原本存取API的頁面，再按一下重新整理就可以了

### 以 https://tw.yahoo.com/ 為例

![](C:\Users\Cray.Hung\Desktop\JavaScript 筆記\JQuery - Ajax抓跨域網頁\6.png)



完整code

```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script src="jquery-3.6.0.min.js"></script>
        <script type="text/javascript">

            var corsURL = "https://cors-anywhere.herokuapp.com/";
            var apiURL = "http://192.168.1.250/iostatus.htm@admin:admin";
            var finalUrl ="https://cors-anywhere.herokuapp.com/http://192.168.1.250/iostatus.htm@admin:admin";
            var test_finalUrl ="https://cors-anywhere.herokuapp.com/https://tw.yahoo.com/";


            function getHtml(){
                var req = new XMLHttpRequest();
                req.open("GET" , test_finalUrl);

                req.onload=function(){
                    if(req.status>=200 && req.status<400){
                        alert("成功讀取網頁");
                        console.log(req.responseText);
                    }else{
                        alert("沒有讀到網頁");
                        console.log(req.status , req.responseText);
                    }
                };
          
                req.send();

            }
        </script>
    </head>
<body onload="getHtml();">
    <body>

    </body>
</html>
```



