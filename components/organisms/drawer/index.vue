<template>
  <div class="drawer w-full h-full min-h-screen overflow-auto">
    <div class="px-8 py-5 mb-5">
      <img class="w-full" src="/images/FindFIT_Logo.svg" alt="" />
    </div>
    <Nav :items="mainNavs" />
  </div>
</template>

<script>
import Nav from '@/components/molecules/nav'

export default {
  name: 'DefaultDrawer',

  components: { Nav },

  data() {
    return {
      mainNavs: [
        { label: 'Trainer', icon: 'dumbbell', to: { name: 'trainer' } },
        { label: 'Member', icon: 'user', to: { name: 'member' } },
        {
          label: 'Booking Transaction',
          icon: 'file-user',
          to: { name: 'booking' },
        },
        {
          label: 'Message to Users',
          icon: 'comments-alt',
          to: { name: 'message' },
        },
        { label: 'Promo code', icon: 'tag', to: { name: 'promotion' } },
        { label: 'Points', icon: 'star-half-alt', to: { name: 'point' } },
      ],
    }
  },
}
</script>

<style scoped>
.drawer {
  background-color: var(--main-bg-color);
}
</style>
