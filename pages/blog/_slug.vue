<template>
  <div v-html="markdown" />
</template>

<script>
export default {
  head () {
    return {
      title: this.title,
    };
  },

  async asyncData ({ params, }) {
    const file = await import(`~/assets/${params.slug}.md`);
    const markdown = file.default;
    return {
      title: params.slug,
      markdown,
    };
  },
};
</script>
