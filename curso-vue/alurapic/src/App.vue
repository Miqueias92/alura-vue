<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img v-bind:src="foto.url" :alt="foto.titulo">
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'AluraPic',
      foto: {
        url: 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg',
        titulo: 'cachorro'
      }
    }
  },
}
</script>

<style>

</style>
