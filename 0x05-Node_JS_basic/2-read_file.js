#!/usr/bin/env node

const fs = require('node:fs');

const objList = [];

const countStudents = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const students = lines.length - 1;
    const group = [];

    console.log('Number of students: ', students);

    lines.slice(1).map((data) => {
      const values = data.split(',');
      group.push(values);
    });

    group.map((arr) => {
      const obj = {};
      headers.forEach((field, idx) => {
        obj[field] = arr[idx];
      });
      objList.push(obj);
    });
    console.log(objList);
    // Write a Logic to separate each Students & Extract their firstname & count them
  });
};

module.exports = countStudents;
