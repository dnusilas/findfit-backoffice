<template>
  <div>
    <LoginTemplate @fnSubmit="onLogin" />
  </div>
</template>

<script>
import LoginTemplate from '@/components/templates/auth/login'

export default {
  name: 'LoginPage',

  auth: false,

  layout: 'auth',

  components: { LoginTemplate },

  methods: {
    async onLogin(login) {
      try {
        const { data } = await this.$auth.login({ data: login })
        switch (data.response_code) {
          case 200:
            this.$router.push('/')
            break
          case 3008:
            this.$toasted.show(data.response_msg, {
              type: 'error',
              duration: 5000,
            })
            break
        }
      } catch (error) {
        this.$toasted.show(error, {
          type: 'error',
          duration: 3000,
        })
      }
    },
  },
}
</script>
