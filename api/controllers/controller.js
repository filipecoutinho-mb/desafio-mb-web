const register_get = async (req, res) => {
  res.status(200).json('GETTING')
}

const register_post = async (req, res, next) => {
  const { email, type, name, phone, password } = req.body
  let client = {}
  if (type === 'pessoaFisica') {
    const { cpf, birthdate } = req.body
    client = {
      email,
      name,
      cpf,
      birthdate,
      phone,
      password,
    }
  } else if (type === 'pessoaJuridica') {
    const { cnpj, foundationdate } = req.body
    client = {
      email,
      name,
      cnpj,
      foundationdate,
      phone,
      password,
    }
  } else {
    res.status(422).json({ error: 'Tipo de cliente inválido' })
  }

  let hasEmptyFields = false

  for (let key in client) {
    if (client[key].length === 0) {
      hasEmptyFields = true
    }
  }

  if (hasEmptyFields)
    res.status(422).json({ error: 'Cliente com campos em branco.' })
  else res.status(201).json({ message: 'Sucesso!', client: client })
}

module.exports = {
  register_get,
  register_post,
}
