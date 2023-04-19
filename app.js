let iphonePic = document.querySelector('.iphone-pic');

function myFunction(x) {
    if (x.matches) { // If media query matches
        iphonePic.src = "assets/image-hero-portrait.png"
    } else {
        iphonePic.src = "assets/image-hero-portrait.png"
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes