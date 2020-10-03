<template>
  <ValidationObserver
    ref="validator"
    tag="form"
    class="mt-8"
    @submit.prevent="onSubmitLogin"
  >
    <div class="mb-3">
      <ValidationProvider v-slot="{ errors }" rules="required" name="Username">
        <InputText
          v-model="login.username"
          label="Username"
          aria-label="Username"
          name="username"
          placeholder="Username"
          :error="errors[0]"
        />
      </ValidationProvider>
    </div>
    <div class="mb-6">
      <ValidationProvider v-slot="{ errors }" rules="required" name="Password">
        <InputText
          v-model="login.password"
          label="Password"
          type="password"
          aria-label="Password"
          name="password"
          placeholder="Password"
          :error="errors[0]"
        />
      </ValidationProvider>
    </div>

    <div class="text-center">
      <Btn type="submit" label="LOGIN" @fnClick="onSubmitLogin" />
    </div>
  </ValidationObserver>
</template>

<script>
import Btn from '@/components/atoms/btn'
import InputText from '@/components/atoms/input/text'

export default {
  name: 'LoginForm',

  components: { Btn, InputText },

  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    async onSubmitLogin() {
      const isFormValid = await this.$refs.validator.validate()

      if (!isFormValid) return this.$emit('fnError')

      this.$emit('fnSubmit', this.login)
    },
  },
}
</script>
