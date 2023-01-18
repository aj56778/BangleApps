var x = 0;
var y = 0;
g.clear(1);
Bangle.on('HRM', function(hrmInfo) {
  g.setFont6x15(1);
  //drawString(hrmInfo.bpm, x, y);
  //Buzzes every time heart beat is detected (theoretically)
  if (hrmInfo.bpm > 0) {
    Bangle.buzz();
    //show beating heart
    //g.drawString("Beat", 40);
    //
  }
  x = x;
  y =y + 12;
  if (y >= Bangle.appRect.y2-5){
    x  = x + 8;
    y = 0;
  }
});
