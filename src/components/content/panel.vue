<template v-if="data">
    
    <div class="uk-grid" data-uk-grid-margin 
        data-uk-scrollspy="{cls:'uk-animation-slide-right uk-invisible', target:'> div > .uk-panel', delay:300}"
    >
        <div class="uk-width-medium-1-3" v-for="(item, index) in data">
            <div class="uk-panel uk-panel-box uk-invisible">
                <div class="uk-panel-teaser">
                    <img :src="item.imageUrl" width="800" height="280" alt="">
                </div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>

</template>


<script>

export default {
    name: 'panel',
    props: {
        data: Array
    },
    data () {
        return {
        }
    },
    created () {
        console.log("created panel")
    },
    mounted () {
        console.log("mounted panel")
    }

}

</script>


<style>

#banner {
    color:#f8f8f8;
    font-size:18px;
    display: block;
}
#banner h2{
    font-size:30px;
    color:#f8f8f8;
}

</style>
