<template>

    <div class="menu">
        <ul>
            <template v-for="(item, index) in menuList">
                <router-link :to="item.link" tag="li">{{ item.label }}</router-link>
            </template>
        </ul>
    </div>

</template>


<script>

import { mapState } from 'vuex'

export default {
    name: "app-menu",
    data () {
        return {
           menuList:{}
        }
    },
    created () {
        console.log("created menu")
        this.$store.dispatch('getMenuList',{}).then((res) => {
            this.menuList = {...this.menuList, ...res}
        })
    },
    computed () {
        console.log("computed menu")
        return {
            ...mapState({
                menuList: state => state.module.menuList,
                loading: state => state.module.loading,
            })
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
