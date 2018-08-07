<template>
    <div>
      <h1>请输入账户名和密码</h1> 
      <router-link to="/before_login">
        <span class="mui-icon mui-icon-closeempty"></span>
      </router-link>
      <form action="">
        <input type="text" placeholder="请输入账户名"/>
        <input type="text" placeholder="请输入密码" />
        <input type="submit" value="登录" />
      </form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  /* @import '../../../static/css/common.css'; */
  div{
    font-family:楷体;
    padding-top:30%;
    position:relative;
  }
  span{
    font-size: 65px;
    position: absolute;
    top: 6vh;
    left: 4%;
  }
  h1{
    font-family:楷体;
    font-size:30px;
    line-height:10vh;
    margin-bottom:6vh;
    margin-left:10%;
  }
  input{
    width: 80%;
    height: 8vh;
    font-size: 22px;
    font-family: 楷体;
    border-radius: 4px;
    border: 1px #a0a0a0 solid;
    margin-left: 11%;
    margin-bottom: 6vh;
    padding-left: 5%;
  }
  input:nth-of-type(2){
    margin-bottom:10vh;
  }
  input:nth-of-type(3){
    width: 30%;
    height: 7vh;
    font-size: 25px;
    color: #ffffff;
    border: 1px #eedcc8 solid;
    background-color: #ffd8af;
    margin-left: 38%;
    padding:0;
    text-align:center;
  }
  input:nth-of-type(3):hover{
    background-color:#fe8101;
    border:0;
  }

</style>
