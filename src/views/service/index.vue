<template>

<div class="service">
    百度一下

    <baidu-map></baidu-map>
</div>

</template>

<script>
import map from '@/components/content/map'
export default {
    data () {
        return {
        }
    },
    components: {
        baiduMap: map
    },
    created () {
        console.log("created service")

    },
    mounted () {
        console.log("mounted service")
    }
}
</script>

<style>
.service {

}
</style>
