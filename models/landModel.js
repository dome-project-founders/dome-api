const mongoose = require( 'mongoose')
 
const Lands = mongoose.model( 'Lands', {
    land_id : {type: String, required: true, unique: true},
    name: { type: String, required: true },
    infos: { type: String, required: true},
    skills: {type: Array, required: true},
    actions: {type: String, required: true},
})
 
module.exports = { Lands }