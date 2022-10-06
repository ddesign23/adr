// JavaScript Document
var miRuleta = new Winwheel({
  numSegments: 11,
  outerRadius: 170,
  segments: [
    { fillStyle: "#D8550F", text: "1" },
    { fillStyle: "#E5824E", text: "2" },
    { fillStyle: "#FFB690", text: "3" },
    { fillStyle: "#A83C02", text: "4" },
    { fillStyle: "#D8550F", text: "5" },
    { fillStyle: "#FFB690", text: "6" },
    { fillStyle: "#D8550F", text: "7" },
    { fillStyle: "#E5824E", text: "8" },
    { fillStyle: "#FFB690", text: "9" },
    { fillStyle: "#A83C02", text: "10" },
    { fillStyle: "#D8550F", text: "11" },
  ],
  animation: {
    type: "spinToStop",
    duration: 4,
    callbackFinished: "mensaje()",
    callbackAfter: "dibujarIndicador()"
  }
});

dibujarIndicador();

function mensaje() {
  var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
  alert("Elemento seleccionado: " + SegmentoSeleccionado.text);

  miRuleta.stopAnimation(false);
  miRuleta.rotationAngle = 0;
  miRuleta.draw();
  dibujarIndicador();
}

function dibujarIndicador() {
  var ctx = miRuleta.ctx;
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(170, 10);
  ctx.lineTo(230, 10);
  ctx.lineTo(200, 70);
  ctx.lineTo(170, 10);
  ctx.fill();
}
