<template>
        <div class="">
            <!--百度地图容器-->
            <div style="height:300px;font-size:12px" id="map"></div>
        </div>
</template>


<script>

export default {
    name: 'map',
    props: {

    },
    data () {
        return {
            mapApi: 'http://api.map.baidu.com/api?v=2.0&ak=GdiubtoGrE6Yoi049kuBG87m',
            map:{}
        }
    },
    created(){
        this.init()
    },
    mounted () {
        this.initMap()
     },
     methods: {
        loadJScript:function() {
        		let script = document.createElement("script");
        		script.type = "text/javascript";
        		script.src = this.mapApi;
        		document.body.appendChild(script);
        },
        init: function () {
             let url = 'http://api.map.baidu.com/api?v=2.0&ak=GdiubtoGrE6Yoi049kuBG87m'
             let script = document.createElement('script')
             script.setAttribute('src', url)
             document.getElementsByTagName('head')[0].appendChild(script)
        },
        initMap:function(){
            this.createMap();//创建地图
            this.setMapEvent();//设置地图事件
            this.addMapControl();//向地图添加控件
            this.addMapOverlay();//向地图添加覆盖物
        },
        createMap:function(){
            this.map = new BMap.Map("map");
            this.map.centerAndZoom(new BMap.Point(114.240383,22.692659),16)
        },
        setMapEvent:function(){
            this.map.enableKeyboard();
            this.map.enableDragging();
        },
        addClickHandler:function(target,window){
            target.addEventListener("click",function(){
                target.openInfoWindow(window);
            });
        },
        addMapOverlay:function(){
            let markers = [
                    {content:"地址：深圳市龙龙岗区大运软件小镇54栋306",title:"深圳市典信科技有限公司",imageOffset: {width:0,height:3},position:{lat:22.691726,lng:114.235883}}
                ];
              for(let index = 0; index < markers.length; index++ ){
                let point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
                let marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
                  imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
                })});
                let label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
                let opts = {
                      width: 200,
                      title: markers[index].title,
                      enableMessage: false
                };
                let infoWindow = new BMap.InfoWindow(markers[index].content,opts);
                marker.setLabel(label);
                this.addClickHandler(marker,infoWindow);
                this.map.addOverlay(marker);
              };
        },
        addMapControl:function(){
            let navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            this.map.addControl(navControl);
        }
    }
}

</script>


<style>

</style>
