const PathFile = 'customer-data.csv'
const fs = require('fs-extra');
const csv = require('csvtojson')
csv().fromFile(PathFile).then((jsonObj) => {    
    fs.outputJsonSync('customer-data.json', jsonObj) 
    console.log(jsonObj);
})
