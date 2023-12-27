<template>
  <main>
    <form class="register-client-form" method="post" @submit.prevent="next()">
      <p class="step-indicator">
        Etapa
        <span class="current-section">{{ steps.current }}</span>
        de {{ steps.total }}
      </p>
      <email-step
        v-if="steps.current === 1"
        :email="client.email"
        :type="client.type"
        @update="updateData"
      />
      <pf-details-step
        v-if="steps.current === 2 && client.type === 'pessoaFisica'"
        :name="client.name"
        :cpf="client.cpf"
        :birthdate="client.birthdate"
        :phone="client.phone"
        @update="updateData"
      />
      <pj-details-step
        v-if="steps.current === 2 && client.type === 'pessoaJuridica'"
        :name="client.name"
        :cnpj="client.cnpj"
        :foundationdate="client.foundationdate"
        :phone="client.phone"
        @update="updateData"
      />
      <password-step
        v-if="steps.current === 3"
        :password="client.password"
        @update="updateData"
      />
      <pf-review-step
        v-if="steps.current === 4 && client.type === 'pessoaFisica'"
        :email="client.email"
        :password="client.password"
        :name="client.name"
        :cpf="client.cpf"
        :birthdate="client.birthdate"
        :phone="client.phone"
        @update="updateData"
      />
      <pj-review-step
        v-if="steps.current === 4 && client.type === 'pessoaJuridica'"
        :email="client.email"
        :password="client.password"
        :name="client.name"
        :cnpj="client.cnpj"
        :foundationdate="client.foundationdate"
        :phone="client.phone"
        @update="updateData"
      />
      <div class="button-section" id="form-section-buttons">
        <button
          class="form-button button-previous"
          v-if="steps.current !== 1"
          @click.prevent="prev()"
        >
          Voltar
        </button>
        <button v-if="steps.current !== 4" class="form-button" type="submit">
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
  import EmailStep from '../components/email-step.vue'
  import PasswordStep from '../components/password-step.vue'
  import PjDetailsStep from '../components/pj-details-step.vue'
  import PfDetailsStep from '../components/pf-details-step.vue'
  import PfReviewStep from '../components/pf-review-step.vue'
  import PjReviewStep from '../components/pj-review-step.vue'

  import { ref } from 'vue'

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

  const steps = ref({
    total: 4,
    current: 1,
    start: 'emailStep',
    pf: {},
    pj: {},
  })

  const prev = () => {
    steps.value.current = steps.value.current - 1
  }

  const next = () => {
    steps.value.current = steps.value.current + 1
  }

  const updateData = (event) => {
    client.value = { ...client.value, ...event }
  }

  const submit = async () => {
    const url = 'http://localhost:3000/registration'
    let res = ''
    try {
      res = await fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        body: JSON.stringify(client.value),
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (err) {
      console.log(err)
    }
    console.log(res.json())
  }
</script>

<style>
  @import '../styles/register-client.css';
</style>
