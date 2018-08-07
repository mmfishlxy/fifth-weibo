<template>
  <div class="page">
      <div class="header">
          <router-link to="/bill"><span class="mui-icon mui-icon-back"></span></router-link>
          <input type="text" class="input">
          <span class="mui-icon mui-icon-compose"></span>
      </div>
      <div class="main">
          <p>相关用户</p>
          <ul>
              <li><img src="../../../static/img/1.png"></li>
              <li><img src="../../../static/img/1.png"></li>
              <li><img src="../../../static/img/1.png"></li>
              <li><img src="../../../static/img/1.png"></li>
              <li><img src="../../../static/img/1.png"></li>
          </ul>
      </div>
      <div class="footer">
          <p>热门</p>
          <!-- 中间content区域 -->
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/1.png" alt="萌妹子">
            </div>
            <div class="mui-media-body">
              张欢
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <router-link to="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></router-link>
            <router-link to="/home/content" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">199</span></router-link>
            <router-link to="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></router-link>
          </div>
      </div>
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/1.png" alt="大帅哥">
            </div>
            <div class="mui-media-body">
              张欢
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div>
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/1.png" alt="小帅哥">
            </div>
            <div class="mui-media-body">
              张欢
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div>
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/1.png" alt="男模">
            </div>
            <div class="mui-media-body">
              张欢
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div>
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/1.png" alt="女模">
            </div>
            <div class="mui-media-body">
              张欢
              <p>2分钟前<span class="device">来自微博weibo.com</span></p>
            </div>
          </div>
          <div class="mui-card-content">
              我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据我是后台传过来的数据
          </div>
          <div class="mui-card-footer">
            <a href="#" class="mui-card-link"><span class="mui-icon-mr mui-icon-redo">239</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-comment">99</span></a>
            <a href="#" class="mui-card-link"><span class="mui-icon-extra-mr mui-icon-extra-like">99</span></a>
          </div>
      </div>
    <!-- 中间content区域 -->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    height: 60px;
    background-color: #eee;
}
.header .mui-icon-back{
    position: relative;
    /* right: 10%; */
    top: 30%;
}
.header .mui-icon-compose{
    position: relative;
    top: 30%;
    font-size: 30px;
}
.header .input{
    background-color: #dcdcdc;
    border-radius: 5px;
    width: 85%;
    height: 50%;
    position: relative;
    top: 20%;
}
.main{
    border-top:1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 120px;
}
.main p{
    padding-right: 80%;
    padding-top: 1%;
    height: 40px;
    line-height: 40px;
    margin: 0;
}
.main ul{
    height: 80px;
}
.main li{
    float: right;
    width: 20%;
    margin: 0 auto;
}
.main img{
    width: 60%;
    height: 10vh;
    display: inline-block;
}
.footer p{
    padding-right: 70%;
    font-size: 20px;
}
.mui-card-header {
  height: 70px;
}
.mui-card-header .touxiang-image {
    border-radius: 50%;
    overflow: hidden;
    float: left;
    width: 40px;
    height: 40px;
}
.mui-card-header img {
    font-size: 0;
    line-height: 0;
    width: 100%;
    height: 100%;
}
.mui-media-body {
    font-weight: bold;
}
.device {
      margin-left:6px;
}
.mui-card-content {
    padding: 5px;
}
.mui-card-link {
      color:#636363;
}
.mui-icon-mr {
        font-family: Muiicons;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
}
.mui-icon-extra-mr {
        font-family: MuiiconSpread;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
}
</style>
