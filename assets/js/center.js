window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById("portfolio").className = "title";
  }
}