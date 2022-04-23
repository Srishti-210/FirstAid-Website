function calbmi(){
    var height=parseInt(document.getElementById("height").value);
    var weight=parseInt(document.getElementById("weight").value);
    document.getElementById("h_text").innerHTML=height+" cm";
    document.getElementById("w_text").innerHTML=weight+" kg";

    let bmi=(weight/Math.pow((height/100), 2).toFixed(1));
    document.getElementById("bmi-val").innerHTML=bmi;
    var health_status=document.getElementById("h-status");

    if(bmi<18.5){
        health_status.innerHTML= "You are underweight";
    health_status.style.color="yellow";

    }
 else if(bmi>18.5 && bmi<=24.9){
    health_status.innerHTML= "You are Normal";
    health_status.style.color="Green";
 }

 else if(bmi>25 && bmi<=29.9){
    health_status.innerHTML= "You are Overweight";
    health_status.style.color="Orange";
 }

 else{
    health_status.innerHTML= "You are Obese";
    health_status.style.color="Red";
 }

}