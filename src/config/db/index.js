const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost/BmBlogs_Dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect success');
    } catch (error) {
        console.log('connect fail');
    }

}

module.exports = { connect };