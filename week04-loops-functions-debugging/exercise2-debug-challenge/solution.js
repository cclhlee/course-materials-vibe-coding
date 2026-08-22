function averageScore(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  let average = total / scores.length;
  console.log("平均分數：" + average.toFixed(1));
}
averageScore([8, 6, 9, 7, 10]);  // 平均分數：8.0
