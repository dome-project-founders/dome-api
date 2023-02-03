const mongoose = require( 'mongoose')
 
const Actions = mongoose.model( 'Actions', {
    action: {type: String, required: true },
    time: { type: String, required: true },
    amount: { type: Array, required: true },
    skill: { type: String, required: true },
    rarity: { type: Object, required: true },
    lootTable: { type: Array, required: true }
})
 
module.exports = { Actions }