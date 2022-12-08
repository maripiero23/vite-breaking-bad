<template>
    <div class="alert alert-info">
       

        Sono stati trovato {{store.infoPage.count}} elementi. Stai visualizzando la pagina Y di {{store.infoPage.pages}}.

    </div>

    <button @click="onSearchClick">Cerca</button>

</template>

<script>
import {store, fetchCards} from "../store";
export default{
    data(){
        return{
            store
        }
    },
    methods: {
        onSearchClick(){
            //Invoco la funzione che viene usata amche in CardList
        fetchCards()


        }
    }

}
</script>