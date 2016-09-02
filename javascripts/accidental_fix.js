function fixAccidentals() {
  console.log(navigator.platform);
  if (navigator.platform == 'MacIntel' || navigator.platform == 'MacPPC') {
    document.getElementById("accidental").style.letterSpacing = "-4px";
    document.getElementById("accidental").style.marginLeft = "-5px";
  }
}

window.onload = fixAccidentals();
