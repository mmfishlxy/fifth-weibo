<template>
  <div class="homeContainer">
    <!--头部Header区域-->
    <mt-header title="关注" fixed>
      <mt-button slot="left" class="mui-icon mui-icon-camera"></mt-button>
      <mt-button slot="right" class="mui-icon-extra mui-icon-extra-sweep"></mt-button>
    </mt-header>
    <!--头部Header区域-->
    <!-- 中间content区域 -->
      <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <div class="touxiang-image">
              <img src="../../../static/img/touxiang1.jpg" alt="萌妹子">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
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
              <img src="../../../static/img/touxiang2.jpg" alt="大帅哥">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
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
              <img src="../../../static/img/touxiang3.jpg" alt="小帅哥">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
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
              <img src="../../../static/img/touxiang4.jpg" alt="男模">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
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
              <img src="../../../static/img/touxiang5.jpg" alt="女模">
            </div>
            <div class="mui-media-body">
              <h3>张欢</h3>
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
    <!--底部Tabber区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-mr" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-mr" to="/message">
        <span class="mui-icon mui-icon-email-filled">
          <span class="mui-badge" id="badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item-pb" to="/publish">
        <span class="mui-icon mui-icon-plusempty"></span>
      </router-link>
      <router-link class="mui-tab-item-mr" to="/search">
        <span class="mui-icon mui-icon-search">
        </span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item-mr" to="/personal">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">我</span>
      </router-link>
    </nav>
    <!--底部Tabber区域-->
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods : {
    getAttentionData() {
      this.$http.get('acb?id=1')
      .then(result=> {
        console.log(result.body)
      })
    }
  },
  created () {
    this.getAttentionData();
  }
}
</script>
<style lang="scss" scoped>
// 容器的样式
.homeContainer {
  padding-top:60px;
  padding-bottom:50px;
  overflow-x: hidden;
}
/* 头部区域的样式 */
.mint-header.is-fixed {
  z-index:99
}
.mint-header {
  background-color: #fafafa;
  color: #929292;
  height:60px;
  align-content: center;
  font-size: 18px;
  color: #2b2b2b;
}
.mint-header .mint-button {
  font-size:29px;
}
// 中间区域的样式
.mui-card-header {
  height: 70px;
  .touxiang-image {
    border-radius: 50%;
    overflow: hidden;
    float: left;
    width: 55px;
    height: 55px;
    img {
    font-size: 0;
    line-height: 0;
    width: 100%;
    height: 100%;
    }
  }
}
  .mui-media-body {
    padding-top:5px;
    padding-left: 18px;
    h3 {
      font-size:16px;
      font-weight: bold;
    }
    .device {
      margin-left:6px;
    }
  }
    .mui-card-content {
    padding: 5px;
  }
  .mui-card-footer {
    .mui-card-link {
      color:#636363;
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
  }
}
/* 底部区域样式 */
.mui-bar {
  background-color: #fafafa;
  height: 50px;
  bottom: -1px;
}
.mui-bar-tab .mui-tab-item-mr.router-link-active {
    color: #2b2b2b;
}
.mui-bar-tab .mui-tab-item-mr {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #939393;
}
.mui-bar-tab .mui-tab-item-pb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
    background: #ff8200;
}
.mui-bar-tab .mui-tab-item-mr .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-mr .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



