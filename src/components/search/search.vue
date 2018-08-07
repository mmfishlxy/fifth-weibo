<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div class="head">
    <ul>
      <input type="text" placeholder="搜索" class="input">
      <router-link to="/searchpage" tag="a">搜索</router-link>
    </ul>
  </div>
  <div class="main">
    <div class="top">
      <h3><span class="mui-icon mui-icon-search"></span>微博热搜</h3>
      <p>每分钟更新一次 <router-link to="/bill" tag="a"><span class="mui-icon mui-icon-forward"></span></router-link></p>
    </div>
    <ul>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/searchpage">爱情公寓四美</router-link></li>
      <li><router-link to="/bill">更多<span class="mui-icon mui-icon-arrowright"></span></router-link></li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.head{
  margin: 0;
  margin-top: -10px;
}
.head ul{
  background-color:#eee;
  height: 60px;
}
.head .input{
  border-radius: 5px;
  border: #eee;
  background-color: #c9c9c9;
  width: 70%;
  height: 50%;
  position: relative;
  top:15px;
}
.head a[data-v-16a63e9c]:link{
  position: relative;
  top: 20px;
}
.main{
  margin: 0;
}
.top{
  height: 40px;
  text-align: center;
  font-size: 17px;
  color: #000;
}
.top h3{
  position: relative;
  right:30%;
  top: 10%;
}
.top p{
  color: #c6c4c4;
  font-size: 14px;
  position: relative;
  top: -20px;
  left:20%;
}
.top:hover{
  background-color: #dcdcdc;
}
.main ul{
  background-color: #eee;
}
li{
  background-color: #eee;
  height: 50px;
  width: 50%;
  float: left;
  font-size: 14px;
  line-height: 50px;
}
li:hover{
  background-color: white;
}
</style>
