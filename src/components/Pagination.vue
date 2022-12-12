<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" @click="onPrevClick">Previous</a></li>
                <li class="page-item active"><a class="page-link" href="#">{{currentPage}}</a></li>
                <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                <li class="page-item"><a class="page-link" href="#" @click="onNextClick">Next</a></li>
            </ul>
        </nav>
    </div>

</template>

<script>
export default{
    props: {
        currentPage: {
            type: Number,
            default: 1
        }

    },

    data(){
        return{
            
        }
    },
    methods: {
        onPrevClick (){
            this.$emit("pageChange", this.currentPage - 1)
        },

        onNextClick (){
            this.$emit("pageChange", this.currentPage + 1)


        }
    }

};
</script>