<template>

	<div class="template-wrapper" id="template-wrapper-content0">
        <div class="content">
            <div class="imgWrapper" style="left: 0;" data-uk-scrollspy="{cls:'uk-animation-slide-left', repeat: true}">
                <span>
                    <img src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" width="100%"/>
                </span>
            </div>
            <div class="textWrapper" style="right: 0;" data-uk-scrollspy="{cls:'uk-animation-slide-right', repeat: true}">
                <h1>企业资源管理</h1>
                <p>
                    云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。
                </p>
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
	name: 'content0',
	data () {
		return {
            resourceData: resourceData
		}
	}

}

</script>


<style>

#template-wrapper-content0 {
	width: 100%;
    background: #fff;
    height: 100vh;
    border-color: #666;
    position: relative;
}
.template-wrapper{
    
}

#template-wrapper-content0 .content {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;
    position: relative;
}

#template-wrapper-content0 .imgWrapper {
    height: 100%;
    width: 40%;
    overflow: hidden;
    position: absolute;
}
#template-wrapper-content0 .imgWrapper span {
    display: inline-block;
    position: absolute;
    width: 40%;
    line-height: 80vh;
    margin: auto;
    top: 0;
    bottom: 0;
    right:10%
}
#template-wrapper-content0 .imgWrapper img {
    vertical-align: middle;
}

#template-wrapper-content0 .textWrapper {
    display: block;
    width: 55%;
    vertical-align: top;
    position: absolute;
    top: 20%;
    bottom: 0;
    margin: auto;
}
#template-wrapper-content0 .textWrapper p {
    margin-top: 20px;
}

</style>
