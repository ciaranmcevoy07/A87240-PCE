var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Doente = require('./doente')

var RegistoSchema =  new Schema({
    numseq: {type:Doente.id_paciente}, 
    dataRegisto: {type: Date},
    tempratura: {type: Number},
    falta_ar: {type: String},
    dor_cabeca: {type: String},
    dor_muscular: {type: String},
    tosse: {type: String},
    diarreia: {type: String},
    olfato_paladar: {type: String},
    avaliacao_global: {type: String},
})

module.exports = mongoose.model('registo', RegistoSchema)