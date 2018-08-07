<template>
    <div>
        <router-link to="before_login">
            <span class="mui-icon mui-icon-closeempty"></span>
        </router-link>
        <div class="origin_head">
            <!-- <img src=''>
            <input type="file" name="image"> -->
            <span class="mui-icon mui-icon-contact"></span>
        </div>
        <form action="">
            <input type="text" placeholder="请输入账户名"/>
            <input type="text" placeholder="请输入密码" />
            <input type="submit" value="注册" />
        </form>
    </div>
</template>

<script>
export default{
    name: 'register',
    data(){
        return{

        }
    }
}
// var x = new FileReader;
// 		document.forms[0].elements[0].onchange = function(){
// 			x.readAsDataURL(this.files[0]);
// 			console.log("onchange触发");
// 		}
// 		x.onloadend = function(){
// 			document.images[0].src = this.result;
// 			console.log("onloadend触发");
// 		}
</script>

<style scoped>
div{
    padding-top:20vh;
}
span:nth-of-type(1){
    font-size: 65px;
    position: absolute;
    top: 6vh;
    left: 4%;
}
.origin_head{
    width:55px;
    height:55px;
    /* border-radius:50%;
    border:1px #888888 solid; */
    margin:0 auto;
    position:relative;
}
.origin_head span{
    font-size:70px;
    position:absolute;
    top:0;
    left:0;
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