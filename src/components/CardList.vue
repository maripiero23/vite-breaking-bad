<template>

    <Pagination :currentPage="store.currentPage" class="pt-4" @pageChange="onPageChange"></Pagination>

    <div class="row row-cols-1 row-cols-md-5 g-4">

        <div class="col" v-for="(card, index) in store.cardList" key="index">
            <SingleCard :personaggio="card"></SingleCard>

        </div>

     </div>
        
    

    <!-- <div class="alert alert-dangert" v-if="ajaxError">{{ajaxError}}</div> -->

    <Pagination class="pt-4"></Pagination>


</template>
    
    <script>
    import axios from "axios";
    import SingleCard from "./SingleCard.vue"
    import {store, fetchCards} from "../store"
    import Pagination from "./Pagination.vue"

    export default{
        components: {SingleCard, Pagination},
        data(){
            return{
                // ajaxError: "",
                store
            }
        },
        methods: {
            onPageChange(newPage){
                this.store.currentPage = newPage

                fetchCards(newPage)
            }    
            },

        created(){
            //Invoco la funzione dallo store perchè la stessa verrà usata
            //da un altro componente
            fetchCards()


            //Faccio la chiamata
            // axios.get("https://rickandmortyapi.com/api/character")
            // //Ascolto la risposta, ottengo quindi un codice 200
            // .then(resp =>{

            //     this.ajaxError= "",

            //     // console.log(resp.data.results);

            //     this.store.cardList = resp.data.results,
            //     this.store.infoPage = resp.data.info

            // })
            // Caso in cui c'è un error nella chiamata ed il codice è diverso da 200
            //.catch((error) => {
            // error contiene un istanza di AxiosError dalla quale posso estrarre varie 
            // informazioni sull'errore avvenuto
            //console.log(error);

            //this.ajaxError ="A causa di un errore, l'operazione non è andata a buon fine"

            //});

        }
    }
    </script>
    
    <style lang="scss" scoped>
    // @use '../styles/partials/variables' as *;
    
    </style>