/**
 * Modelo de dados para construção das coleções("tabelas")
 * OS
 */

// importação dos recursos do framework mongoose
const { model, Schema } = require('mongoose')

// criação da estrutura da coleção OS
const osSchema = new Schema({
    dataEntrada: {
        type: Date,
        default: Date.now
    },
    idCliente: {
        type: String,        
    },
    statusOS: {
        type: String
    },
    computador: {
        type: String
    },
    serie: {
        type: String        
    },
    problema: {
        type: String  
    },
    observacao: {
        type: String
    },
    tecnico: {
        type: String  
    },
    diagnostico: {
        type: String  
    },
    pecas: {
        type: String 
    },
    valor: {
        type: String 
    },
}, {versionKey: false}) 

module.exports = model('OS', osSchema)