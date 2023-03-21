const mongoose = require( 'mongoose')
 
const Inventories = mongoose.model( 'Inventories', {
    userId: {type: String, required: true, unique: true },
    items: { type: Array, required: false }
})
 
module.exports = { Inventories }