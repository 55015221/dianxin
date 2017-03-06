<template>

<div class="product">
    

</div>

</template>


<script>

export default {
    data () {
        return {
        }
    },
    components: {
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
