<template>

    <div class="menu">
        <ul>
            <router-link to="/index" tag="li">导航一</router-link>
            <router-link to="/about" tag="li">导航二</router-link>
            <router-link to="/service" tag="li">导航三</router-link>
            <router-link to="/product" tag="li">导航四</router-link>
            <router-link to="/questions" tag="li">导航四</router-link>
            <router-link to="/solution" tag="li">导航四</router-link>
            <router-link to="/contact" tag="li">导航五</router-link>
        </ul>
    </div>

</template>


<script>

export default {
    name: "app-menu",
    data () {
        return {
        }
    }
}
</script>

<style>

.menu {
}
.menu ul {
    display: block;
    line-height: 62px;
    float: right;
    margin-right: 4%;
    
}
.menu ul li {
    position:relative;
    top: 1px;
    font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size:15px;
    font-weight:400;
    margin-top: -1px;
    color:#333;
    float: left;
    text-align: center;
    cursor:pointer;
    width: 100px;
    border-bottom: 2px solid transparent;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.menu .router-link-active,
.menu ul li:hover {
  color:#108ee9;
  border-bottom: 2px solid #108ee9;
  margin-top: -1px;
}

</style>
