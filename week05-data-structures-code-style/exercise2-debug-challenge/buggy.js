function f(a) {
  var b = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i].medicationCount >= 3) {
      if (a[i].age > 65) {
        b = b + 1;
      }
    }
  }
  console.log("count: " + b);
}

const patients = [
  { name: "王小明", age: 72, medicationCount: 5 },
  { name: "陳美玲", age: 65, medicationCount: 2 },
  { name: "李大同", age: 80, medicationCount: 3 },
  { name: "張淑芬", age: 58, medicationCount: 1 },
];
f(patients);
