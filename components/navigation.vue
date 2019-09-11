<template>
  <header>
    <a-menu class="menu" mode="horizontal" theme="dark">
      <a-menu-item v-for="page in pages" :key="page.path">
        <nuxt-link :to="page.path">
          <a-icon :type="page.icon" />
          {{ page.name }}
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </header>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        {
          name: 'Home',
          path: '/',
          icon: 'home',
        },
        {
          name: 'Dev',
          path: '/dev',
          icon: 'branches',
        },
        {
          name: 'Blog',
          path: '/blog',
          icon: 'book',
        },
        {
          name: 'Social',
          path: '/social',
          icon: 'instagram',
        },
        {
          name: 'Contact',
          path: '/contact',
          icon: 'mail',
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu {
  line-height: 64px;
}
</style>
