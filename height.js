function heightcal(){
    var height= document.getElementById("hheight").value;
    document.getElementById("act_height").innerHTML= "You are "+ height*0.01+" metres tall.";

}

function weightcal(){
    var weight= document.getElementById("wweight").value;
    document.getElementById("act_weight").innerHTML= "You are "+ weight*0.453+" kilograms in weight.";

}