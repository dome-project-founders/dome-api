const mongoose = require( 'mongoose')
 
const Chars = mongoose.model( 'Chars', {
    userId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    location: {type: String, required: true},
})
 
module.exports = { Chars }