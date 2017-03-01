<template>

    <header class="header">
        <div class="header-logo">
            <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"/>
        </div>
        <ul class="header-nav">
            <router-link to="/home" tag="li">导航一</router-link>
            <router-link to="/about" tag="li">导航二</router-link>
        </ul>
    </header>

</template>


<script>
export default {
    name: "app-header",
    data () {
        return {
        }
    }
}
</script>

<style>
.header {
    height:64px;
    line-height:18px;
    background:rgba(51,51,51,.95)
}
.header-logo {
    display: inline-block;
    position: absolute;
    left: 4%;
    width: 150px;
    line-height:64px;
    transform: translate(0px, 0px);
}
.header-logo img {
    vertical-align: middle;
}
.header-nav {
    margin-right: 4%;
}
.header-nav li {
    position:relative;
    top: 1px;
}
.header-nav .router-link-active {
  color:#34aff3;
  border-bottom: 2px solid #019bf0;
  margin-top: -1px;
}
.header-nav li:hover{
  color: #34aff3;
}
</style>
