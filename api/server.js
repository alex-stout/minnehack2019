const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/minnehack",
    {
        user: "prototype",
        pass: "password123",
        useNewUrlParser: true
    }
)
.then(() => {
    console.log("connected to db")
})
.catch(err => {
    console.log(err)
})