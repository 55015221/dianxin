<template>

<div class="service">

    <content7></content7>

    <content9></content9>

        <button v-click>daddasdasd</button>

    <content3></content3>

    <div v-scroll>
        <content8></content8>
    </div>
</div>

</template>


<script>

import content7 from '@/views/content/content7'
import content8 from '@/views/content/content8'
import content3 from '@/views/content/content3'
import content9 from '@/views/content/content9'

export default {
    data () {
        return {
        }
    },
    components: {
        content7: content7,
        content3: content3,
        content9: content9,
        content8: content8
    },
    created () {
        console.log("created service")
        //this.$scrollSet()

    },
    mounted () {
        console.log("mounted service")
    },
    directives: {
        scroll: {
            componentUpdated: function (el) {
                console.log(1111)
                console.log(el)
            },
            update: function(el, binding, vnode, oldVnode){
                console.log(22222)
                console.log(el)
            },
            inserted: function (el) {
                // 聚焦元素
                el.focus()
                console.log(4444)
                console.log(el)
            }
        },
        click: {
            componentUpdated: function (el) {
                console.log(1111)
                console.log(el)
            },
            update: function(el, binding, vnode, oldVnode){
                console.log(22222)
                console.log(el)
            },
            inserted: function (el) {
                // 聚焦元素
                el.focus()
                console.log(3333)
                console.log(el)
            }
        }
    }
}
</script>

<style>
.service {

}
</style>
