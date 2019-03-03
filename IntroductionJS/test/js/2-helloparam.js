function fctHello(){
    //get content of input inName
    var name = document.getElementById("inName");
    var strToshow = 'Hello world';

    if(name.value) {strToshow += " " + name.value;}
    strToshow += " !";
    alert(strToshow);
}

// wait for dom loaded
document.addEventListener("DOMContentLoaded",function(event){
    console.log("DOM loaded");

    //add event to button
    var btHello = document.getElementById("btHello");
    btHello.addEventListener("click", fctHello);
});