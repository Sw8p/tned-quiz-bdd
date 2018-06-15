const mongoose = require('mongoose')

// Use native promises
mongoose.Promise = Promise

function connect() {
    const keepAlive = 600 * 1000
    const connectTimeoutMS = 60 * 1000

    const uri = 'mongodb://localhost/tned_demo'
    return mongoose.connect(uri, {
        keepAlive,
        connectTimeoutMS,
    })
}

module.exports = { connect }
