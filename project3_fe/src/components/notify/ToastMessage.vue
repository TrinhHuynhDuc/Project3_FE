<template>
    <!-- thông báo -->
    <div class="div-toast">
        <div class="toast">
            <div class="div-icon" :class="{ 'div-success': type == 'Thành công', 'div-err':type == 'Lỗi' }">
                <img class="icon-notify" src="../../assets/img/icons8-done-26.png" />
            </div>
            <p><span :class="{ 'p-success': type == 'Thành công', 'p-err': type == 'Lỗi' }">type
            </span> {{ message }}</p>
            <img class="icon-close" src="../../assets/img/x.svg" @click="onClickCloseNotify" />
        </div>
    </div>
</template>
<script>
export default {
    name: "ToastMessage",
    props: ["message", "type"],
    data() {
        return {
        }
    },
    methods: {
        /*
        * CreatedBy: Trịnh Huỳnh Đức-25-3-23
        * click đóng thông báo
        */
        onClickCloseNotify() {
            this.$emit("onEmitCloseNotify")
        }
    }
}
</script>
<style scoped>
.toast {
    height: 56px;
    width: 400px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.078);
    align-items: center;
    display: flex;
    padding-left: 18px;
    box-sizing: border-box;
    position: relative;
}

.div-icon {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    margin-right: 8px;
}

.div-err {
    background-color: red;
}

.div-success {
    background-color: #50B83C;
}

.p-success {
    color: #50B83C
}

.p-err {
    color: red
}

.icon-close {
    position: absolute;
    width: 16px;
    height: 16px;
    right: 16px;
    top: auto
}

.div-toast {
    position: fixed;
    z-index: 100;
    top: -56px;
    left: calc(50vw - 200px);
    animation: slideDown 1s ease forwards;
}

.icon-notify {
    width: 14px;
    height: 14px;
    margin-left: 3px;
    margin-top: 3px;
}

/* hiệu ứng chuyển động */
@keyframes slideDown {
    to {
        top: 20px;
        /* đặt phần tử ở phía dưới */
    }
}</style>