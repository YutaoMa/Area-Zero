<template>
  <a-list
    :data-source="posts"
    :loading="loading"
    :grid="{ gutter: 16, sm: 1, md: 2 }"
  >
    <a-list-item slot="renderItem" slot-scope="post">
      <a-card>
        <a-carousel slot="cover" autoplay>
          <div v-for="(image, index) in post.images" :key="index">
            <img
              :src="image.url"
              :width="image.width"
              :height="image.height"
            >
          </div>
        </a-carousel>
        <a-card-meta>
          <p slot="description">{{ post.caption }}</p>
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
