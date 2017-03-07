<template v-if="style">

    <div
        id="banner"
        class="uk-vertical-align"
        v-bind:style="style">
        <div class="uk-container uk-vertical-align-middle">
            <slot></slot>
        </div>
    </div>

</template>


<script>

export default {
    name: 'banner',
    props: {
        style:String
    },
    data () {
        return {

        }
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
