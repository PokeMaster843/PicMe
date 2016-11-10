var cnv = document.getElementById("mainPage");
var ctx = cnv.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 0, 80);
var scrollbar = 20;

cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
grd.addColorStop(0, "#0039e6");
grd.addColorStop(0.5, "#0033cc");
grd.addColorStop(1, "#0039e6");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, cnv.width - scrollbar, 80);

ctx.beginPath();
ctx.strokeStyle = "#001a66";
var home = ctx.rect(0, 1, 160, 79);
var profile = ctx.rect(160, 1, 160, 79);
var settings = ctx.rect(320, 1, 160, 79);
var friends = ctx.rect(480, 1, 160, 79);
ctx.stroke();
