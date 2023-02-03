const mongoose = require( 'mongoose')
 
const Items = mongoose.model( 'Items', {
    name: {type: String, required: true },
    skill: {type: String, required: true },
    rarity: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Array, required: true },

})
 
module.exports = { Items }