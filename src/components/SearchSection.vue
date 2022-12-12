<template>
    <div class="form-floating mb-3">
        <input type="text" class="form-control"
          v-model="searchFilters.name"
          >
        <label>Personaggio</label>
    </div>

</template>

<script>
export default{
    data(){
        return{
            searchFilters:{
                name: ""
            },

        }
    }
}

</script>

<style lang="scss" scoped>
</style>