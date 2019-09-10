<template>
  <a-list
    :data-source="catalog"
    :grid="{ gutter: 16, sm: 1, md: 4 }"
  >
    <a-list-item slot="renderItem" slot-scope="post">
      <a-card>
        <a slot="title" :href="`/blog/${post.slug}`">{{ post.title }}</a>
        <p>{{ post.description }}</p>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
import catalog from '~/assets/catalog.js';

export default {
  data () {
    return {
      catalog,
    };
  },
};
</script>
