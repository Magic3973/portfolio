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

          if (document.body.scrollTop >330 || document.documentElement.scrollTop > 330) {
           document.getElementById("qui").className = "slideUp";
          }
          if (document.body.scrollTop >1100 || document.documentElement.scrollTop > 1100) {
            document.getElementById("parcours").className = "slideUp";
           }

           if (document.body.scrollTop > 2020 || document.documentElement.scrollTop >2020) {
          document.getElementById("competences").className = "slideUp";
        }
        if (document.body.scrollTop >2600 || document.documentElement.scrollTop > 2600) {
              document.getElementById("technologies").className = "slideUp";
        }
        if (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200) {
    document.getElementById("portfolio").className = "slideUp";
        }
        if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
            document.getElementById("contact").className = "slideUp";
                }
        
                 
}
$("#centralModalSuccess").on('show.bs.modal', function(){

});