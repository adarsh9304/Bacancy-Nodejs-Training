/* eslint-disable no-console */
const fs = require('fs');

const reading = fs.createReadStream(`${__dirname}/Task5_input.txt`);
const writing = fs.createWriteStream(`${__dirname}/Task5_output.txt`);

reading.on('data', (content) => {
  writing.write(content);
  console.log('content from reading ', content);
});
