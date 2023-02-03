const mongoose = require( 'mongoose')
 
const Loots = mongoose.model( 'Loots', {
    action: {type: String, required: true },
    common: { type: Array, required: true },
    uncommon: { type: Array, required: true },
    rare: { type: Array, required: true },
    epic: { type: Array, required: true },
    legendary: { type: Array, required: true },
    mythic: { type: Array, required: true },

})
 
module.exports = { Loots }