<template>

	<div class="template-wrapper" id="template-wrapper-service">
	    <div class="uk-container uk-container-center uk-text-center">

	        <h1>产品与服务</h1>

	        <div class="uk-grid" data-uk-grid-margin="">
                <div v-for="(item, index) in resourceData" class="uk-width-medium-1-3">
                    <div class="uk-panel">
                        <img class="tm-image-pull" :src="item.imageUrl" :alt="item.title" width="200" height="140">
                        <h2 class="uk-margin-top-remove">{{ item.title }}</h2>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
	        </div>

	    </div>
	</div>

</template>


<script>
const resourceData = [
	{
		title: '一站式业务接入',
		imageUrl: 'http://www.getuikit.net/docs/images/icon_less.svg',
		desc: 'UIkit 基于 LESS 开发，代码结构清晰简单，易于扩展和维护。'
	},
	{
		title: '一站式事中风险监控',
		imageUrl: 'http://www.getuikit.net/docs/images/icon_components.svg',
		desc: '体积小、反应灵敏的响应式组件，使用一致的、无冲突的命名规则。'
	},
	{
		title: '一站式数据运营',
		imageUrl: 'http://www.getuikit.net/docs/images/icon_themes.svg',
		desc: '可根据 UIKit 基本的风格及样式，轻松地自定义创建出自己喜欢的主题样式。'
	}
]

export default {
	name: 'service',
	data () {
		return {
            resourceData: resourceData
		}
	}

}

</script>


<style>
#template-wrapper-service{
	background: #3dc0f1;
	padding:20px 0;
}
</style>
