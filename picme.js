var cnv = document.getElementById("mainPage");
var ctx = cnv.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 0, 160);

cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
grd.addColorStop(0, "#3366ff");
grd.addColorStop(0.5, "#0033cc");
grd.addColorStop(1, "#3366ff");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, cnv.width, 160);
