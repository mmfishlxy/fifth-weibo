<template>
    <div class="follow">
        <div class="header clearfix">
            <span class="mui-icon mui-icon-arrowleft"></span>
            <a href="#"><span class="me">我</span></a>
            <img src="../../../static/img/header.png">
            <p class="name">尼古拉斯赵四</p>
            <router-link to="follow" tag="a"><p class="foc">关注<span>10</span></p></router-link>
            <router-link to="fans" tag="a"><p class="fans">粉丝<span>10</span></p></router-link>
            <p class="introduce">我是个人简介</p>
        </div>
        <div class="title clearfix">
            <span class="span1" v-for="(item,index) in list" :key="index" :class="{actived:isactived==index}" @click="isactived=index,toggle('tab'+(index+1))">{{item.title}}</span>
        </div>
        <div class="content">
            <component :is="currentView" keep-alive></component>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Zhuye from './zhuye.vue'
import Weibo from './weibo.vue'
export default Vue.extend({
    data () {
        return {
            list : [
                {title: "主页"},
                {title: "微博"}
            ],
            isactived:0,
            //用来保存组件的name
            currentView : 'tab1'
        }
    },
    methods : {
        toggle(arg) {
            this.currentView=arg;
        }
    },
    components : {
        "tab1" : Zhuye,
        "tab2" : Weibo 
    }
})
</script>
<style  scoped>
    .follow{
        width:100%;
    }
    .header{
        width:100%;
        height:35vh;
        background:url(../../../static/img/bjt.png) no-repeat center 0px;
        background-size:cover;
        position:relative;
    }
    .header .mui-icon-arrowleft{
        font-size:35px;
        color:#fff;
    }
    .header .me{
        font-size: 24px;
        color:#fff;
        display: inline-block;
        padding-left:0;
        padding-top:1vh;
    }
    .header img{
        width:21%;
        height:12vh;
        margin: 0 auto;
        display:block;
        margin-top:28px;
    }
    .header .name{
        color:#fff;
        text-align: center;
        font-size: 22px;
    }
    .header .foc,.fans{
        float:left;
        color:#fff;
        font-size:16px;
        text-align: center;
        line-height: 100%;
    }
    .foc span,.fans span{
        color:#fff;
    }
    .header .foc{
        left:35%;
        position:absolute;
    }
    .header .fans{
        position:absolute;
        left:53%;
    }
    .header .introduce{
        color:#fff;
        font-size:17px;
        text-align: center;
        padding-top:3vh;
        margin:0;
    }
    .title{
        width:100%;
        height:6vh;
    }
    .title span{
        display:inline-block;
        width:50%;
        font-size: 24px;
        color:#959595;
        line-height: 6vh;
        text-align: center;
        background-color:#fff;
    }
    .title .span1{
        float:left;
    }
    .title .span2{
        float:right;
    }
    .title .span1:active{
        background-color:#f18c43;
        color:#fff;

    }
    .title .span2:active{
        background-color:#f18c43;
        color:#fff;
    }
    .content{
        margin-left:5%;
        margin-right:2%;
    }
</style>