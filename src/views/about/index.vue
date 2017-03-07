<template>
    <div id="about">
        <!--banner-->
        <banner style="height:200px;background:#3dc0f1;"></banner>

        <!--content-->
        <div class="template-wrapper">
            <div class="uk-container uk-container-center">
                <div class="uk-grid">
                    <div class="uk-width-medium-1-4">
                        <ul class="uk-nav uk-nav-side" data-uk-nav="">
                            <li><a href="">菜单项 </a></li>
                            <li><a href="">菜单项</a></li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="">菜单项</a></li>
                        </ul>
                    </div>

                    <div class="uk-width-medium-3-4">
                        <article class="uk-article">
                            <h2 class="uk-article-title">关于我们</h2>
                            <p class="uk-article-meta"></p>
                            <p class="uk-article-lead"></p>

                            <hr class="uk-article-divider">
                            <p v-for="content in data">{{ content }}</p>
                        </article>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

const data = [
"深圳市典信科技有限公司成立于2009年，‘典信’寓意为信用与信息管理的集大成者。公司自创始之初便专注于企业供应链、往来账款管理与信用管理方面的研究，致力于帮助企业调整供应链及往来业务处理方法、改善企业的往来管理状态、全面提升企业的信用管理能力，进而增加企业资源利用效率、促进与上下游企业及金融机构的信息沟通、降低企业成本、提高企业利润。",

"通过多年深入分析研究供应链、销售与分销、往来账款、信用管理的实际情况，结合先进的技术手段，公司创造性地提出往来业务电子化的理论，并开发出典信商务互联系统B-BUS（Basicredit Business United System）。该系统面向各类企业，以供应链、销售与分销及往来账款业务为基础，通过信息化与数据交换技术，实现现代商业主体各自独立运营和处理的背景下的互联互通，能够快速、成熟、全面地解决现有相关业务与管理领域中存在的诸多问题，为企业带来重大价值。同时，公司将通过持续的技术和理论创新、积极实践，不断促进商务及信用及信息化发展，造福社会大众。",

"典信公司在供应链管理、销售与分销、往来账款电子化、信用管理、供应链金融及商务信息交换方面有深入的研究，拥有行业内最顶尖的人才队伍。公司有信心、有能力帮助企业实现相关业务及管理的大幅提升，并让客户感受到我们的专业热心的服务，享受管理进步与技术进步带来的巨大利益。"
]


import banner from '@/components/content/banner'

export default {
    data () {
        return {
            data: data
        }
    },
    components: {
        banner: banner
    },
    created () {
        console.log("created about")
    },
    mounted () {
        console.log("mounted about")
        
    },
    methods:{
        
    }
}
</script>

<style>
#about {
    height:100%;
}
#about p{
    margin-top:10px;
    text-indent:26px;
}
</style>
