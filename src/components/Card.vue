<template>
  <div class="card" style="width: 18rem;">
    <img :src="imagen" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ nombre }}</h5>x
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    props: ['nombre', 'imagen']
  }
</script>