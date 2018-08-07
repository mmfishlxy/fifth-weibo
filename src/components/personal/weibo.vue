<template>
    <div>
         <ul class="wb">
                <li>
                    <div class="massage clearfix">
                        <img src="../../../static/img/header.png">
                        <p class="p1">尼古拉斯赵四</p>
                        <p class="p2">2018-7-6</p>
                    </div>
                    <p class="cont">我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容我是微博内容
                    </p>
                    <div class="pinlun clearfix">
                        <span class="mui-icon-extra mui-icon-extra-comment pin">评论</span>
                        <span class="mui-icon-extra mui-icon-extra-like dian">点赞</span>
                    </div>
                </li>
                <li>
                    <div class="massage clearfix">
                        <img src="../../../static/img/header.png">
                        <p class="p1">尼古拉斯赵四</p>
                        <p class="p2">2018-7-6</p>
                    </div>
                    <p class="cont">我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容我是微博内容
                    </p>
                    <div class="pinlun clearfix">
                        <span class="mui-icon-extra mui-icon-extra-comment pin">评论</span>
                        <span class="mui-icon-extra mui-icon-extra-like dian">点赞</span>
                    </div>
                </li>
                <li>
                    <div class="massage clearfix">
                        <img src="../../../static/img/header.png">
                        <p class="p1">尼古拉斯赵四</p>
                        <p class="p2">2018-7-6</p>
                    </div>
                    <p class="cont">我是微博内容我是微博内容是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容我是微博内容
                        我是微博内容我是微博内容我是微博内容我是微博内容我是微博内容
                    </p>
                    <div class="pinlun clearfix">
                        <span class="mui-icon-extra mui-icon-extra-comment pin">评论</span>
                        <span class="mui-icon-extra mui-icon-extra-like dian">点赞</span>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style scoped>
    .content .wb li{
        width:100%;
        border-top:#999 1px solid;
        padding-bottom:10px;
    }
    .wb .massage{
        height:15vh;
        padding-top: 2vh;
    }
    .wb .massage img{
       float:left;
       width:21%;
       height:11vh;
       margin-right: 5%;
    }
    .wb .massage p{
        line-height:0px;
        padding-top:3vh;
    }
    .wb .massage .p1{
        color:#000;
        font-size:18px;
    }
    .wb .massage .p2{
        font-size:16px;
        line-height: 0;
    }
    .wb .cont{
        color:#000;
        font-size:18px;
    }
    .wb .pinlun{
        border-top:#999 1px solid;
        padding-top: 1vh;
    }
    .wb .mui-icon-extra{
        color:#999;
        display: inline-block;
        width:50%;
        text-align: center;
        font-size: 20px;
    }
    .wb .pin{
        float: left;
    }
    .wb .dian{
        float: right;
    }
</style>

