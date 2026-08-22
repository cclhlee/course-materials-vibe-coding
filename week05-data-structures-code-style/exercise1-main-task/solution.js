const patients = [
  { name: "王小明", age: 72, medicationCount: 5 },
  { name: "陳美玲", age: 65, medicationCount: 2 },
  { name: "李大同", age: 80, medicationCount: 3 },
  { name: "張淑芬", age: 58, medicationCount: 1 },
];

function findPolypharmacy(patients) {
  return patients
    .filter((p) => p.medicationCount >= 3)
    .map((p) => p.name);
}

console.log(findPolypharmacy(patients)); // ["王小明", "李大同"]
