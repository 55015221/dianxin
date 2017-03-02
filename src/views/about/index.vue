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
        console.log("created about")
    },
    mounted () {
        console.log("mounted about")
        // 代码保证 this.$el 在 document 中
        this.$nextTick(function () {
            this.fetchData()
        })
    },
    methods:{
        //  请求全部数据
        fetchData () {
            console.log("fetchData")
            const $self = this
            $self.$http.get(window.configPath + 'home.json?'+ Math.random()).then(response => {
                console.log(response)
                if (response.body.code === 0) {
                  this.advertisement = response.body.data.advertisement
                  $self.markets = response.body.data.markets
                  $self.goods = response.body.data.goods
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
