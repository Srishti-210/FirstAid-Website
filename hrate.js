function calbpm(){
    var pulse= parseInt( document.getElementById("pulse").value);
 document.getElementById("bpm").innerHTML= "Your heartbeat per minute is "+ pulse*6;
}