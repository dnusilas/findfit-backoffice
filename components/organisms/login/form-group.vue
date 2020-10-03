<template>
  <div class="max-w-md w-full">
    <div>
      <h2
        class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
      >
        Sign in
      </h2>
    </div>
    <!-- Form Login -->
    <FormLogin @fnError="onError" @fnSubmit="onSubmit" />
  </div>
</template>

<script>
import FormLogin from '@/components/molecules/form/login'

export default {
  name: 'LoginFormGroup',

  components: { FormLogin },

  methods: {
    onError() {
      // this.$emit('fnError')
      this.$toasted.show('Pleaser fill username and password', {
        type: 'error',
        duration: 3000,
      })
    },

    onSubmit(login) {
      this.$emit('fnSubmit', login)
    },
  },
}
</script>
