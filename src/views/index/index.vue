<template>
    <div class="index">

        <!--slider-->
        <div class="uk-slidenav-position" data-uk-slideshow="{autoplay:true}">
            <ul class="uk-slideshow">
                <li v-for="(item,index) in slideList">
                    <img :src="item.imageUrl" width="980" height="200" :alt="item.label">
                </li>
            </ul>
            <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
            <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
            <ul class="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-text-center">
                <li v-for="(item,index) in slideList" :data-uk-slideshow-item="index"><a href=""></a></li>
            </ul>
        </div>

        <!--content-->
        <content1></content1>


    </div>
</template>


<script>

import content1 from '@/components/content/content1'


export default {
    data () {
        return {
            slideList: []
        }
    },
    components: {
        content1: content1
    },
    created () {
        console.log("created index")
        this.$store.dispatch('getSlider',{}).then((res)=>{
            this.slideList = {...this.slideList, ...res}
        })
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

.uk-slidenav-position,uk-slideshow,uk-slideshow >li {
    height:300px;
    overflow: hidden;
}

</style>
