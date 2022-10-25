const { argv } = require('node:process')
const fs = require('fs')

const [,, inputFile, outputFile, flag] = argv
if (!fs.existsSync(inputFile)) {
  console.log('First Argument can\'t be emty')
  process.exit(1)
} else if (!fs.existsSync(outputFile)) {
  const data = fs.readFileSync(inputFile, 'utf8')
  const newArr = []
  data.split('\n').forEach((line, index) => {
    newArr.push(`${index + 1}: ${line}`)
  })
  const newString = newArr.join('\n').toString()
  process.stdin.on('data', (inputData) => {
    fs.writeFileSync(inputData, newString, { encoding: 'utf8' })
    console.log(`Succesfully duplicted ${inputFile} to ${outputFile}`)
    process.exit(1)
  })
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
