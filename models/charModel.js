const mongoose = require( 'mongoose')
 
const Chars = mongoose.model( 'Chars', {
    username: { type: String, required: true, unique: true },
    location: {type: String, required: true},
})
 
module.exports = { Chars }