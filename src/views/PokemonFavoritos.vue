<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <h1>Pokemon</h1>
        <div class="mb-3">
          <label for="form-label">Nombre </label>
          <input
            type="text"
            class="form-control"
            v-model="nombrePokemon"
            @keyup.enter="traerPokemon(nombrePokemon)"
          >
        </div>
        <div class="mb-3 d-grid">
          <button
            class="btn btn-primary"
            @click="traerPokemon(nombrePokemon)"
          >Buscar</button>
        </div>
      </div>
      <div class="col-8">
        <h2>Lista de Pokemones</h2>
        <div class="row gap-2 scroll">
          <div
            class="card border-primary"
            v-for="(pokemon, index) in pokemones"
            style="width: 17rem;"
            :key="index"
          >
            <img :src="pokemon.imagen" class="card-img-top" alt="">
            <div class="card-footer">
              <small class="text-muted">{{ pokemon.nombre }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'PokemonFavoritos',
    data() {
      return {
        nombrePokemon: '',
        pokemones: [],
      }
    },
    methods: {
      traerPokemon(nombre) {
        const api = 'https://pokeapi.co/api/v2/pokemon/'
        axios.get(api + nombre)
        .then(({data: resp}) => {
          // this.pokemon.show = true
          const respuesta = {
            nombre: resp.name,
            imagen: resp.sprites.front_default,
          }
          this.pokemones.push(respuesta)
        })
      },
    }
  }
</script>

<style scoped>
  .scroll {
    max-height: 80vh;
    overflow-y: scroll;
  }
</style>