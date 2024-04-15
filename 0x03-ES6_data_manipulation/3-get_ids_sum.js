export default function getStudentIdsSum(students) {
  let res;
  if (students instanceof Array) {
    res = students.reduce((acc, curr) => acc + curr.id, 0);
  }
  return res;
}
