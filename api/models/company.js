const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = new Schema(
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
        cnpj: {
            type: String,
            required: [true, 'Por favor, insira um cnpj.'],
        },
        foundationdate: {
            type: Date,
            required: [true, 'Por favor insira uma data de fundação.'],
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

module.exports = mongoose.model('Company', CompanySchema)