function fctChange(){
    //get content of input inName
    var image = document.getElementById("myImage");
    var btnSwitch = document.getElementById("btSwitch");
  
    if(btnSwitch.innerHTML=="Allumer"){
    btnSwitch.innerHTML = "Etteindre";
    image.src="images/allume.jpg";
    }
    else {
        btnSwitch.innerHTML = "Allumer";
        image.src="images/etteint.jpg";
    }
}

// wait for dom loaded
document.addEventListener("DOMContentLoaded",function(event){
    console.log("DOM loaded");

    //add event to button
    var btSwitch = document.getElementById("btSwitch");
    btSwitch.addEventListener("click", fctChange);
});