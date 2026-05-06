const hydra = new Hydra({
  canvas: document.getElementById("ritual-bg-canvas"),
  detectAudio: true
});



a.setBins(4)
a.fft[0]

testRun = 15
osc(testRun, 0.01, 0.01).blend(noise(8, 0.02, 0.01), 9)
.color(-1, -1, -1)
.modulateRotate(noise(7, 0.0060, 0), () => a.fft[0]* 3.4)
.pixelate(4, 4)
.modulateRepeat(osc(7, 0.09, 0),  0.4, -2, 0.4, -2)
.modulateScale(noise(6, 0.01, 1),0.4)
// .kaleid()
.color(-2, -2, -2)
// .saturate(osc(2, 5, 12), -2)
.pixelate(90, 90)
.scale(1)
.out(o0)
render(o0)