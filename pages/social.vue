<template>
  <a-list
    :data-source="posts"
    :loading="loading"
    :grid="{ gutter: 16, sm: 1, md: 4 }"
  >
    <a-list-item slot="renderItem" slot-scope="post">
      <a-carousel v-if="post.type === 'carousel'">
        <div v-for="(image, index) in post.images" :key="index">
          <img
            :src="image.url"
            :width="image.width"
            :height="image.height"
          >
        </div>
      </a-carousel>
      <a-card v-else>
        <img
          slot="cover"
          :src="post.image.url"
          :width="post.image.width"
          :height="post.image.height"
        >
        <a-card-meta :title="post.caption">
          <div slot="description">
            <a-tag v-for="(tag, index) in post.tags" :key="index">
              {{ tag }}
            </a-tag>
          </div>
        </a-card-meta>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  head () {
    return {
      title: 'Social',
    };
  },

  data () {
    return {
      posts: [],
      loading: true,
    };
  },

  async created () {
    await this.getPosts();
  },

  methods: {
    async getPosts () {
      try {
        const posts = await this.$axios.$get('/.netlify/functions/instagram');
        this.posts = posts;
      } catch (error) {
        this.$messsage.error(error.message);
      }
      this.loading = false;
    },
  },
};
</script>
