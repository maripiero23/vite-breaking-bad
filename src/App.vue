<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import CardList from './components/CardList.vue'
import SingleCard from './components/SingleCard.vue'



export default{
  components: {TheHeader, TheMain, CardList, SingleCard},
  data(){
    return{

    }
  }

}
</script>

<template>
  <CardList></CardList>
  <TheHeader></TheHeader>
  <TheMain></TheMain>
</template>

<style lang="scss">
// @use './styles/general.scss' as *;


</style>
