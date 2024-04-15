export default function getStudentsByLocation(students, city) {
  let newarr = [];
  if (students instanceof Array) {
    newarr = students.filter((item) => item.location === city);
  }
  return newarr;
}
