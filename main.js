const config = require('./src/config');

console.log(config.getConfig());

const { readYAML } = require('./src/yaml');

const content= readYAML(process.cwd() + '/xq.yaml')
console.log(content);