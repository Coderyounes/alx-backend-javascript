export default function createIteratorObject(report) {
  const namesArray = [];
  for (const department of Object.values(report.allEmployees)) {
    for (const employee of department) {
      namesArray.push(employee);
    }
  }
  return namesArray;
}
