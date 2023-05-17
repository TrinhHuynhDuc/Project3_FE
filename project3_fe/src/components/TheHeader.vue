<template>
    <div id="bar">
        <div class="bar__right">
            <div class="div-icon">
                <img src="../assets/img/bell.jpg">
                <div class="tooltip">Thông báo<div class="arrow"></div></div> 
            </div>
            <div class="div-icon">
                <img src="../assets/img/question.jpg">
                <div class="tooltip" hidden>Hướng dẫn<div class="arrow"></div></div>
            </div>
            <div class="div-icon">
                <img src="../assets/img/book.jpg">
                <div class="tooltip" >Văn bản quy định<div class="arrow"></div></div>
            </div>
            <div class="div-icon">
                <img src="../assets/img/setting2.jpg">
                <div class="tooltip" >Thiết lập hệ thống<div class="arrow"></div></div>
            </div>
            <div class="div-avatar">
                <img src="../assets/img/avatar-default.png" class="img-avatar">
            </div>
        </div>
        <div class="bar__left">
            <img src="../assets/img/icons8-squared-menu-48.png">
            <p>Project 3</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    props: [],
    components: {
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
/* thanh bar */
#bar {
    height: 56px;
    box-shadow: 0px 1px 3px #ddd;
    z-index: 1;
    position: relative;
}

.bar__right {
    display: flex;
    align-items: center;
    float: right;
    height: 100%;
}

.bar__right>* {
    margin-right: 8px;
}

.bar__right>i {
    width: 24px;
    height: 24px;
}

.bar__right>img:hover {
    background-color: #edf1f5;
}

.bar__left {
    display: flex;
    align-items: center;
    padding-left: 16px;
    height: 100%;
}

.bar__left>i {
    font-size: 24px;
}

.bar__left>img {
    width: 32px;
    height: 32px;
}

.bar__left>* {
    margin-right: 12px;
}

.bar__right>i {
    font-size: 24px;
}

.bar__right>img {
    width: 24px;
    height: 24px;
}

.bar__left p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    text-align: center;
}

.div-icon>img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
}

.div-icon {
    width: 32px;
    height: 28px;
    box-sizing: border-box;
    position: relative;
    border-radius: 100px;
}

.div-icon:hover,
.div-avatar:hover {
    background-color: #f5f5f5;
}

.img-avatar {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.div-avatar {
    width: 48px;
    height: 100%;
    position: relative;
    margin-right: 0px;
}

.tooltip {
    background-color: #213253;
    color: #fff;
    position: absolute;
    top: 34px;
    left: 50%;
    transform: translate(-50%, 0%);/**căn giữa theo phần tử cha */
    border-radius: 8px;
    width: max-content;
    padding: 8px;
    display: none;
}
.arrow {
  position: relative;
}

.arrow::before {
  content: "";
  position: absolute;
  top: -33px;
  left: calc(50% - 8px);/**căn giữa theo phần tử cha */
  border: solid transparent;
  border-width: 0px 8px 8px 8px;
  border-bottom-color: #213253;
  display: none;
}
.div-icon:hover .tooltip, .arrow::before{
    display: block;
}

</style>
