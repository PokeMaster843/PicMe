var cnv = document.getElementById("mainPage");
var ctx = cnv.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 0, 80);
var scrollbar = 20;

cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
grd.addColorStop(0, "#3366ff");
grd.addColorStop(0.5, "#0033cc");
grd.addColorStop(1, "#3366ff");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, cnv.width - scrollbar, 80);
ctx.strokeStyle = "#000000";

var home = ctx.rect(0, 0, 100, 80);
var profile = ctx.rect(100, 0, 100, 80);
var settings = ctx.rect(200, 0, 100, 80);
var friends = ctx.rect(300, 0, 100, 80);
ctx.stroke();
