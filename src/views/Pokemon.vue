<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <h1 class="fw-bold display-5">Pokemon</h1>
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
      <div
        class="col-lg-8 col-sm-12"
        v-show="pokemon.show == true"
      >
        <h2 class="fw-bold display-5">Resultado</h2>
        <Card
          :nombre="pokemon.nombre"
          :imagen="pokemon.imagen"
          @click.native="irDetalle(pokemon.nombre)"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '../components/Card.vue'
  import axios from 'axios'
  // import router from 'vue-router'
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
      buscarPokemon (nombre) {
        const api = 'https://pokeapi.co/api/v2/pokemon/'
        axios.get(api + nombre)
        .then(({data: resp}) => {
          this.pokemon.show = true
          this.pokemon.nombre = resp.name
          this.pokemon.imagen = resp.sprites.front_default
        })
      },
      irDetalle(nombre) {
        const obj = {
          name:'DetallePokemon',
          path: '/detalles/'+ nombre,
          params: {
            id_or_name: nombre
          }
        }
        this.$router.push(obj)
        console.log("objeto", obj)
      }
    },
    components: {
      Card
    }
  }
</script>
<style scoped>
  .card:hover {
    cursor: pointer;
  }
</style>