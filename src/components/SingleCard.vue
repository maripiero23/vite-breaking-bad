<template>
    <div class="card">
      <img :src="personaggio.image" class="card-img-top" :alt="('immagine di' + personaggio.name)">
      <div class="card-body">
        <h5 class="card-title">{{personaggio.name}}</h5>
        <!-- <p class="card-text"></p> -->
        <a href="#" class="btn btn-primary">Vai</a>
      </div>
    </div>
    
</template>
    
<script>
export default{
    //passo i dati attraverso un props
    props: {
        // Oggetto che rappresenta un singolo personaggio

        personaggio:{
            type: Object,
            required: true
        }
    }
}
</script>
    
<style lang="scss" scoped>
// @use '../styles/partials/variables' as *;

// .card{
//   background-color: rgba(46,58,70,255);
// }
    
</style>