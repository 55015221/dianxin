<template>

    <div class="product">

        <!--banner-->
        <banner style="height:200px;background:#e0f3f6;"></banner>


    </div>

</template>


<script>

import banner from '@/components/content/banner'
export default {
    data () {
        return {
        }
    },
    components: {
        banner: banner
    },
    created () {
        console.log("created product")
    },
    mounted () {
        console.log("mounted product")
    }
}
</script>

<style>
.product {
    
}
</style>
