const http = require('http');
const fs = require('fs');

const csvFile = process.argv[2];

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));
  const csStudents = students
    .filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  const sweStudents = students
    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  return { students, csStudents, sweStudents };
}

const PORT = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(csvFile);
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);

      res.statusCode = 200;
    } catch (error) {
      res.write(error.message);
    }
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
