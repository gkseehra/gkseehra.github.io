$(document).ready(function(){
    $(function(){
        $("#nav-bar").load("navBar.html");
      });
    // $("#nav-bar").load("navBar.html");
    var url = window.location.href; 
    $("nav a").each(function() {
        if(url == (this.href)) {
            $(this).addClass("selected");
        }
    });
});