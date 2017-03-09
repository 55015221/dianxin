<template>

    <div id="product">

        <!--banner-->
        <banner style="height:200px;background:#e0f3f6;"></banner>

        <!--content-->
        <div class="template-wrapper">
            <div class="uk-text-center">
                <h1 class="uk-heading-large">产品与服务</h1>
                <p class="uk-text-large">
                    集成报价单、订单、购销、交付、往来债权债务、工资、报销模块等
                    <br class="uk-hidden-small"> 
                    提供用户认证以及信用指数据评估等服务
                    提升往来管理效率，提高往来管理效果，为客户整体业务发展提供支持
                </p>
            </div>
            <div class="uk-container uk-container-center">
                <panel :data="record"></panel>
            </div>
        </div>        
    </div>

</template>


<script>

import banner from '@/components/content/banner'
import panel from '@/components/content/panel'

export default {
    data () {
        return {
            record: []
        }
    },
    components: {
        panel: panel,
        banner: banner
    },
    created () {
        console.log("created product")
        this.$store.dispatch('getProduct', {}).then((res) => {
            this.record = {...this.record, ...res}
        })
    },
    mounted () {
        console.log("mounted product")
    }
}
</script>

<style>
#product {
    
}
#product .uk-text-center {
    padding:60px 0px;
    color: #f8f8f8;
    background: #5dcadd;
    margin-bottom: 60px;
}
#product .uk-text-center h1 {
    color: #f8f8f8;
    font-size:30px;
}
#product .uk-text-large{
}
</style>
