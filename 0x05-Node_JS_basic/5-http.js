const http = require('http');

const PORT = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Message!');
});

app.listen(PORT);

module.exports = app;

// in path '/' shoud display a Hello Holberton School!
// in path '/students' should display 'This is the list of our students'
// the Script should Take a file.csv as argument
