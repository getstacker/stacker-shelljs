
var shell = require('shelljs');
for (var cmd in shell)
  global[cmd] = shell[cmd];
