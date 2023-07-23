const Person = require('../models/person')
const Company = require('../models/company')

const register_get = async (req, res) => {
  res.status(200).json('GETTING')
}

const register_post = async (req, res, next) => {
  const { email, type, name, phone, password } = req.body
  if (type === 'pessoaFisica'){
    const { cpf, birthdate } = req.body
    try {
      const client = await Person.create({
        email,
        name,
        cpf,
        birthdate,
        phone,
        password
      })
      res.status(201).json({ msg: "Sucesso!" })
    }catch(err){
      res.status(400).json({ err })
    }
  }else if (type === 'pessoaJuridica'){
    const { cnpj, foundationdate } = req.body
    try {
      const client = await Company.create({
        email,
        name,
        cnpj,
        foundationdate,
        phone,
        password
      })
      res.status(201).json({ msg: "Sucesso!" })
    }catch(err){
      res.status(400).json({ err })
    }
  }else{
    res.status(400).json({ error: 'Tipo de cliente inválido' })
  }
}
  

module.exports = {
    register_get,
    register_post
}