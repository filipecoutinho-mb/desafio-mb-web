const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Por favor insira um e-mail.'],
            unique: true,
            lowercase: true,
        },
        name: {
            type: String,
            required: [true, 'Por favor, insira um nome.'],
        },
        cpf: {
            type: String,
            required: [true, 'Por favor, insira um cpf.'],
        },
        birthdate: {
            type: Date,
            required: [true, 'Por favor insira uma data de nascimento.'],
        },
        phone: {
            type: String,
            required: [true, 'Por favor, insira um telefone.'],
        },
        password: {
            type: String,
            required: [true, 'Por favor insira uma senha.'],
        },
      },
      { timestamps: true }
)

module.exports = mongoose.model('Person', PersonSchema)