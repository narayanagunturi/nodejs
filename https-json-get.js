const https = require('https')
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
var buff = ''
https.get(url, (response) => {
  response.on('data', (chunk) => { 
    buff += chunk
  })
  response.on('end', () => {
      try {
          parsedData = JSON.parse(buff)
          console.log(parsedData)
      } catch (error) {
          console.error(error.me)
      }
    console.log(buff)
    console.log('response has ended')
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
