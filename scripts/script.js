console.log("Heyyyyyyyyyy!!")
$(document).ready(function(){
    var url = window.location.href; 

        $("nav a").each(function() {
            console.log(url)
            console.log(this.href)
            if(url == (this.href)) {
                $(this).addClass("selected");
            }
        });


});
// TODO- add common nav-bar.
// TODO- use list in nav-bar
var myIndex = 0;
startSlideShow();

function startSlideShow() {
  var i;
  var x = document.getElementsByClassName("painting-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}