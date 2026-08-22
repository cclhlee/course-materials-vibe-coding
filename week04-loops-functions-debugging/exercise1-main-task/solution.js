function calcScores(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  let average = total / scores.length;
  console.log("總分：" + total + "，平均分數：" + average.toFixed(1));
  return { total, average };
}

calcScores([8, 6, 9, 7, 10]);   // 總分：40，平均分數：8.0
calcScores([3, 4]);             // 總分：7，平均分數：3.5
