<template>
  <main>
    <form method="post" @submit.prevent="submit()">
      <p class="step-indicator">
        Etapa <span style="color: orange">{{ section }}</span> de 4
      </p>
      <div class="form-section" id="form-section-welcome" v-if="section === 1">
        <h2>Seja bem vindo(a)</h2>
        <label for="email">Endereço de e-mail</label>
        <input type="email" id="email" v-model="client.email" required />
        <div class="form-group">
          <input
            type="radio"
            id="pessoa-fisica"
            name="client-type"
            value="pessoaFisica"
            v-model="client.type"
            required
          />
          <label for="pessoa-fisica">Pessoa Física</label>
          <input
            type="radio"
            id="pessoa-juridica"
            name="client-type"
            value="pessoaJuridica"
            v-model="client.type"
            required
          />
          <label for="pessoa-juridica">Pessoa Jurídica</label>
        </div>
      </div>
      <div
        class="form-section"
        id="form-section-pf"
        v-if="section === 2 && client.type === 'pessoaFisica'"
      >
        <h2>Pessoa Física</h2>
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="client.name" required />
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" v-model="client.cpf" required />
        <label for="birthdate">Data de nascimento</label>
        <input type="date" id="birthdate" v-model="client.birthdate" required />
        <label for="phone-number">Telefone</label>
        <input type="text" id="phone-number" v-model="client.phone" required />
      </div>
      <div
        class="form-section"
        id="form-section-pj"
        v-if="section === 2 && client.type === 'pessoaJuridica'"
      >
        <h2>Pessoa Jurídica</h2>
        <label for="business-name">Razão Social</label>
        <input type="text" id="business-name" v-model="client.name" required />
        <label for="cnpj">CNPJ</label>
        <input type="text" id="cnpj" v-model="client.cnpj" required />
        <label for="foundation-date">Data de abertura</label>
        <input
          type="date"
          id="foundation-date"
          v-model="client.foundationdate"
          required
        />
        <label for="phone-number">Telefone</label>
        <input type="text" id="phone-number" v-model="client.phone" required />
      </div>
      <div class="form-section" id="form-section-senha" v-if="section === 3">
        <h2>Senha de acesso</h2>
        <label for="password">Sua senha</label>
        <input
          type="password"
          id="password"
          v-model="client.password"
          required
        />
      </div>
      <div class="form-section" id="form-section-review" v-if="section === 4">
        <h2>Revise suas informações</h2>
        <div class="form-section" v-if="client.type === 'pessoaFisica'">
          <label for="email">Endereço de e-mail</label>
          <input type="text" id="email" v-model="client.email" required />
          <label for="name">Nome</label>
          <input type="text" id="name" v-model="client.name" required />
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" v-model="client.cpf" required />
          <label for="birthdate">Data de nascimento</label>
          <input
            type="date"
            id="birthdate"
            v-model="client.birthdate"
            required
          />
          <label for="phone-number">Telefone</label>
          <input
            type="text"
            id="phone-number"
            v-model="client.phone"
            required
          />
          <label for="password">Sua senha</label>
          <input
            type="password"
            id="password"
            v-model="client.password"
            required
          />
        </div>
        <div class="form-section" v-if="client.type === 'pessoaJuridica'">
          <label for="email">Endereço de e-mail</label>
          <input type="text" id="email" v-model="client.email" required />
          <label for="name">Nome</label>
          <input type="text" id="name" v-model="client.name" required />
          <label for="cpf">CNPJ</label>
          <input type="text" id="cnpj" v-model="client.cnpj" required />
          <label for="foundation-date">Data de abertura</label>
          <input
            type="date"
            id="foundation-date"
            v-model="client.foundationdate"
            required
          />
          <label for="phone-number">Telefone</label>
          <input
            type="text"
            id="phone-number"
            v-model="client.phone"
            required
          />
          <label for="password">Sua senha</label>
          <input
            type="passwor+"
            id="password"
            v-model="client.password"
            required
          />
        </div>
      </div>
      <div class="button-section" id="form-section-buttons">
        <button
          class="botao-voltar"
          v-if="section !== 1"
          @click.prevent="prev()"
        >
          Voltar
        </button>
        <button v-if="section !== 4" @click.prevent="next()">Continuar</button>
        <button v-else type="submit">Cadastrar</button>
      </div>
    </form>
  </main>
</template>

<script setup>
  import { ref } from 'vue'

  const section = ref(1)
  const client = {
    email: '',
    type: '',
    name: '',
    cpf: '',
    cnpj: '',
    birthdate: '',
    foundationdate: '',
    phone: '',
    password: '',
  }

  const prev = () => {
    section.value = section.value - 1
  }

  const next = () => {
    section.value = section.value + 1
  }

  const submit = async () => {
    if (client.value.type === 'pessoaFisica') {
      try {
        await fetch('/registration', {
          method: 'POST',
          body: JSON.stringify({
            email: client.value.email,
            type: client.value.type,
            name: client.value.name,
            cpf: client.value.cpf,
            birthdate: client.value.birthdate,
            phone: client.value.phone,
            password: client.value.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await fetch('/registration', {
          method: 'POST',
          body: JSON.stringify({
            email: client.value.email,
            type: client.value.type,
            name: client.value.name,
            cnpj: client.value.cnpj,
            foundationdate: client.value.foundationdate,
            phone: client.value.phone,
            password: client.value.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

  body {
    font-family: 'Muli', sans-serif;
  }

  h2 {
    margin-top: 0;
  }

  main {
    padding: 1em 0.5em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 800px;
  }

  input[type='text'],
  input[type='email'],
  input[type='date'],
  input[type='password'] {
    height: 30px;
    border-radius: 5px;
    border-width: 1px;
  }

  button {
    width: 100%;
    padding: 10px 6px;
    color: white;
    font-size: 14px;
    background-color: orange;
    border-radius: 5px;
    border: 1px solid orange;
  }

  .botao-voltar {
    color: orange;
    background-color: white;
  }

  .step-indicator {
    margin: 0;
  }

  .form-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .button-section {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
</style>
