<template>
    <div class="div-login">
        <div class="login-left"> </div>
       
        <div class="login-right">
            <img class="logo" src="../../assets/img/hust.png"/>
            <p class="title">Đăng nhập để sử dụng</p>
            <input type="text" placeholder="Nhập tên sử dụng"/>
            <input type="password" placeholder="Nhập mật khẩu"/>
            <Button title="Đăng nhập" class="button"></Button>
            <a href="#">Quyên mật khẩu?</a>
        </div>
    </div>
    <!-- thông báo -->
    <ToastMessage type="Thành công" message="Bạn đã đăng nhập vào hệ thống" v-if="loginTrue"/>
</template>

<script>
import Button from '../button/Button.vue';
import ToastMessage from '../notify/ToastMessage.vue'
export default {
    name: 'LoginPage',
    components: {Button, ToastMessage},
    props: [],
    data(){
        return {
            loginTrue: false,//lưu trạng thái thông baos khi đăng nhập
        }
    }
}
</script>

<style scoped>
div {
    border-radius: 8px;
}
.div-login {
    width: 700px;
    height: 400px;
    display: flex;
    margin: auto;
    margin-top: calc(50vh - 200px);
    box-shadow: 0 0 16px rgb(23 27 42 / 16%);
}
.login-left {
    width:350px;
    height: 100%;
    background-image: url('../../assets/img/login.jpg');
    background-size: cover;
    border-radius: 8px 0px 0px 8px;
}
.login-right {
    background-color: #fff;
    width: 50%;
    height: 100%;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo {
    display: block;
    width:150px;
    height:auto;
    margin-bottom: 32px;
}
.title {
    font-size: 20px;
    margin-top: 0px;
}
input {
    padding-left: 8px;
    padding-right: 8px;
    height: 36px;
    width: 250px;
    font-size: 14px;
    border-radius: 4px;
    color: #000000;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    margin-bottom: 20px;
}
input:hover, input:focus {
    border: 1px solid #0062CC;
}
.button {
    width: 250px;
    background-color: #0062CC;
    color: #fff;
    margin-bottom: 20px;
}
.button:hover {
    background-color: #0655aa;
}
</style>
