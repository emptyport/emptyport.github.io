Reveal.addEventListener('massAccuracy', function() {
  var options = {
    strings: ["^1000Mass Acceracy", "Mass Acc^500uracy"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
    onComplete: function() {
      document.querySelectorAll(".typed-cursor")[0].style.display = "none";
    }
  };
  
  var typed = new Typed(".accuracy", options);
})

