<template>

<div class="contact">
    
    <!--banner-->
    <banner style="height:200px;background:#3dc0f1;"></banner>

    <!--<panel :data="panelData"></panel>-->

    <!--content-->
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
                                    <strong>深圳市典信科技有限公司</strong>
                                    <br>地址：深圳市龙龙岗区大运软件小镇54栋306
                                </p>
                                <p>
                                    服务邮件：<a href="mailto:service@basicredit.com">service@basicredit.com</a><br>
                                    合作邮件：<a href="mailto:leoli@basicredit.com">leoli@basicredit.com</a><br>
                                    电话：400 775 1007<br>
                                    手机：13510921077<br>
                                    QQ：2729343139<br>
                                </p>
                            </div>
                        </div>
                        <div class="uk-width-medium-1-1">
                            <img src="static/images/contact.png">
                        </div>
                </div>   
            </article>    
            
        </div>
    </div>

</div>

</template>


<script>
import banner from '@/components/content/banner'
import panel from '@/components/content/panel'

const panelData = [
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]

export default {
    data () {
        return {
            panelData: panelData
        }
    },
    components: {
        panel: panel,
        banner: banner
    },
    created () {
        console.log("created contact")
    },
    mounted () {
        console.log("mounted contact")
    }
}
</script>

<style>
.contact {
    
}
</style>
