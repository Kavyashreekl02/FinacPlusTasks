const fs = require('fs');

function writeToFile(filename, content) {
  fs.writeFileSync(filename, content);
}

module.exports = { writeToFile };
