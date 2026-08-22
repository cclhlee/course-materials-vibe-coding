function countElderlyPolypharmacyPatients(patients) {
  let count = 0;
  for (const patient of patients) {
    const isPolypharmacy = patient.medicationCount >= 3;
    const isElderly = patient.age > 65;
    if (isPolypharmacy && isElderly) {
      count += 1;
    }
  }
  console.log(`count: ${count}`);
}

const patients = [
  { name: "王小明", age: 72, medicationCount: 5 },
  { name: "陳美玲", age: 65, medicationCount: 2 },
  { name: "李大同", age: 80, medicationCount: 3 },
  { name: "張淑芬", age: 58, medicationCount: 1 },
];
countElderlyPolypharmacyPatients(patients); // count: 2
