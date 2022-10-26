const { argv } = require('node:process')
const fs = require('fs')

const [,, inputFile, outputFile, flag] = argv
if (inputFile === undefined) {
  process.stdin.on('data', (inputData) => {
    const newString = inputData.toString().trim().split('\n')
    newString.forEach((line, index) => {
      console.log(`${index + 1}: ${line}`)
    })
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
