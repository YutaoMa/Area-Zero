<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <navigation />
    </a-layout-header>

    <a-layout-content class="content">
      <nuxt />
    </a-layout-content>

    <a-layout-footer>
      <appendix />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import navigation from '~/components/navigation.vue';
import appendix from '~/components/appendix.vue';

export default {
  components: {
    navigation,
    appendix,
  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.header {
  padding: 0;
}

.content {
  padding: 24px;
}
</style>
