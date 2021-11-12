$( document ).ready(function() {

    var corsURL = "https://cors-anywhere.herokuapp.com/";
    var apiURL = "http://192.168.1.250/iostatus.htm@admin:admin";
    var finalUrl ="https://cors-anywhere.herokuapp.com/http://192.168.1.250/iostatus.htm@admin:admin";

    $.ajax({
        type:'get',
        url: finalUrl,
        contentType:"text/html",

        success:function(res){
            alert(123);
        },
        error:function(err){
            alert(456);
        }
    });
});
    



    /*
    var openUrl= "https://www.google.com.tw/";
            //var openUrl= "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
            var xhr = new XMLHttpRequest();
            xhr.open('GET',openUrl,true);
            xhr.send();
            xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
            //var data = this.responseText;
            console.log(responseText);
            }
            };
    */


/*
fetch('https://www.google.com.tw/',{
    method:'GET',
    //mode: 'opaque',
    //mode: 'cors',
    //mode: 'no-cors',
})

.then(function(response) {
    alert(123);
    //alert(response.status);
}).catch(function(err) {
    alert(456);
});

*/