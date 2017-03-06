<template>

    <header class="header">
        <div class="logo">
            <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"/>
        </div>
        <app-menu></app-menu>
    </header>

</template>


<script>

import Menu from './menu'

export default {
    name: "app-header",
    data () {
        return {
        }
    },
    components: {
        "app-menu": Menu
    }
}
</script>

<style>
.header {
    height:64px;
    line-height:18px;
    background: #fff;
    box-shadow: 0 5px 8px rgba(0,0,0,.15);
}

.logo {
    display: inline-block;
    position: absolute;
    left: 4%;
    width: 150px;
    line-height:64px;
    transform: translate(0px, 0px);
}
.logo img {
    vertical-align: middle;
}

</style>
