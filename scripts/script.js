$(document).ready(function(){
    var url = window.location.href; 
    $("nav a").each(function() {
        if(url == (this.href)) {
            $(this).addClass("selected");
        }
    });
});