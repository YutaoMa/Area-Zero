module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
  }
}
