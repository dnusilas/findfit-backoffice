<template>
  <div class="relative w-full h-full">
    <img
      class="cover-img relative z-10 w-full h-full object-cover opacity-25"
      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
      alt="Login lead image"
    />
    <div
      class="cover absolute top-0 left-0 w-full h-full flex justify-center items-center"
    ></div>
    <div
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20"
    >
      <img
        class="max-h-full"
        src="/images/FindFIT_Logo.svg"
        alt="FindFIT Logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginCover',
}
</script>

<style scoped>
.cover {
  background-color: var(--main-bg-color);
}

.cover-img {
  filter: grayscale(100%);
}
</style>
