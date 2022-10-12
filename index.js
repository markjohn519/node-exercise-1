const { argv } = require('node:process')
const fs = require('fs')

const checkFile = (arg) => {
  let numLines = 0
  fs.readFile(arg, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const lines = data.split('\n')
    lines.forEach((line) => {
      numLines += 1
      console.log(`${numLines}: ${line}`)
    })
  })
}

checkFile(argv[2])
