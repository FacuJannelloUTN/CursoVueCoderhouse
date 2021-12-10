<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" style="max-height: 200px;" :src="image.src" :alt="image.alt">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-title">$ {{ price }}</h6>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    description: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>

</style>
