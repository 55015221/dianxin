<template v-if="style">

    <div class="banner"
        v-bind:style="style">
        <div class="uk-container uk-container-center">
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

</style>
