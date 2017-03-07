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
                <panel :data="data"></panel>    
            </div>
        </div>        
    </div>

</template>


<script>

import banner from '@/components/content/banner'
import panel from '@/components/content/panel'

const data = [
    {
        title: '软件产品',
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: '典信公司向大中型机构用户提供典信内部往来业务系统，该系统部署在企业内部，可与企业内部的ERP、财务系统等进行对接，也可独立运行...'
    },
    {
        title: '云平台服务',
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: '面向个人用户、中小企业和其他没有部署内部专业系统的用户，提供在线的往来业务管理平台服务。让所有需要的用户，都能使用到专业的系统与服务。'
    },
    {
        title: '基础服务',
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: '向客户提供往来账款及相关业务的登记服务，并负责将登记的业务向相关的当事人系统进行转发。基于典信独特的业务地位，为向客户提供多种增值业务。'
    },
    {
        title: '增值服务',
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: '通过用户授权，用户自身的信用指数也可以向其他关系方提供，或是进行公开，以方便用户向合作方进行信用传递。'
    },
    {
        title: '咨询服务',
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: '中国的信用环境十分恶劣，如果应对这样的环境，如何在这一条件下制订与实施自己的信用策略，提高用户识别信用风险，提升自已的信用水平。'
    }
]


export default {
    data () {
        return {
            data: data
        }
    },
    components: {
        panel: panel,
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
