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
    loading: "false"
})

export function fetchCards(){
    axios.get("https://rickandmortyapi.com/api/character")

    //Ascolto la risposta, ottengo quindi un codice 200
    .then(resp =>{

        // this.ajaxError= "",

        // console.log(resp.data.results);

        store.cardList = resp.data.results,
        store.infoPage = resp.data.info

    })
}