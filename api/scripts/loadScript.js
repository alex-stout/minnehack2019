const axios = require('axios')
const csv = require('csvtojson')
var _ = require('lodash')

csv()
    .fromFile('./Cargill Global Mill List 2018 Q3 Dashboard.csv')
    .subscribe(mill => {
        axios
            .post('http://localhost:9000/certification', {
                millName: mill.millName,
                millGPSCoord: `${mill.latitude},${mill.longitude}`,
                RSPOCertified: _.sample([true, false]),
                outReachPrograms: _.sample([true, false]),
                noDeforestStationPolicy: _.sample([true, false]),
                responsibilitySourcingPolicy: _.sample([true, false])
            })
            .then(res => {
                axios
                    .post('http://localhost:9000/mill', {
                        ...mill
                    })
                    .catch(err => {
                        console.log(err)
                        return
                    })
            })
            .catch(err => {
                console.log(err)
            })
    })
    .then(() => {
        console.log('Done 🚀')
    })
