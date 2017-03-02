<template>

<div class="index">
    <div id="content_2_0" class="content-template-wrapper content-half-wrapper content0-wrapper">
        <div class="content-template content0">
            <div class="content0-img" id="content_2_0-imgWrapper" style="transform: translate(0px, 0px); opacity: 1;">
                <span id="content_2_0-img"><img src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png"
                                                width="100%"/></span>
            </div>
            <div class="content0-text" id="content_2_0-textWrapper">
                <h1 id="content_2_0-title" class="" style="opacity: 1; visibility: visible; transform: translateX(0px);">
                    企业资源管理</h1>

                <p id="content_2_0-content" class="" style="opacity: 1; visibility: visible; transform: translateX(0px);">
                    云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。</p>
            </div>
        </div>
    </div>
</div>

</template>


<script>
export default {
    data () {
        return {
        }
    },
    created () {
        console.log("created index")
    },
    mounted () {
        console.log("mounted index")
    },
    methods:{

    }
}
</script>

<style>
.index {

}
.content-template-wrapper {
    width: 100%;
    background: #fff;
    height: 100vh;
    border-color: #666;
    position: relative;
}
.content-template-wrapper .content-template {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;
    position: relative;
}
.content0-text {
    display: block;
    width: 55%;
    height: 150px;
    vertical-align: top;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;
}
.content-template-wrapper .content-template h1 {
    font-size: 32px;
    font-weight: 400;
    color: #404040;
    line-height: 48px;
}
.content0-text p {
    margin-top: 20px;
}

.content0-img {
    height: 100%;
    width: 40%;
    overflow: hidden;
    position: absolute;
    left: 0;
}
.content0-img span {
    display: inline-block;
    position: absolute;
    width: 55%;
    right: 10%;
    line-height: 50vh;
    height: 50vh;
    margin: auto;
    top: 0;
    bottom: 0;
}
</style>
