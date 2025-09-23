const fs = require('fs')
const yaml = require('js-yaml')

function readYAML(filePath) {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8')
        return yaml.load(fileContents)
    } catch (e) {
        console.error(`Error reading YAML file: ${e}`)
        return null
    }
}

module.exports = {
    readYAML,
}
