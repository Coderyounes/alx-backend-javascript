#!/usr/bin/env node

const fs = require('node:fs');

const countStudents = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n');
    const students = lines.length - 1;
    const fields = {};

    lines.slice(1).forEach((line) => {
      const values = line.split(',');
      const field = values[3];
      if (!Object.prototype.hasOwnProperty.call(fields, field)) {
        fields[field] = [];
      }
      fields[field].push(values[0]);
    });

    console.log('Number of students:', students);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  });
};

module.exports = countStudents;
