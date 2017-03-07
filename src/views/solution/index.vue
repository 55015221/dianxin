<template>

    <div id="solution">
        <!--banner-->
        <banner style="background-image: url(static/images/solution.jpg);height: 300px;position: relative;">
            <div class="uk-width-medium-2-3">
                <h2 class="uk-heading-large">解决方案</h2>

                <p class="uk-text-large">针对各行业业务特性，打造个性化行业解决方案，为用户提供一站式的产品与服务。包括新零售、新金融、新能源、新技术、大健康、大制造、大传媒等行业领域。</p>
            </div>
        </banner>

        <!--content-->
        <div class="template-wrapper" id="questions">
            <div class="uk-container uk-container-center">

                <div class="uk-text-center">
                    <h1 class="uk-heading-large">特点</h1>
                    <p class="uk-text-large">UIKit为您提供了全面的HTML、CSS及JS组件，<br class="uk-hidden-small"> 它们使用简单，容易定制和扩展。</p>
                    <div class="uk-grid" data-uk-grid-margin="">
                        <div class="uk-width-medium-1-4">
                            <div class="uk-panel">
                                <img class="tm-image-pull" src="docs/images/icon_less.svg" alt="LESS" width="200"
                                     height="140">

                                <h2 class="uk-margin-top-remove">LESS</h2>

                                <p>UIkit 基于 <a href="http://www.lesscss.net" target="_blank" rel="nofollow">LESS</a>
                                    开发，代码结构清晰简单，易于扩展和维护。</p>
                            </div>
                        </div>

                        <div class="uk-width-medium-1-4">
                            <div class="uk-panel">
                                <img class="tm-image-pull" src="docs/images/icon_components.svg" alt="Components"
                                     width="200" height="140">
                                <h2 class="uk-margin-top-remove">组件</h2>
                                <p>体积小、反应灵敏的响应式组件，使用一致的、无冲突的命名规则。</p>
                            </div>
                        </div>

                        <div class="uk-width-medium-1-4">
                            <div class="uk-panel">
                                <img class="tm-image-pull" src="docs/images/icon_themes.svg" alt="Themes" width="200"
                                     height="140">
                                <h2 class="uk-margin-top-remove">定制</h2>
                                <p>可根据 UIKit 基本的风格及样式，轻松地自定义创建出自己喜欢的主题样式。</p>
                            </div>
                        </div>

                        <div class="uk-width-medium-1-4">
                            <div class="uk-panel">
                                <img class="tm-image-pull" src="docs/images/icon_responsive.svg" alt="Responsive"
                                     width="200" height="140">
                                <h2 class="uk-margin-top-remove">响应式</h2>
                                <p>根据不同的屏幕分辨率与上网设备，UIKit 会自动做出响应，提供一致的体验。</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<script>
const data = [
    
]
import banner from '@/components/content/banner'
export default {
    name: 'solution',
    data () {
        return {
            data: data
        }
    },
    components: {
        banner: banner
    },
    created () {
        console.log("created questions")
    },
    mounted () {
        console.log("mounted questions")
    }

}



</script>


<style>
</style>
