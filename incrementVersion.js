const { writeFile } = require('fs/promises');
const package = require('./package.json');
const action = process.argv[2];
const version = package.version.split('.');
switch (action) {
  case "major": {
    version[0]++;
    break;
  }
  case "minor": {
    version[1]++;
    break;
  }
  case "patch": {
  }
  default: {
    version[2]++;
  }
}
package.version = version.join('.');
writeFile('./package.json', JSON.stringify(package, null, 2));