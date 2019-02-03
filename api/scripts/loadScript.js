const axios = require('axios')
const csv = require('csvtojson')

csv()
    .fromFile('./Cargill Global Mill List 2018 Q3 Dashboard.csv')
    .subscribe(mill => {
        axios
            .post('http://localhost:9000/mill', {
                ...mill
            })
            .catch(err => {
                console.log(err)
                return
            })
    })
    .then(() => {
        console.log('Done 🚀')
    })
