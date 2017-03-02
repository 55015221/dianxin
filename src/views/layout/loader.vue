<template>

    <div class="loader" :show="loading"></div>

</template>


<script>
export default {
    name: "app-loader",
    props:[
        'loading'
    ]
}
</script>

<style>

  .loader {
    font-size: 10px;
    position: absolute;
    z-index: 9999; // Above everything...
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
    text-indent: -9999em;
    border-top: 5px solid lighten(#41b883, 35%);
    border-right: 5px solid lighten(#41b883, 35%);
    border-bottom: 5px solid lighten(#41b883, 35%);
    border-left: 5px solid #41b883;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: loaderSpinner 1.1s infinite linear;
    animation: loaderSpinner 1.1s infinite linear;

  }

  @-webkit-keyframes loaderSpinner {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
