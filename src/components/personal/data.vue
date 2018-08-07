<template>
    <div class="data">
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft"></span>
            <router-link to="/personal" tag="a"><span>返回</span></router-link>
            <h3>编辑资料</h3>
        </div>
        <div class="title1">
            <p>账号信息</p>
        </div>
        <div class="content1">
            <ul>
                <li>
                    <h5>昵称</h5>
                    <p>素团子</p>
                </li>
                <li>
                    <h5>简介</h5>
                    <p>我是简介</p>
                </li>
                <li class=timer>
                    <h5>注册时间</h5>
                    <p>2017-3-2</p>
                </li>
            </ul>
        </div>
        <div class="title2">
            <p>个人信息</p>
        </div>
        <div class="content2">
            <ul>
                <li>
                    <h5>性别</h5>
                    <p>女</p>
                </li>
                <li>
                    <h5>生日</h5>
                    <p>2001-2-5</p>
                </li>
                <li class="address">
                    <h5>所在地</h5>
                    <p>陕西</p>
                </li>
                 <li>
                    <h5>公司</h5>
                    <p>我是公司</p>
                </li>
                 <li>
                    <h5>高中</h5>
                    <p>西柚</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.data{
    width:100%;
}
.header{
    background-color:#f1edeb;
    height:8vh;
    line-height: 8vh;
}
.header .mui-icon{
    font-size: 32px;
    color:#000;
}
.header span{
    font-size: 22px;
    color:#000;
}
.header h3{
    display: inline-block;
    font-size:24px;
    position:relative;
    left:18%;
}
.title1,.title2{
    padding-top: 5vh;
    padding-bottom:5vh;
    border-top:#d0d0d0 1px solid;
}
.title1 p,.title2 p{
    font-size: 24px;
    margin: 0;
    line-height: 0;
    padding-left:5%;
    color:#ff8200;
}
.content1 li,.content2 li{
    border-top:#d0d0d0 1px solid;
    padding-top:2vh;
    padding-bottom:2vh;
    padding-left:6%;
    line-height: 0;
}
.content1 h5,.content2 h5{
    color:#000;
    font-size:22px;
    display:inline-block;
}
.content1 p,.content2 p{
    font-size:22px;
    display:inline-block;
    padding-left:28%;
}
.content1 .timer p{
    padding-left:16%;
}
.content2 .address p{
    padding-left:21%;
}
</style>
