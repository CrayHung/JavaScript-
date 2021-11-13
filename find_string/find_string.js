window.onload = function(){
    
    function check(){
        var allb = document.getElementsByTagName("b");
        
        for(var i=0;i<allb.length;i++){
            var a = allb[i].innerText.indexOf("SHORT");     //indexof沒有符合的字串回傳-1
            if(a!=-1){
                console.log("allb=" +allb[i].innerText);
                sign = 1;
            }
        }

    }
    check();
}


