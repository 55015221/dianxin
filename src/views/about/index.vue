<template>

<div class="about">
    <h2>about</h2>
    <ul>
        <li v-for="(item, index) in markets">
            <img :src="item.pic">
            <p>{{ item.title }}</p>
            <p>{{ item.mt }}</p>
        </li>
    </ul>
</div>

</template>


<script>
export default {
    data () {
        return {
            advertisement: '',
            markets: [],
            goods: [],
        }
    },
    created () {
        console.log("created")
    },
    mounted () {
        console.log("mounted")
        this.fetchData()
        console.log(this.advertisement)
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods:{
        //  请求全部数据
        fetchData () {
            console.log("fetchData")
            const $self = this
            $self.$http.get(window.configPath + 'home.json?'+ Math.random()).then(response => {
                if (response.body.code === 0) {
                  this.advertisement = response.body.data.advertisement
                  $self.markets = response.body.data.markets
                  $self.goods = response.body.data.goods
                  console.log($self.$parent.loading)
                  $self.$parent.loading = false

                }
            }, response => {
                console.log('请求错误！')
            })
        }
    }
}
</script>

<style>
.about {
    border:1px solid red;
    background:#00838F;
    height:100%;
}
</style>
