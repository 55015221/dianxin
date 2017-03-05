<template>

<div class="uk-grid" data-uk-grid-margin="">
    <div class="uk-width-medium-1-1" data-uk-scrollspy="{cls:'uk-animation-slide-right', delay:300}" v-for="(item, index) in resourceData">
        <div class="uk-panel uk-panel-box uk-scrollspy-init-inview uk-scrollspy-inview uk-animation-scale-up">
            <h3 class="uk-panel-title">{{ item.title }}</h3>
            <p>{{ item.content }}</p>
        </div>
    </div>
</div>


</template>


<script>
const resourceData = [
    {
        title: '01、典信商务互联系统和传统的ERP及财务软件有什么区别？',
        content: '答：传统ERP及财务软件主要使用范围是企业内部，是企业内部管理控制的重要工具，一般不会扩展到企业外部，而典信商务互联系统主要处理的是商业组织间的商业数据交换业务，替代以前的纸质邮寄、传真、电子邮件等方式，同时，由于其信息数据信息化的特点，又可以有相应的内部管理功能，对现有的ERP及财务软件，在其所不具备的领域，有一个很好的协同、补充和完善作用。'
    },
    {
        title: '01、典信商务互联系统和传统的ERP及财务软件有什么区别？',
        content: '答：传统ERP及财务软件主要使用范围是企业内部，是企业内部管理控制的重要工具，一般不会扩展到企业外部，而典信商务互联系统主要处理的是商业组织间的商业数据交换业务，替代以前的纸质邮寄、传真、电子邮件等方式，同时，由于其信息数据信息化的特点，又可以有相应的内部管理功能，对现有的ERP及财务软件，在其所不具备的领域，有一个很好的协同、补充和完善作用。'
    },
    {
        title: '01、典信商务互联系统和传统的ERP及财务软件有什么区别？',
        content: '答：传统ERP及财务软件主要使用范围是企业内部，是企业内部管理控制的重要工具，一般不会扩展到企业外部，而典信商务互联系统主要处理的是商业组织间的商业数据交换业务，替代以前的纸质邮寄、传真、电子邮件等方式，同时，由于其信息数据信息化的特点，又可以有相应的内部管理功能，对现有的ERP及财务软件，在其所不具备的领域，有一个很好的协同、补充和完善作用。'
    },
    {
        title: '01、典信商务互联系统和传统的ERP及财务软件有什么区别？',
        content: '答：传统ERP及财务软件主要使用范围是企业内部，是企业内部管理控制的重要工具，一般不会扩展到企业外部，而典信商务互联系统主要处理的是商业组织间的商业数据交换业务，替代以前的纸质邮寄、传真、电子邮件等方式，同时，由于其信息数据信息化的特点，又可以有相应的内部管理功能，对现有的ERP及财务软件，在其所不具备的领域，有一个很好的协同、补充和完善作用。'
    },
]

export default {
    name: 'questions',
    data () {
        return {
            resourceData: resourceData
        }
    }

}

</script>


<style>
</style>
