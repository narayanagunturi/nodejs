const http = require('http')
const url = 'http://nodeprogram.com'
var buff = ''
http.get(url, (response) => {
  response.on('data', (chunk) => { 
    buff += chunk
  })
  response.on('end', () => {
    console.log(buff)
    console.log('response has ended')
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
