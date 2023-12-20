<template>
  <main>
    <form class="register-client-form" method="post" @submit.prevent="next()">
      <p class="step-indicator">
        Etapa <span style="color: orange">{{ section }}</span> de 4
      </p>
      <div class="form-section" id="form-section-welcome" v-if="section === 1">
        <h2 class="step-header">Seja bem vindo(a)</h2>
        <label for="email">Endereço de e-mail</label>
        <input
          class="register-client-input-field"
          type="email"
          id="email"
          v-model="client.email"
          required
        />
        <div class="form-group">
          <input
            class="register-client-input-radio"
            type="radio"
            id="pessoa-fisica"
            name="client-type"
            value="pessoaFisica"
            v-model="client.type"
            required
          />
          <label class="register-client-input-radio-label" for="pessoa-fisica"
            >Pessoa Física</label
          >
          <input
            class="register-client-input-radio"
            type="radio"
            id="pessoa-juridica"
            name="client-type"
            value="pessoaJuridica"
            v-model="client.type"
            required
          />
          <label class="register-client-input-radio-label" for="pessoa-juridica"
            >Pessoa Jurídica</label
          >
        </div>
      </div>
      <div
        class="form-section"
        id="form-section-pf"
        v-if="section === 2 && client.type === 'pessoaFisica'"
      >
        <h2 class="step-header">Pessoa Física</h2>
        <label for="name">Nome</label>
        <input
          class="register-client-input-field"
          type="text"
          id="name"
          v-model="client.name"
          required
        />
        <label for="cpf">CPF</label>
        <input
          class="register-client-input-field"
          type="text"
          id="cpf"
          v-model="client.cpf"
          required
        />
        <label for="birthdate">Data de nascimento</label>
        <input
          class="register-client-input-field"
          type="date"
          id="birthdate"
          v-model="client.birthdate"
          required
        />
        <label for="phone-number">Telefone</label>
        <input
          class="register-client-input-field"
          type="text"
          id="phone-number"
          v-model="client.phone"
          required
        />
      </div>
      <div
        class="form-section"
        id="form-section-pj"
        v-if="section === 2 && client.type === 'pessoaJuridica'"
      >
        <h2 class="step-header">Pessoa Jurídica</h2>
        <label for="business-name">Razão Social</label>
        <input
          class="register-client-input-field"
          type="text"
          id="business-name"
          v-model="client.name"
          required
        />
        <label for="cnpj">CNPJ</label>
        <input
          class="register-client-input-field"
          type="text"
          id="cnpj"
          v-model="client.cnpj"
          required
        />
        <label for="foundation-date">Data de abertura</label>
        <input
          class="register-client-input-field"
          type="date"
          id="foundation-date"
          v-model="client.foundationdate"
          required
        />
        <label for="phone-number">Telefone</label>
        <input
          class="register-client-input-field"
          type="text"
          id="phone-number"
          v-model="client.phone"
          required
        />
      </div>
      <div class="form-section" id="form-section-senha" v-if="section === 3">
        <h2 class="step-header">Senha de acesso</h2>
        <label for="password">Sua senha</label>
        <input
          class="register-client-input-field"
          type="password"
          id="password"
          v-model="client.password"
          required
        />
      </div>
      <div class="form-section" id="form-section-review" v-if="section === 4">
        <h2 class="step-header">Revise suas informações</h2>
        <div class="form-section" v-if="client.type === 'pessoaFisica'">
          <label for="email">Endereço de e-mail</label>
          <input
            class="register-client-input-field"
            type="text"
            id="email"
            v-model="client.email"
            required
          />
          <label for="name">Nome</label>
          <input
            class="register-client-input-field"
            type="text"
            id="name"
            v-model="client.name"
            required
          />
          <label for="cpf">CPF</label>
          <input
            class="register-client-input-field"
            type="text"
            id="cpf"
            v-model="client.cpf"
            required
          />
          <label for="birthdate">Data de nascimento</label>
          <input
            class="register-client-input-field"
            type="date"
            id="birthdate"
            v-model="client.birthdate"
            required
          />
          <label for="phone-number">Telefone</label>
          <input
            class="register-client-input-field"
            type="text"
            id="phone-number"
            v-model="client.phone"
            required
          />
          <label for="password">Sua senha</label>
          <input
            class="register-client-input-field"
            type="password"
            id="password"
            v-model="client.password"
            required
          />
        </div>
        <div class="form-section" v-if="client.type === 'pessoaJuridica'">
          <label for="email">Endereço de e-mail</label>
          <input
            class="register-client-input-field"
            type="text"
            id="email"
            v-model="client.email"
            required
          />
          <label for="name">Nome</label>
          <input
            class="register-client-input-field"
            type="text"
            id="name"
            v-model="client.name"
            required
          />
          <label for="cpf">CNPJ</label>
          <input
            class="register-client-input-field"
            type="text"
            id="cnpj"
            v-model="client.cnpj"
            required
          />
          <label for="foundation-date">Data de abertura</label>
          <input
            class="register-client-input-field"
            type="date"
            id="foundation-date"
            v-model="client.foundationdate"
            required
          />
          <label for="phone-number">Telefone</label>
          <input
            class="register-client-input-field"
            type="text"
            id="phone-number"
            v-model="client.phone"
            required
          />
          <label for="password">Sua senha</label>
          <input
            class="register-client-input-field"
            type="passwor+"
            id="password"
            v-model="client.password"
            required
          />
        </div>
      </div>
      <div class="button-section" id="form-section-buttons">
        <button
          class="form-button button-previous"
          v-if="section !== 1"
          @click.prevent="prev()"
        >
          Voltar
        </button>
        <button v-if="section !== 4" class="form-button" type="submit">
          Continuar
        </button>
        <button v-else class="form-button" @click.prevent="submit()">
          Cadastrar
        </button>
      </div>
    </form>
  </main>
</template>

<script setup>
  import { ref } from 'vue'

  const section = ref(1)
  const client = ref({
    email: '',
    type: '',
    name: '',
    cpf: '',
    cnpj: '',
    birthdate: '',
    foundationdate: '',
    phone: '',
    password: '',
  })

  const prev = () => {
    section.value = section.value - 1
  }

  const next = () => {
    section.value = section.value + 1
  }

  const submit = async () => {
    const url = 'http://localhost:3000/registration'
    let res = ''
    if (client.value.type === 'pessoaFisica') {
      try {
        res = await fetch(url, {
          method: 'POST',
          mode: 'cors',
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
        res = await fetch(url, {
          method: 'POST',
          mode: 'cors',
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

    console.log(res)
  }
</script>

<style>
  @import '../../statics/styles/register-client.css';
</style>
