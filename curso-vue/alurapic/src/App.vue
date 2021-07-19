<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    
    <input @input="filtro = $event.target.value" type="search" class="filtro" placeholder="filtre por parte do título"/>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" 
          v-for="foto of fotosComFltro" :key="foto.titulo">
          <meu-painel :titulo="foto.titulo">
            <!-- foi adicionada a tag slot no painel, dessa for as imagens são exibidas -->
            <img class="imagem-responsiva" v-bind:key="foto.titulo" v-bind:src="foto.url" :alt="foto.titulo"/>
          </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from './components/shared/painel/Painel';

export default {
  components: {
    'meu-painel': Painel,
  },
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro: '',
    };
  },
  methods: {
    getTeste(foto){
      return foto.titulo
    }
  },

  computed: {
    fotosComFltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else {
        return this.fotos;
      }
    }
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((response) => response.json())
      .then((fotos) => (this.fotos = fotos))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
