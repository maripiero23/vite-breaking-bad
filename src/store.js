import {reactive} from "vue";
import axios from "axios"

export const store = reactive({
    cardList: [],
    /**
     * @property {number} count
     * @property {number} pages
     * @property {string} next 
     * @property {string} prev
     */
    infoPage: [],
    currentPage: 1,
    loading: "false",
    activeFilters: null
})

export function fetchCards(newPage){

    axios.get("https://rickandmortyapi.com/api/character", {
        params: {
            page: store.currentPage,
            search: store.activeFilters,  //non mi filtra comunque i nomi!!
        }
    })

    //Ascolto la risposta, ottengo quindi un codice 200
    .then(resp =>{

        // this.ajaxError= "",

        // console.log(resp.data.results);

        store.cardList = resp.data.results,
        store.infoPage = resp.data.info

    })
}