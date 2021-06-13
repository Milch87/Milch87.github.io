var treasureLocation = Math.floor(Math.random() *9)
var bombLocation = Math.floor(Math.random() *9)
if (treasureLocation == bombLocation){
bombLocation = Math.floor(Math.random() *9)
}
const treasure = (location) =>{

   if (location === treasureLocation) {
       document.getElementById(location).innerHTML = "&#x1F4B0"
       setTimeout(function(){
         alert("you have found the treasure"),
         window.location.reload();
       }, 1000);

    }
    else if (location === bombLocation){
     document.getElementById(location).innerHTML = "&#128169"
     setTimeout(function(){
       alert("you have found the bomb and exploded"),
       window.location.reload();
     }, 1000);
    }
    else  {
      return document.getElementById(location).innerHTML = "&#128556"
    }


}
