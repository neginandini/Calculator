
    function back(){
        var del= document.getElementById('given');
        var i =del.value;
        if(i.length > 0){
            i = i.substring(0,i.length-1);
            del.value=i;
        }
    }
function pow()
{
    document.getElementById("hist").innerHTML +=Cal.ans.value+"="+(Cal.ans.value^Cal.ans.value)+"<br/>";
}
   function hist() {
        
        document.getElementById("hist").innerHTML +=Cal.ans.value+"="+eval(Cal.ans.value)+"<br/>";
        Cal.ans.value =eval(Cal.ans.value);
    }
