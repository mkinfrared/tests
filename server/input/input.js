const fs = require('fs')

const inputFilesPath = '../../input_files'
const filePath = `${__dirname}/../../input_files`

const files = fs.readdirSync(filePath, 'utf8')

let input = {}

files.forEach((file) => {
  input[file] = fs.readFileSync(`${filePath}/${file}`, 'utf-8', (err, data) => {
    if (err) {throw  err}
    return data
  })
})

for (const inputKey in input) {
  input[inputKey] = JSON.parse(input[inputKey])
}

module.exports = input;
