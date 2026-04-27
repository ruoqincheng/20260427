function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#e7c6ff');

  // 如果您想保留原本 50% 區域的視覺效果，可以畫一個框 (選用)
  // noFill();
  // stroke(255);
  // rectMode(CENTER);
  // rect(width / 2, height / 2, width * 0.5, height * 0.5);

  // 畫布中央顯示指定文字
  fill(0); // 設定文字顏色為黑色
  textSize(32); // 設定文字大小
  textAlign(CENTER, CENTER); // 設定文字水平與垂直對齊皆置中
  text("414730761鄭若芹", width / 2, height / 2 - 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
