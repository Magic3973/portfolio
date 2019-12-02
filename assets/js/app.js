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
        if (document.body.scrollTop >40 || document.documentElement.scrollTop > 38) {
          document.getElementById("down").style.display = "block";
        }
        else {
          document.getElementById("down").style.display = "none";
        }

          if (document.body.scrollTop >320 || document.documentElement.scrollTop > 320) {
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
        if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
            document.getElementById("contact").className = "slideUp";
                }
        
                 
}


var mymapi = L.map('mapi').setView([47.0908855,5.4891488], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/magic3973/cjw1v6ev80oyz1cli0fb6f72s/tiles/256/{z}/{x}/{y}?&access_token=pk.eyJ1IjoibWFnaWMzOTczIiwiYSI6ImNqdzF3cDc3MDAzNW80OXFyOTlocjZ6ajIifQ.3sbLCyZ6burOL2BHRAOCTA#10.0/42.362400/-71.020000/0}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFnaWMzOTczIiwiYSI6ImNqdzF3cDc3MDAzNW80OXFyOTlocjZ6ajIifQ.3sbLCyZ6burOL2BHRAOCTA'
}).addTo(mymapi);
var marker = L.marker([47.0908855, 5.4891488]).addTo(mymapi);
marker.bindPopup("<b>Coucou!</b><br>Je suis ici.").openPopup();


$("#centralModalSuccess").on('show.bs.modal', function(){

});