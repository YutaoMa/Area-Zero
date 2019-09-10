<template>
  <a-list
    :data-source="repos"
    :loading="loading"
    :grid="{ gutter: 16, sm: 1, md: 4 }"
  >
    <a-list-item slot="renderItem" slot-scope="repo">
      <a-card :title="repo.name">
        <a slot="extra" :href="repo.url">
          <a-icon type="link" />
        </a>
        <p>{{ repo.description }}</p>
        <a-tag>{{ repo.language }}</a-tag>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  head () {
    return {
      title: 'Dev',
    };
  },

  data () {
    return {
      repos: [],
      loading: true,
    };
  },

  async created () {
    await this.getRepos();
  },

  methods: {
    async getRepos () {
      try {
        const repos = await this.$axios.$get('/.netlify/functions/github');
        this.repos = repos;
      } catch (error) {
        this.$message.error(error.message);
      }
      this.loading = false;
    },
  },
};
</script>
