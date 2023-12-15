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
    res.status(400).json({ error: 'Tipo de cliente inválido' })
  }

  Object.values(client).every((value) => {
    if (value.length === 0) {
      res.status(400).json({ error: 'Cliente com campos em branco.' })
    }
  })

  res.status(201).json({ message: 'Sucesso!', client: client })
}

module.exports = {
  register_get,
  register_post,
}
