<template>
  <ChangePasswordTemplate @fnSubmitChangePass="onSubmitChangePass" />
</template>

<script>
import ChangePasswordTemplate from '@/components/templates/auth/change-password'

export default {
  name: 'ChangePasswordPage',

  components: { ChangePasswordTemplate },

  methods: {
    async onSubmitChangePass(form) {
      const { data } = await this.$axios.post(
        'backoffice/auth/change_password',
        form
      )

      switch (data.response_code) {
        case 200:
          await this.$swal({
            icon: 'success',
            title: 'Success',
            text: 'Please re-login',
            timer: 4000,
          })
          this.$router.push('/logout')
          break

        default:
          this.$swal({
            icon: 'error',
            title: 'Error',
            text: data.response_msg,
            timer: 4000,
          })
          break
      }
    },
  },
}
</script>
