<template>
  <div class="block lg:flex min-h-screen">
    <div class="w-full h-56 lg:min-h-screen lg:w-2/5 overflow-hidden">
      <LoginCover />
    </div>
    <div
      class="lg:flex-grow lg:min-h-screen flex items-center justify-center bg-gray-50 md:py-6 lg:py-12 px-4 sm:px-6 lg:px-8"
    >
      <LoginFormGroup @fnSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import LoginCover from '@/components/organisms/login/cover'
import LoginFormGroup from '@/components/organisms/login/form-group'

export default {
  name: 'LoginTemplate',

  components: { LoginCover, LoginFormGroup },

  methods: {
    onSubmit(login) {
      this.$emit('fnSubmit', login)
    },
  },
}
</script>
