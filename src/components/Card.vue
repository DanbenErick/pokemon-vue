<template>
  <div class="card shadow-sm body-rounded" style="width: 18rem;">
    <img :src="imagen" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="fw-bold text-center card-footer">{{ nombre }}</h5>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    props: ['nombre', 'imagen']
  }
</script>