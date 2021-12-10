<template>
  <div id="app">
     <h1>Estos son algunos productos: </h1>
     <div class="d-flex mt-5 justify-content-center">
        <ProductCard
          v-for="card in cards"
          :key="card"
          :title="card.title"
          :price="card.price"
          :image="card.image"
          :description="card.description"
        ></ProductCard>
     </div>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue'

export default {
  name: 'App',
  components: {
    ProductCard
  },
  data () {
    return {
       cards: [
         {
           title: "Smart TV",
           description: "Una tele familiar",
           price: 40000,
           image: {
             src: "https://http2.mlstatic.com/D_NQ_NP_682817-MLA47690303593_092021-O.webp",
             alt: "Smart TV foto"
           } 
         },
         {
           title: "Moto G30",
           description: "Un alto celu",
           price: 25000,
           image: {
             src: "https://www.naldo.com.ar/medias/405422.jpg-515Wx515H?context=bWFzdGVyfHJvb3R8MTYxMzN8aW1hZ2UvanBlZ3xoNzAvaGEzLzk1ODgwNzEwMzkwMDYuanBnfGM2NWYwMzRhMzI0NzU0NWEwYjEwNjhjNDEwM2FlMjFmNGEzOTkzNWVhNzc0NDZhNmI0ZDNkMmJhNjZiNGI4YTY",
             alt: "Moto630 Foto"
           }
         }  
       ] 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
