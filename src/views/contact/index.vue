<template>

<div class="contact">
    
    <!--banner-->
    <banner :style="record.background"></banner>

    <div class="template-wrapper">
        <div class="uk-container uk-container-center">
                <article class="uk-article">
                    <h2 class="uk-article-title">联系我们</h2>
                    <p class="uk-article-meta"></p>
                    <p class="uk-article-lead"></p>

                    <hr class="uk-article-divider">
                    <div class="uk-grid" data-uk-grid-margin="">
                        <div class="uk-width-medium-1-3">
                            <div class="uk-panel uk-panel-space uk-panel-divider uk-panel-box uk-panel-box-secondary">
                                <p>
                                    <strong>{{ record.company }}</strong>
                                    <br>地址：{{ record.address }}
                                </p>
                                <p>
                                    <br>服务邮件：<a :href="'mailto:'+ record.serviceEmail">{{ record.serviceEmail }}</a>
                                    <br>合作邮件：<a :href="'mailto:'+ record.cooperateEmail">{{ record.cooperateEmail }}</a>
                                    <br>电话：{{ record.telephone }}
                                    <br>手机：{{ record.mobile }}
                                    <br>QQ：{{ record.qq }}
                                </p>
                            </div>
                        </div>
                        <div class="uk-width-medium-1-1">
                            <img :src="record.mapUrl">
                        </div>
                </div>
            </article>

        </div>
    </div>

</div>

</template>


<script>
import banner from '@/components/content/banner'

import { mapState } from 'vuex'

export default {
    data () {
        return {
            record: {}
        }
    },
    components: {
        banner: banner
    },
    created () {
        console.log("created contact")
        this.$store.dispatch('getContact',{}).then((res)=>{
            this.record = {...this.record, ...res}
        })
    },
    mounted () {
        console.log("mounted contact")
        return {
            ...mapState({
                record: state => state.module.record,
                loading: state => state.module.loading,
            })
        }
    }
}
</script>

<style>
.contact {
    
}
</style>
