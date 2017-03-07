<template>

<div class="contact">
    
    <!--banner-->
    <banner style="height:200px;background:#3dc0f1;"></banner>

    <!--<panel :data="panelData"></panel>-->

    <!--content-->
    <div class="template-wrapper">
        <div class="uk-container uk-container-center">
            <div class="uk-panel uk-panel-space uk-panel-divider uk-panel-box uk-panel-box-secondary">
                <h3 class="uk-panel-title">联系我们</h3>
                <p>
                    <strong>Company Name</strong>
                    <br>Street, Country
                    <br>Postal Zip Code
                </p>
                <p>
                    <a>youremail@yourdomain.com</a>
                    <br><a>@YourTwitterAccount</a><br>
                    P+44 (0) 208 0000 000
                </p>
                <h3 class="uk-h4">Follow Us</h3>
                <p>
                    <a href="#" class="uk-icon-button uk-icon-github"></a>
                    <a href="#" class="uk-icon-button uk-icon-twitter"></a>
                    <a href="#" class="uk-icon-button uk-icon-dribbble"></a>
                    <a href="#" class="uk-icon-button uk-icon-html5"></a>
                </p>
            </div>

        </div>
    </div>

</div>

</template>


<script>
import banner from '@/components/content/banner'
import panel from '@/components/content/panel'

const panelData = [
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imageUrl: 'static/images/placeholder_400x250.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]

export default {
    data () {
        return {
            panelData: panelData
        }
    },
    components: {
        panel: panel,
        banner: banner
    },
    created () {
        console.log("created contact")
    },
    mounted () {
        console.log("mounted contact")
    }
}
</script>

<style>
.contact {
    
}
</style>
