<template>
    <div class="about">
        <!--banner-->
        <banner :style="record.background">
            <br><br><br><br>
            <h1 class="uk-text-center">关于我们</h1>
        </banner>

        <!--content-->
        <div class="template-wrapper">
            <article class="uk-container uk-container-center main-raised">
                <div class="content">
                    <p v-for="content in record.content">{{ content }}</p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>

import banner from '@/components/content/banner'

export default {
    data () {
        return {
            record: []
        }
    },
    components: {
        banner: banner
    },
    created () {
        console.log("created about")
        this.$store.dispatch('getAbout',{}).then((res)=>{
            this.record = {...this.record, ...res}
        })
    },
    mounted () {
        console.log("mounted about")
        
    },
    methods:{
        
    }
}
</script>

<style>
.about {
    background:#E5E5E5;
}
.about p{
    margin-top:10px;
    text-indent:26px;
}
</style>
