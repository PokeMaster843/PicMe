var cnv = document.getElementById("site");
var ctx = cnv.getContext("2d");

var update = setInterval(function() {
  
  var grd = ctx.createLinearGradient(0, 0, 0, 160);
  grd.addColorStop(0, "#99b3ff");
  grd.addColorStop(0.5, "#0033cc");
  grd.addColorStop(1, "#99b3ff");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, cnv.width, 160);
  
}, 1000*2);
