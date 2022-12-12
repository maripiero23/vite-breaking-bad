<template>


    <div class="form-floating mb-3" @keyup.enter="caercaPersonaggio">
        <input type="text" class="form-control"
          v-model="searchFilters.name">
        <label>Personaggio</label>
    </div>



    <div class="alert alert-info">
       

        Sono stati trovato {{store.infoPage.count}} elementi. Stai visualizzando la pagina 1 di {{store.infoPage.pages}}.

    </div>

    <div class="alert alert-warning">
        <h3>Statisiche</h3>

        <ul>
            <li><strong>Num.specie: </strong>{{speciesList.length}}</li>
            <ul>
                <li v-for="specie in speciesList">{{specie}}</li>
            </ul>
        </ul>

    </div>

    <button @click="onSearchClick">Cerca</button>

</template>

<script>
import {store, fetchCards} from "../store";
export default{
    data(){
        return{
            store,
            searchFilters:{
                name: ""
            },
        }
    },
    emits: ['search'],
    
    computed: {
        /**
         * Ritorna un array con la lista delle specie
         */
        speciesList() {
        const toReturn = [];

        this.store.cardList.forEach((card) =>{

            if(!toReturn.includes(card.species)){
                toReturn.push(card.species)
            }
        });

        return toReturn;

        }
    },

    methods: {
        onSearchClick(){
            //Invoco la funzione che viene usata amche in CardList
        fetchCards()
        },

        caercaPersonaggio(){
            this.$emit('search', this.searchFilters.name)
        }
    }

}
</script>