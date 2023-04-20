let iphonePic = document.querySelector('.iphone-pic');


function myFunction(x, y) {
    if (x.matches) { // If media query matches
        iphonePic.src = "assets/image-hero-portrait.png"
    } else if (y.matches){
        iphonePic.src = "assets/image-hero-portrait@2x.png"
    } else {
        iphonePic.src = "assets/image-hero-landscape.png"
    }
  }
  
  var x = window.matchMedia("(min-width: 768px)")
  var y = window.matchMedia("(min-width: 1024px)")
  myFunction(x, y) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  y.addListener(myFunction) // Attach listener function on state changes