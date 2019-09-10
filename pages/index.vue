<template>
  <div>
    <h1>Hello.</h1>
    <h2>This is YtMa.</h2>
    <a-carousel :dots="false" vertical autoplay>
      <h2>Full Stack Developer. 👨‍💻</h2>
      <h2>Gamer 🎮.</h2>
      <h2>Cat Lover 🐈.</h2>
      <h2>Photographer 📷.</h2>
    </a-carousel>
    <h2>Welcome.</h2>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home',
    };
  },
};
</script>
