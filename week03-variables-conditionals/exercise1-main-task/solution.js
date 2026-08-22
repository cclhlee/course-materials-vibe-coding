function getDose(age) {
  let dose;
  if (age < 12) {
    dose = "兒童劑量：5毫克";
  } else if (age < 65) {
    dose = "成人劑量：10毫克";
  } else {
    dose = "老年人劑量：7毫克";
  }
  return dose;
}

console.log(getDose(5));   // 兒童劑量：5毫克
console.log(getDose(30));  // 成人劑量：10毫克
console.log(getDose(65));  // 老年人劑量：7毫克（65正好落入老年人）
