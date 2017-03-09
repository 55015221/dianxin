<template>

<div class="index">

    <slider></slider>


    <!--content-->
    <content1></content1>


</div>

</template>


<script>

import slider from './slider.vue'
import content1 from '@/components/content/content1'


export default {
    data () {
        return {
        }
    },
    components: {
        content1: content1,
        slider: slider
    },
    created () {
        console.log("created index")
    },
    mounted () {
        console.log("mounted index")
    },
    methods:{

    }
}
</script>

<style>
.index {

}

</style>
