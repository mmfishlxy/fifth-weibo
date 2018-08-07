<template>
  <div class="hello">
    <div class="header">
      <router-link to="/search"><span class="mui-icon mui-icon-back"></span></router-link>
      <h3>微博热搜</h3>
    </div>
    <div class="main">
      <p>实时热点，每分钟更新一次</p>
      <ul>
        <li><span>1</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>2</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>3</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>4</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>5</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>6</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>7</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>8</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>9</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>10</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>11</span><router-link to="/searchpage">为人民点赞</router-link></li>
        <li><span>12</span><router-link to="/searchpage">为人民点赞</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  position: relative;
}
.header h3{
  text-align: center;
  line-height: 60px;
  margin: 0;
}
.mui-icon-back{
  position: absolute;
  left: 5%;
  bottom: 30%;
}
.main p{
  height: 30%;
  background-color: #dcdcdc;
  color: #a9a6a6;
  font-size: 15px;
  text-align: left;
  padding-left: 10%;
  margin: 0;
}
.main span{
 color: #f46c53;
 font-weight: 800;
 position: relative;
 right: 20%;
}
.main li{
  height: 40px;
  line-height: 40px;
  padding-right: 40%;
  border-bottom: 1px solid #eee;
}
.main li:hover{
  background-color: #eee;
}
</style>
