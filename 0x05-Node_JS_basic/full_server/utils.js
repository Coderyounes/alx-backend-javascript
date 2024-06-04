const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = data.split('\r\n').slice(1)
    .map((student) => {
      const [firstName, lastName, age, field] = student.split(',');
      return {
        firstName, lastName, age, field,
      };
    });

  const studentsByField = students.reduce((acc, student) => {
    if (!acc[student.field]) {
      acc[student.field] = [];
    }
    acc[student.field].push(student.firstName);
    return acc;
  }, {});

  console.log(studentsByField);
  return studentsByField;
}

module.exports = countStudents;
