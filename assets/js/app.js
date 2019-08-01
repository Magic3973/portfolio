function myMenu() {

  var element = document.querySelector(".navigation");
  if (element.classList) { 
    element.classList.toggle("isOpen");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("isOpen");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("isOpen");
      element.className = classes.join(" "); 
  }
}

document.querySelector("#etoile").addEventListener('click', function(){
  myMenu();
})


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop >100 || document.documentElement.scrollTop > 100) {
    document.getElementById("top").style.display = "block";
}
        else {
          document.getElementById("top").style.display = "none";
        }
        if (document.body.scrollTop >50 || document.documentElement.scrollTop > 50) {
          document.getElementById("down").style.display = "block";
        }
        else {
          document.getElementById("down").style.display = "none";

}
  if (document.body.scrollTop >300 || document.documentElement.scrollTop > 300) {
    document.getElementById("bibi").className = "slideUp";
}
           if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
          document.getElementById("competences").className = "slideUp";
        }
        if (document.body.scrollTop >1100 || document.documentElement.scrollTop > 1100) {
              document.getElementById("technologies").className = "slideUp";
        }
        if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    document.getElementById("portfolio").className = "slideUp";
        }
        if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
            document.getElementById("contact").className = "slideUp";
                }
        
                 
}
$("#centralModalSuccess").on('show.bs.modal', function(){

});