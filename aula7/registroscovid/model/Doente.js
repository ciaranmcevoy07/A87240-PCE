var mongoose=require('mongoose');
var Schema = mongoose.Schema;
const CodigoPostal = require('./codigopostal')

var DoenteSchema =  new Schema({
    id_paciente: {type:Number, unique:true}, 
    nome: {type: String},
    data_nascimento: {type: Date},
    genero: {type: String},
    cod_postal: {type: CodigoPostal.cod_postal},
})

module.exports = mongoose.model('doente', DoenteSchema)