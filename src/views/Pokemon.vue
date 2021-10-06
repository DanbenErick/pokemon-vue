<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <h3>Pokemon</h3>
        <div class="mb-3">
          <label for="" class="form-label">Nombre del pokemon</label>
          <input
            type="text"
            class="form-control"
            v-model="nombrePokemon"
            @keyup.enter="buscarPokemon(nombrePokemon)"
          >
        </div>
        <div class="mb-3 d-grid">
          <button
            class="btn btn-primary btn-small"
            @click="buscarPokemon(nombrePokemon)"
          >Buscar</button>
        </div>
      </div>
      <div class="col-lg-8 col-sm-12">
        <Card
          V-if="pokemon.show"
          :nombre="pokemon.nombre"
          :imagen="pokemon.imagen"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '../components/Card.vue'
  import axios from 'axios'
  export default {
    name: 'Pokemon',
    data() {
      return {
        nombrePokemon: '',
        pokemon: {
          show: false,
          imagen: '',
          nombre: ''
        }
      }
    },
    methods: {
      buscarPokemon (nombre = "pikachu") {
        const api = 'https://pokeapi.co/api/v2/pokemon/'
        axios.get(api + nombre)
        .then(({data: resp}) => {
          this.pokemon.show = true
          this.pokemon.nombre = resp.name
          this.pokemon.imagen = resp.sprites.front_default
        })
      }
    },
    components: {
      Card
    }
  }
</script>
<style scoped>
  h3 {
    text-align: center;
  }
</style>