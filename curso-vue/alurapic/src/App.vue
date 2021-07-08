<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos" 
          :key="foto.titulo">
            <img v-bind:key="foto.titulo" v-bind:src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'AluraPic',
      fotos: []
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(response => response.json())
      .then(fotos => this.fotos = fotos)
      .catch(error => console.log(error));
  },
}
</script>

<style>

</style>
