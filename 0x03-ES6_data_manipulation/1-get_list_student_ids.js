export default function getListStudentIds(getListStudents) {
  const Ids = [];
  if (getListStudents instanceof Object) {
    getListStudents.map((item) => Ids.push(item.id));
  }
  return Ids;
}
