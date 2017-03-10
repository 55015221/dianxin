<template>

<div class="contact">
    
    <!--banner-->
    <banner :style="record.background">
        <br><br><br><br>
        <h1 class="uk-text-center">联系我们</h1>
    </banner>

    <div class="template-wrapper">
        <article class="uk-container uk-container-center main-raised">
            <div class="content">
                <p>
                    <h2>{{ record.company }}</h2>
                    <br>地址：{{ record.address }}
                </p>
                <p>
                    <br>服务邮件：<a :href="'mailto:'+ record.serviceEmail">{{ record.serviceEmail }}</a>
                    <br>合作邮件：<a :href="'mailto:'+ record.cooperateEmail">{{ record.cooperateEmail }}</a>
                    <br>电话：{{ record.telephone }}
                    <br>手机：{{ record.mobile }}
                    <br>QQ：{{ record.qq }}
                </p>
                <p class="uk-margin-large-top uk-text-center">
                    <baidu-map></baidu-map>
                    <!--<img :src="record.mapUrl">-->
                </p>
            </div>
        </article>
    </div>

</div>

</template>


<script>
import banner from '@/components/content/banner'
import map from '@/components/content/map'

import { mapState } from 'vuex'

export default {
    data () {
        return {
            record: {}
        }
    },
    components: {
        banner: banner,
        baiduMap: map
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
    background:#E5E5E5;
}
.contact h1{
    color: #fff;
}
.contact .content{

}
</style>
