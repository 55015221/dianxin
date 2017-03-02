<template>

<div class="contact">
    
    <content4></content4>
    
    <content9></content9>

    <content7></content7>

    <content8></content8>

</div>

</template>


<script>

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
        content4: content4,
        content9: content9,
        content7: content7,
        content8: content8
    },
    created () {
        console.log("created contact")
    },
    mounted () {
        console.log("mounted contact")
    }
}
</script>

<style>
.contact {
    
}
</style>
