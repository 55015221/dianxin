<template>

    <div id="app">

        <!--header 头部-->
        <keep-alive>
            <app-loader :loading="loading"></app-loader>
        </keep-alive>
        <keep-alive>
            <app-header></app-header>
        </keep-alive>

        <!--wrapper 主体-->
        <div class="wrapper">
            <transition
                name="custom-classes-transition"
                enter-class=""
                enter-active-class="animated fadeIn"
                leave-class=""
                leave-active-class=""
                >
                <router-view></router-view>
            </transition>
        </div>

        <!--header 底部-->
        <keep-alive>
            <app-footer></app-footer>
        </keep-alive>

    </div>

</template>

<script>
import Header from '@/views/layout/header.vue'
import Footer from '@/views/layout/footer.vue'
import Loader from '@/views/layout/loader.vue'

export default {
  name: 'app',
  data () {
    return {
        loading: true
    }
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-loader": Loader
  },
  created () {
      console.log("created app")
  },
  mounted () {
      console.log("mounted app")
  }
}
</script>

<style>
#app {

}
.wrapper {
    display: block;
    width:980px;
    margin:0 auto;
    height:100%;
}

</style>
