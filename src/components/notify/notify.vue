<template>
    <div style="padding-top:8vh;">
      <div class="header">
        <p>通知</p>

      </div>
      <div class="content">
        <ul>
          <li>
            <router-link to="">
              <div class="up">
                <div class="img"><img src="../../../static/img/imgone.jpg" width="55px" height="55px"></div>
                <div><router-link to="" style="color:#0941f7">小天鹅-</router-link>评论了你的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
            </router-link>
            <div class="down">
              <span>7-13</span>
              <span class="mui-icon-extra mui-icon-extra-like"></span>
            </div>
          </li>
          <li>
            <router-link to="">
              <div class="up">
                <div><img src="../../../static/img/imgone.jpg" width="55px" height="55px"></div>
                <div><router-link to="" style="color:#0941f7">小天鹅-</router-link>评论了<router-link to="" style="color:#0941f7">若水</router-link>的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
            </router-link>
            <div class="down">
              <span>7-13</span>
              <span class="mui-icon-extra mui-icon-extra-like"></span>
            </div>
          </li>
          <li>
            <router-link to="">
              <div class="up">
                <div><img src="../../../static/img/imgone.jpg" width="55px" height="55px"></div>
                <div><router-link to="" style="color:#0941f7">小天鹅-</router-link>等9人点赞了你</div>
                <div><img src="../../../static/img/zan.png" width="50px" height="50px"></div>
              </div>
            </router-link>
            <div class="down">
              <span>7-13</span>
              <span class="mui-icon-extra mui-icon-extra-like"></span>
            </div>
          </li>
          <li>
            <router-link to="">
              <div class="up">
                <div class="img"><img src="../../../static/img/imgone.jpg" width="55px" height="55px"></div>
                <div><router-link to="" style="color:#0941f7">小天鹅-</router-link>评论了你的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
            </router-link>
            <div class="down">
              <span>7-13</span>
              <span class="mui-icon-extra mui-icon-extra-like"></span>
            </div>
          </li>
          <li>
            <router-link to="">
              <div class="up">
                <div><img src="../../../static/img/imgone.jpg" width="55px" height="55px"></div>
                <div><router-link to="" style="color:#0941f7">小天鹅-</router-link>评论了<router-link to="" style="color:#0941f7">若水</router-link>的微博</div>
                <div>嗨喽，大家好。我很高兴</div>
              </div>
            </router-link>
            <div class="down">
              <span>7-13</span>
              <span class="mui-icon-extra mui-icon-extra-like"></span>
            </div>
          </li>
          <li>
            <router-link to="">
              <div class="up">
                <div><img src="../../../static/img/imgone.jpg" width="55px" height="55px"></div>
                <div><router-link to="" style="color:#0941f7">小天鹅-</router-link>等9人点赞了你</div>
                <div><img src="../../../static/img/zan.png" width="50px" height="50px"></div>
              </div>
            </router-link>
            <div class="down">
              <span>7-13</span>
              <span class="mui-icon-extra mui-icon-extra-like"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <ul>
          <li>
            <router-link to="">
              <span class="mui-icon mui-icon-home"></span>
              <p>微博</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="mui-icon mui-icon-email"></span>
              <p>消息</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="mui-icon mui-icon-plusempty" style="font-size:40px; background-color:#ff8100;color:white;"></span>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="mui-icon mui-icon-search"></span>
              <p>发现</p>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <span class="mui-icon mui-icon-person"></span>
              <p>我</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'notify',
  data () {
    return {
      showTime:''
    }
  }
}
</script>
<style scoped>
.header{
  width: 100%;
  height: 8vh;
  margin-bottom: 1vh;
  position: fixed;
  top: 0;
  z-index:99;
  background-color: white;
}
.header p{
  color: black;
  text-align: center;
  line-height: 8vh;
}
.content{
  width: 100%;
}
.content ul li{
  height:20vh;
  margin-top: 2vh;
}
.content ul li .up{
  height: 15vh;
  position:relative;
}
.content ul li .up div:nth-child(1){
  width: 55px;
  height: 55px;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
.content ul li .up div:nth-child(2){
  position: absolute;
  left: 20%;
  right:20%;
}
.content ul li .up div:nth-child(3){
  width: 20%;
  height: 15vh;
  float: right;
}
.content ul li .down{
  height: 5vh;
  position:relative;
  border-bottom: 1px solid gray;

}
.content ul li .down span:nth-child(1){
  position:absolute;
  left:25%;
  bottom: 2vh;
}
.content ul li .down span:nth-child(2){
  position:absolute;
  right:5%;
  bottom: 2vh;
  color:gray;
}
.content ul li .down span:nth-child(2).hover{
  color:yellow;
}
.footer{
  width:100%;
  height:8vh;
  position: fixed;
  bottom: 0;
  background-color: white;
  padding-top:1vh;
}
.footer ul{
  display: flex;
  justify-content: space-between;
}
.footer ul li{
  width: 20%;
  height:8vh;
}
.footer ul li p{
  text-align: center;
}
</style>