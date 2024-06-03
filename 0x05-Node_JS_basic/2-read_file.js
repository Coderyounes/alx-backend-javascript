#!/usr/bin/env node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    if (!data.length || data[0] === '') {
      throw new Error('Cannot load the database');
    }

    const students = {};
    for (const line of data) {
      const student = line.split(',');
      if (student.length === 4 && student[0] !== 'firstname' && student[0] !== '') {
        if (!students[student[3]]) {
          students[student[3]] = [];
        }
        students[student[3]].push(student[0]);
      }
    }

    console.log(`Number of students: ${data.length - 1}`);
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
