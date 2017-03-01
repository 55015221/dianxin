<template>
    <div id="app">
        <app-loader :loading="loading"></app-loader>
        <app-header></app-header>
        <div class="wrapper">
            <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInUp"
                leave-active-class=""
                >
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <app-footer></app-footer>
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
