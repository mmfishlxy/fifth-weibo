<template>
    <div>
        <ul class="zy">
                <li>
                    <h3>基本资料</h3>
                </li>
                <li>
                    <h5>信息</h5>
                    <span>男</span>
                    <span>59</span>
                    <span>巨蟹</span>
                    <span>西安</span>
                </li>
                <li>
                    <h5>公司</h5>
                    <span>其他</span>
                </li>
                <li>
                    <h5>学校</h5>
                    <span>西柚</span>
                </li>
                <li class="time">
                    <h5>注册时间</h5>
                    <span>2014-3-13</span>
                </li>
                <li>
                    <router-link to="/data" tag="a"><h4>更新基本资料，方便大家了解你</h4></router-link>
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
    .zy li{
        width:100%;
        border-top:1px #999 solid;
        padding-top:3vh;
        padding-bottom:3vh;
    }
    .zy h3,.zy h5{
        display:inline-block;
        line-height:0;
    }
    .zy h3{
        color:#4a4a4a;
        font-size:22px;
        padding-right:60%;
    }
    .zy h5{
        color:#4a4a4a;
        font-size:20px;
        padding-right:25%;
    }
    .zy span{
        color:#4a4a4a;
        font-size:19px;
        padding-right:2%;
    }
    .zy .time h5{
        padding-right:15%;
    }
    .zy h4{
        text-align: center;
        color:#7084a3;
        font-size:20px;
    }
</style>

