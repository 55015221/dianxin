<template>

    <div id="questions">
        <!--banner-->
        <banner style="background:#32384f;height:300px;"></banner>

        <!--content-->
        <div class="template-wrapper" >
            <div class="uk-container uk-container-center">

                <div class="uk-grid" data-uk-grid-margin="">
                    <div class="uk-width-medium-1-1" data-uk-scrollspy="{cls:'uk-animation-slide-right', repeat: false, delay:300}" v-for="(item, index) in record">

                            <h3 class="uk-panel-title">{{ item.title }}</h3>
                            <p>{{ item.content }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<script>

import banner from '@/components/content/banner'
export default {
    name: 'questions',
    data () {
        return {
            record: []
        }
    },
    components: {
        banner: banner
    },
    created () {
        console.log("created questions")
        this.$store.dispatch("getQuestions", {}).then((res) => {
            this.record = {...this.record, ...res}
        })
    },
    mounted () {
        console.log("mounted questions")
    }

}



</script>


<style>
</style>
