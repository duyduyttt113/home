const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://duyduyttt113:bchqshtlco@cluster0.ozhm5ll.mongodb.net/data', {

            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully');

    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };