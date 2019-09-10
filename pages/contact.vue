<template>
  <form name="contact" method="POST" netlify>
    <a-list>
      <a-list-item>
        <a-input placeholder="Name" type="text" name="name">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-list-item>

      <a-list-item>
        <a-input placeholder="Email" type="email" name="email">
          <a-icon slot="prefix" type="mail" />
        </a-input>
      </a-list-item>

      <a-list-item>
        <a-textarea placeholder="Message" name="message" />
      </a-list-item>

      <a-list-item>
        <input type="hidden" name="form-name" value="contact">
        <a-button type="primary" html-type="submit">Send</a-button>
      </a-list-item>
    </a-list>
  </form>
</template>

<script>
export default {
  head () {
    return {
      title: 'Contact',
    };
  },
};
</script>

<style scoped>
form {
  max-width: 512px;
}
</style>
