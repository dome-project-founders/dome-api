const mongoose = require( 'mongoose')
 
const Actions = mongoose.model( 'Actions', {
    action: {type: String, required: true },
    time: { type: String, required: true },
    amount: { type: Number, required: true },
    rarity: { type: Object, required: true },
})
 
module.exports = { Actions }