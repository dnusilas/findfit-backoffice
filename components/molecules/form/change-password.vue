<template>
  <ValidationObserver
    ref="validator"
    tag="form"
    class="mt-8"
    @submit.prevent="onSubmit"
  >
    <ValidationProvider
      v-slot="{ errors }"
      rules="required"
      name="Current password"
    >
      <InputText
        v-model="form.oldPassword"
        type="password"
        label="Current password"
        placeholder="Old Password"
        :error="errors[0]"
      />
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      rules="required"
      name="New password"
      vid="confirm"
    >
      <InputText
        v-model="form.newPassword"
        type="password"
        label="New password"
        placeholder="New Password"
        :error="errors[0]"
      />
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      rules="required|confirmed:confirm"
      name="Re-new password"
    >
      <InputText
        v-model="form.reNewPassword"
        type="password"
        label="Re-new password"
        placeholder="Re-new Password"
        :error="errors[0]"
      />
    </ValidationProvider>

    <div class="mt-10">
      <Btn label="Confirm" type="submit" @click="onSubmit" />
    </div>
  </ValidationObserver>
</template>

<script>
import Btn from '@/components/atoms/btn'
import InputText from '@/components/atoms/input/text'

export default {
  components: { Btn, InputText },

  data() {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        reNewPassword: '',
      },
    }
  },

  methods: {
    async onSubmit() {
      const isFormValid = await this.$refs.validator.validate()

      if (!isFormValid) return this.$emit('fnError')

      this.$emit('fnSubmit', {
        password_old: this.form.oldPassword,
        password_new: this.form.newPassword,
      })
    },
  },
}
</script>
