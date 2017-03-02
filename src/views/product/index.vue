<template>

<div class="product">
    <h2>productId:{{ productId }}</h2>
</div>

</template>


<script>
export default {
    data () {
        return {
            productId: ''
        }
    },
    created () {
        console.log("created product")
        this.productId = this.$route.params.id
    },
    mounted () {
        console.log("mounted product")
    }
}
</script>

<style>
.product {
    
}
</style>
