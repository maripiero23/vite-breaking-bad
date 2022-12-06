<template>
    <div class="row row-cols-1 row-cols-md-5 g-4">

        <div class="col" v-for="(card, index) in cardList" key="index">
            <CardList :personaggio="card"></CardList>

        </div>

     </div>
        
    

    <div class="alert alert-dangert" v-if="ajaxError">{{ajaxError}}</div>

</template>
    
    <script>
    import axios from "axios";
    import SingleCard from "./SingleCard.vue"
    export default{
        components: [SingleCard],
        data(){
            return{
                cardList: [],
                ajaxError: "",
            }
        },

        created(){
            //Faccio la chiamata
            axios.get("https://rickandmortyapi.com/api/character")
            //Ascolto la risposta, ottengo quindi un codice 200
            .then(resp =>{

                this.ajaxError= "",

                // console.log(resp.data.results);
                this.cardList = resp.data.results

            })
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