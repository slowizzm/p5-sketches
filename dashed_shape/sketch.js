function setup() {
  createCanvas(400, 400);
}
let a = 200;
function draw() {
  background(220);
  
  dashedRect(100,100,100,100,3,13);
  dashedLine(width*0.1,20,width*0.9,20,a,a)
}

function dashedLine(x1, y1, x2, y2, l, g) {
    let pc = dist(x1, y1, x2, y2) / 100;
    let pcCount = 1;
    let lPercent = gPercent = 0;
    let currentPos = 0;
    let xx1 = yy1 = xx2 = yy2 = 0;
 
    while (int(pcCount * pc) < l) {
        pcCount++
    }
    lPercent = pcCount;
    pcCount = 1;
    while (int(pcCount * pc) < g) {
        pcCount++
    }
    gPercent = pcCount;
 
    lPercent = lPercent / 100;
    gPercent = gPercent / 100;
    while (currentPos < 1) {
        xx1 = lerp(x1, x2, currentPos);
        yy1 = lerp(y1, y2, currentPos);
        xx2 = lerp(x1, x2, currentPos + lPercent);
        yy2 = lerp(y1, y2, currentPos + lPercent);
        if (x1 > x2) {
            if (xx2 < x2) {
                xx2 = x2;
            }
        }
        if (x1 < x2) {
            if (xx2 > x2) {
                xx2 = x2;
            }
        }
        if (y1 > y2) {
            if (yy2 < y2) {
                yy2 = y2;
            }
        }
        if (y1 < y2) {
            if (yy2 > y2) {
                yy2 = y2;
            }
        }
 
        line(xx1, yy1, xx2, yy2);
        currentPos = currentPos + lPercent + gPercent;
    }
}
 
function dashedRect(x, y, w, h, l, g) {
    dashedLine(x, y, x+w, y, l, g); //Top
    dashedLine(x, y+h, x+w, y+h, l, g); //Bottom
    dashedLine(x, y, x, y+h, l, g); //Left
    dashedLine(x+w, y, x+w, y+h, l, g); //Right
}