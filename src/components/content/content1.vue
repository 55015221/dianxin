<template>
	<div class="template-wrapper" id="content1">
        <div class="uk-container uk-container-center">
            <div class="uk-grid uk-flex-middle">
                <div class="uk-width-1-2" data-aos="fade-right" data-aos-offset="200">
                    <img width="300" height="280" src="static/images/placeholder_400x250.svg" alt="">
                </div>
                <div class="uk-width-1-2" data-aos="fade-left" data-aos-offset="200">
                    <h1>企业资源管理</h1>
                    <p>
                        云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

const resourceData = [

]

export default {
	name: 'content1',
	data () {
		return {
            resourceData: resourceData
		}
	},
	created () {
        AOS.init({});
    },
    mounted () {
    }

}

</script>


<style>
#content1 {
    padding: 30px auto;
}

</style>
