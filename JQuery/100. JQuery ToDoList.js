var id = 1;                 //全域變數id , 用以增刪查改
var todolist = [];          //全域陣列 , 用以存放待辦事項

/* var newtodo={
            "id":id,
            "title":title,
            "content":message,
            "status":false        
 */

//新增待辦清單 addList
function addList(){
    var title = $("#title").val();
    var message = $("#message").val();

    //如果標題或內容其一為空,則重新輸入
    if(title =="" || message==""){
        alert("請輸入標題 內容");
    }
    else{
        var newtodo={
            "id":id,
            "title":title,
            "content":message,
            "status":false          //待辦事項完成與否
        };

        todolist.push(newtodo);     //將新增的newtodo物件 新增進全域的待辦事項陣列
        newList(newtodo);           //執行顯示待辦清單function
        id++;

        $("#title").val("");         //將標題輸入欄位清空
        $("#message").val("");       //將內容輸入欄位清空

    }
}

//顯示待辦清單 newList
function newList(newtodo){
    //先判斷待辦事項的status是否已完成 , 如完成則顯示紅色字體 , 如未處理則
    //將陣列todolist內的物件值印出
    var status = (this.status);
    if(status=="true"){
        //將標題跟內容顯示紅色字體 , 將[修改按鈕]顯現出來
    }
    else(status=="false"){
        //將標題跟內容顯示黑色字體 , 將[修改按鈕]隱藏起來
    }

}


