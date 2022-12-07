<template>
    <div class="alert alert-info">
        {{store.infoPage}}

        Sono stati trovato {{store.infoPage.count}} elementi. Stai visualizzando la pagina Y di {{store.infoPage.pages}}.

    </div>

    <button>Cerca</button>

</template>

<script>
import {store} from "../store";
export default{
    data(){
        return{
            store
        }
    }

}
</script>