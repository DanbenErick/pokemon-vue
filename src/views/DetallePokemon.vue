<template>
  <Fragment>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="fw-bold display-5">Retrato</h2>
          <img :src="pokemon.imagen" style="width: 80%">
        </div>
        <div class="col">
          <h2 class="fw-bold display-5">Estadistica</h2>
          <ul>
            <li><b>ID: </b> {{ pokemon.id }}</li>
            <li><b>Nombre: </b> {{ pokemon.nombre }}</li>
            <li><b>Evolucion: </b> {{ pokemon.evolucion || 'No encontrado' }}</li>
            <li><b>Altura: </b> {{ pokemon.altura }}</li>
            <li><b>Tipo: </b> {{ pokemon.tipo }}</li>
            <li><b>Abilidades: </b>
              <ul>
                <li :key="index" v-for="(item, index) in pokemon.habilidades">
                  {{ item.ability.name }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button
          class="d-fluid btn btn-primary my-4"
          @click="regresar"
          >Regresar</button>
      </div>
    </div>
  </Fragment>
</template>
<script>
import axios from 'axios'
export default {
  name: 'DetallePokemon',
  data() {
    return {
      pokemon: {
        id: '',
        altura: '',
        show: false,
        nombre: '',
        imagen: '',
        evoluacion: '',
        tipo: '',
        habilidades: []
      },
    }
  },
  methods: {
    regresar() {
      this.$router.go(-1)
    }
  },
  created() {
    const api = 'https://pokeapi.co/api/v2/pokemon/'
        axios.get(api + this.$route.params.id_or_name)
        .then(({data: resp}) => {
          this.pokemon.id = resp.id
          this.pokemon.altura = resp.height
          this.pokemon.show = true
          this.pokemon.nombre = resp.name
          this.pokemon.imagen = resp.sprites.other['official-artwork'].front_default,
          this.pokemon.evoluacion = '',
          this.pokemon.habilidades = resp.abilities
          this.pokemon.tipo = resp.types[0].type.name
        })


  },
}
</script>