const { argv } = require('node:process')
const fs = require('fs')

const [,, inputFile, outputFile, flag] = argv
if (!fs.existsSync(inputFile)) {
  console.log('First Argument can\'t be emty')
  process.exit(1)
} else if (fs.existsSync(inputFile) && outputFile === undefined) {
  console.log('Output Argument can\'t be emty')
  process.exit(1)
} else if (fs.existsSync(outputFile) && flag === undefined) {
  console.log(`Second File already exist to overwrite ${outputFile} put -y`)
  process.exit(1)
} else if (fs.existsSync(outputFile) && flag === '-n') {
  console.log(`You can't overwrite ${outputFile} because of ${flag} put -y to overwrite`)
  process.exit(1)
} else if (!fs.existsSync(outputFile)) {
  const data = fs.readFileSync(inputFile, 'utf8')
  const newArr = []
  data.split('\n').forEach((line, index) => {
    newArr.push(`${index + 1}: ${line}`)
  })
  const newString = newArr.join('\n').toString()
  fs.writeFileSync(outputFile, newString, { encoding: 'utf8' })
  console.log(`Succesfully duplicted ${inputFile} to ${outputFile}`)
  process.exit(1)
} else if (flag === '-y') {
  const dataArr = []
  const data = fs.readFileSync(inputFile, 'utf8')
  data.split('\n').forEach((line, index) => {
    dataArr.push(`${index + 1}: ${line}`)
  })
  const newString = dataArr.join('\n').toString()
  fs.writeFileSync(outputFile, newString, { encoding: 'utf8', flag: 'w' })
  console.log(`Succesfully overwritten ${outputFile}`)
}
