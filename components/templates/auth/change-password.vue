<template>
  <Container>
    <h3 class="font-bold text-xl">Change Password</h3>
    <div class="w-1/3">
      <FormChangePassword @fnSubmit="onSubmitChangePass" />
    </div>
  </Container>
</template>

<script>
import Container from '@/components/atoms/container'
import FormChangePassword from '@/components/molecules/form/change-password'

export default {
  name: 'ChangePasswordTemplate',

  components: { Container, FormChangePassword },

  methods: {
    onSubmitChangePass(form) {
      this.$emit('fnSubmitChangePass', form)
    },
  },
}
</script>
