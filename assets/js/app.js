window.onscroll = function() {myFunction()};

function myFunction() {

  if (document.body.scrollTop >500 || document.documentElement.scrollTop > 500) {
    document.getElementById("top").style.display = "block";
  }
  if (document.body.scrollTop >200 || document.documentElement.scrollTop > 200) {
    document.getElementById("down").style.display = "block";
  }
  if (document.body.scrollTop >300 || document.documentElement.scrollTop > 300) {
    document.getElementById("bibi").className = "slideUp";
}
           if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
          document.getElementById("competences").className = "slideUp";
        }
        if (document.body.scrollTop >800 || document.documentElement.scrollTop > 800) {
              document.getElementById("technologies").className = "slideUp";
        }
        if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
    document.getElementById("portfolio").className = "slideUp";
        }
        if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
            document.getElementById("contact").className = "slideUp";
                }


                else {
                  document.getElementById("down").style.display = "none";
                
                }
}

function myMenu() {
  var element = document.getElementsByClassName("navigation");

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