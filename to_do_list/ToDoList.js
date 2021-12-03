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

///////////////////////////////////////////////////////////////////////////////////////////
//顯示待辦清單 newList
///////////////////////////////////////////////////////////////////////////////////////////
function newList(data){
    //先判斷待辦事項的status是否已完成 , 如完成則顯示紅色字體 , 如未處理則
    //將陣列todolist內的物件值印出

    //依照代辦項目是否勾選完成 , 如已完成則status = checked
    var status = (data.status)?"checked":"";
    //依照勾選決定標題, 內容樣式
    var titleClass = (data.status)?"title2":"title";
    var messageClass = (data.status)?"message2":"message";
    //依照勾選決定修改按鈕是否顯示
    var editClass = (data.status)?"none":"inline";


    var content=
        `<div class="content" id="${data.id}">
            <div class = "${titleClass}">
                
                <input type="checkbox" onclick="changeStatus('${data.id}' , this)" />

                <text id="title${data.id}"> ${data.title} </text>
        
                <button class="i_btn" onclick="removeList('${data.id}')"> 刪除 </button>

                <button class="i_btn" id="edit${data.id}" style="display:${editClass}" onclick="editList('${data.id}')"> 修改 </button>

                <button class="i_btn" id="update${data.id}" style="display:none" onclick="updateList('${data.is}')"> 確認 </button>
            </div>

            <div class="${messageClass}">
                <text id="message${data.id}"> ${data.content} </text>
            </div>
        </div>`;
    $('body').append(content);

}