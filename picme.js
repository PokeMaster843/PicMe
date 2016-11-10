var cnv = document.getElementById("mainPage");
var ctx = cnv.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 0, 80);
var scrollbar = 20;

cnv.width = window.innerWidth - scrollbar;
cnv.height = window.innerHeight - scrollbar;
grd.addColorStop(0, "#0039e6");
grd.addColorStop(0.5, "#0033cc");
grd.addColorStop(1, "#0039e6");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, cnv.width, 80);
