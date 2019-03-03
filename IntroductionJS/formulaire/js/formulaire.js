/*function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}*/
var ok= false;

function verifNom(){
   var pseudo = document.getElementById("inName");
   var regex=/^[a-zA-Z ]{2,20}$/;
 //  ok=false;
   if(!regex.test(pseudo.value))
   {
      pseudo.style.border = "thick solid #f00"; 
   //   return 0;     
   }
   else
   {
      pseudo.style.border = "thick solid #0f0";
      //return 1;
   }
}

function verifAge(){
   var age = document.getElementById("Age");
   var reg = /^\d{1,3}$/;
   if(!reg.test(age.value))
   {
      age.style.border = "thick solid #f00";
     return 0;
   }
   else
   {
      age.style.border = "thick solid #0f0";
      return 1;
   }
}

function verifPswd(){
   var pswd = document.getElementById("pswd");
   var reg = /^[a-zA-Z0-9 ]{8,16}$/
   if(!reg.test(pswd.value)){
      pswd.style.border = "thick solid #f00";
      return 0;
   }
   else{
      pswd.style.border = "thick solid #0f0";
      return 1;
   }
}

function verifConfPswd(){
   var pswd = document.getElementById("pswd");
   var reg = /^[a-zA-Z0-9 ]{8,16}$/
   var confirmation = document.getElementById("pswdconf");
   if(!reg.test(confirmation.value) || pswd.value != confirmation.value){
      confirmation.style.border = "thick solid #f00";
      return 0;
   }
   else{
      confirmation.style.border = "thick solid #0f0";
      return 1;
   }
}

function verifBtn(){
/*   var nom = document.getElementById("inName");
   nom.addEventListener("keyup", verifNom);
   var age = document.getElementById("Age");
   age.addEventListener("keyup", verifAge);
   var pswd = document.getElementById("pswd");
   pswd.addEventListener("keyup", verifPswd);

   var vpswd = document.getElementById("pswdconf");;
   vpswd.addEventListener("keyup", verifConfPswd);
   
*/
}

// wait for dom loaded
document.addEventListener("DOMContentLoaded",function(event){
    console.log("DOM bien bien charge");

    var nom = document.getElementById("inName");
    nom.addEventListener("keyup", verifNom);
   
    var age = document.getElementById("Age");
    age.addEventListener("keyup", verifAge);

    var pswd = document.getElementById("pswd");
    pswd.addEventListener("keyup", verifPswd);

    var vpswd = document.getElementById("pswdconf");;
    vpswd.addEventListener("keyup", verifConfPswd);

    var btn = document.getElementById("btSignin");
    btn.addEventListener("click",verifBtn);

});