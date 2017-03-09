<template>

    <div class="uk-slidenav-position" data-uk-slideshow="{autoplay:true}">
        <ul class="uk-slideshow">
            <li v-for="(item,index) in record">
                <img :src="item.imageUrl" width="980" height="300" :alt="item.label">
            </li>
        </ul>
        <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
        <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
        <ul class="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-text-center">
            <li v-for="(item,index) in record" :data-uk-slideshow-item="index"><a href=""></a></li>
        </ul>
    </div>

</template>



<script>

export default {
	name: 'slider',
	data () {
		return {
            record: []
		}
	},
    created () {
        console.log("created slider")
        this.$store.dispatch('getSlider',{}).then((res)=>{
            this.record = {...this.record, ...res}
        })
    },
    mounted () {
        console.log("mounted slider")
    },


}

</script>


<style>
.uk-slidenav-position {
    height:300px;
}
</style>
