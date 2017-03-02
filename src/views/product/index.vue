<template>

<div class="product">
    
    <content3></content3>
    
    <content4></content4>
    
    <content9></content9>

    <content7></content7>

    <content8></content8>

</div>

</template>


<script>

import content3 from '@/views/content/content3'
import content4 from '@/views/content/content4'
import content9 from '@/views/content/content9'
import content7 from '@/views/content/content7'
import content8 from '@/views/content/content8'

export default {
    data () {
        return {
            productId: ''
        }
    },
    components: {
        content3: content3,
        content4: content4,
        content9: content9,
        content7: content7,
        content8: content8
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
