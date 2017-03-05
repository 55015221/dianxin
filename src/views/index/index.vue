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
import content0 from '@/components/content0'
import service from '@/components/service'
import questions from '@/components/questions'


export default {
    data () {
        return {
        }
    },
    components: {
        slider: slider,
        content0: content0,
        questions: questions,
        service: service
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
