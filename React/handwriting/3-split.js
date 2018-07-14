const fs = require('fs')
const path = require('path')
const csv = fs.readFileSync(
    path.join(__dirname, 'database', 'images.csv'), 
'utf-8')

const a = csv.split('\n')
const shuffle = () => Math.random() - 0.5
const b = a.sort(shuffle)

const c1 = b.slice(0, 2000)
const c2 = b.slice(2000, 2500)

fs.writeFileSync('image-train.csv', c1.join('\n'))
fs.writeFileSync('image-test.csv', c2.join('\n'))
console.log('ok')