<template>
    <div class="">
        <p class="main__title">{{ title }}</p>
        <div class="main__search">
            <div>
                <div class="icon__remove" @click="onClickRemoveSearch" v-if="isShowRemoveSearch"></div>
                <Input class="input-search" defaultValue="Nhập mã hoặc tên danh hiệu..." @keydown.enter="onClickSearch"
                    @setValueInput="setValueSearch" :valueInput="valueSearch" @onClickSearch="onClickSearch" />
                <button id="button-filter" @click="onClickFilter">
                    <div class="icon-filter"></div>
                    Bộ lọc
                </button>
                <button id="button-cancel-filter" @click="onClickCancelFilter" v-show="isCancelFilter">
                    Bỏ lọc</button>
                <div class="div-add">
                    <Button id="button-add" @click="onClickAdd" title="Thêm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaoCpXqmdqHaNGtQMcl0eAmMmzWKe3vrF3w&usqp=CAU"></Button>
                </div>

            </div>
        </div>
        <!-- slot cho phần body -->
        <slot name="bodypage"></slot>
    </div>

    
</template>
  
<script>
import Button from './button/Button.vue';
import Input from './input/Input.vue';
export default {
    name: 'BasePage',
    components: { Button, Input },
    props: [
        "title"
    ],
    data() {
        return {
          
        }
    },
    methods: {
        onClickAdd(){
            this.$emit('onEmitClickAdd')
        }
    }
}
</script>
  
<style scoped>
.icon-filter {
    position: absolute;
    top: 6px;
    left: 8px;
    width: 24px;
    height: 24px;
    background: url('../assets/img/sprites.06b14dc5.svg') no-repeat -96px -48px;
}

.div-add {
    position: absolute;
    top: 0px;
    right: 0px
}

.main__search {
    position: relative;
    width: 100%
}

.input-search {
    display: inline;
    width: 250px;
}

.icon__remove {
    position: absolute;
    top: 8px;
    left: 190px;

}

.icon__remove {
    background: url('../assets/img/sprites.06b14dc5.svg') no-repeat -246px -30px;
    width: 24px;
    height: 24px;
    display: inline;
    position: absolute;
    top: 13px;
    left: 198px;
}
/* bang */
.div-main {
    width: calc(100vw - 196px -12px);
    height: calc(100vh - 56px);
    /* margin-left: 196px; */
    box-sizing: border-box;
    /* padding: 16px 16px 16px 16px; */
    background-color: #F5F5F5;
}
.main__title {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    margin-bottom: 16px;
    line-height: 35px;
}
</style>
  