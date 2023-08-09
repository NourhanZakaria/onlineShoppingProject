
window.onload=function(){
    var appear=document.getElementsByClassName("appear");
    for(var i=0;i<3;i++){
        appear[i].style.display="flex";
    }
   
}


var show=document.getElementById("show");
var currentItems=3;
show.onclick = () =>{
 
  var products=[...document.querySelectorAll(".container .appear")]
  for(var i=currentItems;i<currentItems+3;i++){
      products[i].style.display="flex";
  }
  currentItems+=3;
  
   if(currentItems>=products.length){
    show.style.display="none";
   }
}
