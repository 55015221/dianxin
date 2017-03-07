<template v-if="data">

    <div class="uk-grid">
        <div class="uk-width-medium-1-3" v-for="(item, index) in data">
            <div class="uk-panel uk-panel-box">
                <div class="uk-panel-teaser">
                    <img :src="item.imageUrl" width="800" height="280" alt="">
                </div>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>

</template>


<script>

const data = [
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]
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
