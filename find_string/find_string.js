window.onload = function(){
    

    function check(){
        var sign = 0;
        var allb = document.getElementsByTagName("b");
        
        for(var i=0;i<allb.length;i++){
            var a = allb[i].innerText.indexOf("SHORT");     //沒有符合SHORT的字串回傳-1 , 有符合的字串則回傳array的index值
            if(a!=-1){
                console.log( allb[i].innerText + "位置是allb[]中的第"+a+"個值");
                sign = 1;
            }
        }
        return sign;
    }
    
    setInterval(check,1000);
}


