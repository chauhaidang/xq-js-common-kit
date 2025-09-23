const { readFileSync } = require('fs')
const path = require('path')

let configPath = null

function loadConfig() {
    try {
        return readFileSync(path.resolve(process.cwd().toString(), 'xq.json'))
    } catch (error) {
        throw new Error('xq.json file does not exist!')
    }
}

function getConfig() {
    if (!configPath) {
        configPath = loadConfig()
    }
    return JSON.parse(configPath.toString())
}

module.exports = {
    getConfig
}
