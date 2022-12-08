<script>
import TheHeader from './components/TheHeader.vue'
import FiltersBanner from './components/FiltersBanner.vue'
import CardList from './components/CardList.vue'
import SingleCard from './components/SingleCard.vue'
import {store} from '../src/store'



export default{
  components: {TheHeader, FiltersBanner, CardList, SingleCard},
  data(){
    return{
      store

    }
  }

}
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <div class="all-container">
      <div class="container pt-5">
        <FiltersBanner></FiltersBanner>
  
        <CardList></CardList>
    
      </div>

    </div>

  </div>
</template>

<style lang="scss">
// @use './styles/general.scss' as *;

// .all-container{
//   width: 1120px;
//   margin: auto;
// }


</style>
