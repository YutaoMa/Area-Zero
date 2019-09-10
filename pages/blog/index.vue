<template>
  <a-list
    :data-source="catalog"
    :grid="{ gutter: 16, sm: 1, md: 4 }"
  >
    <a-list-item slot="renderItem" slot-scope="post">
      <a-card class="card" :title="post.title" hoverable @click="goToPost(post.slug)">
        <p>{{ post.description }}</p>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
import catalog from '~/assets/catalog.js';

export default {
  head () {
    return {
      title: 'Blog',
    };
  },

  data () {
    return {
      catalog,
    };
  },

  methods: {
    goToPost (slug) {
      this.$router.push(`/blog/${slug}`);
    },
  },
};
</script>
