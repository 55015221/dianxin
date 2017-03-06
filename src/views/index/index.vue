<template>

<div class="index">

    <slider></slider>


    <!--content-->
    <content0></content0>

    <!--content-->
    <service></service>


    <questions></questions>


</div>

</template>


<script>

import slider from '@/components/slider'


export default {
    data () {
        return {
        }
    },
    components: {
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
