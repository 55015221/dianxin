<template>

<div class="contact">
    
    <content1></content1>

</div>

</template>


<script>
import content1 from '@/components/content/content1'
export default {
    data () {
        return {
        }
    },
    components: {
        content1: content1
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
