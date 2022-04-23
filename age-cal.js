function calculate(){
    var datevalue=document.getElementById("date").value;
    var monthvalue=document.getElementById("month").value;
    var yearvalue=document.getElementById("year").value;
    var date=new Date();
    var d=date.getDate();
    var m=1+date.getMonth();
    var y=date.getFullYear();
    var month=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(datevalue > d){
        d=d+month[m-1];
        m=m-1;
    }
    if(monthvalue >m){
        m=m+12;
        y=y-1;
    }
    var dd=d-datevalue;
    var mm=m-monthvalue;
    var yy=y-yearvalue;
    document.getElementById("result").innerHTML="Your age is " +yy+ " years " +mm+ " months " +dd+ " days ";
}
