#!/usr/bin/env node

const fs = require('node:fs');

const countStudents = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    console.log(data);
    // write Login for the script to count student number & return it
    // log the number of student of each field & their names
    // example : Number of students in {FIELD}: {STUDENT NUMNER}. List: {STUNDENTS_NAMES}
  });
};

module.exports = countStudents;