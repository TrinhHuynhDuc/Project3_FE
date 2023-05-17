<template>
    <!-- phan tư input -->
    <div class="div-input">
        <p style="margin:0px" v-if="title">{{ title }}<span style="color: red;" v-if="require"> *</span></p>
        <input class="input" :placeholder="defaultValue" v-model="inputValue"
            @input="() => this.$emit('setValueInput', this.inputValue)" />
        <div id="div-icon-search" @click="this.$emit('onClickSearch')">
            <div id="icon-search"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        title: {
            type: String,
            default: ''
        },
        defaultValue: {
            type: String,
            default: ''
        },
        require: {
            type: Boolean,
            default: false
        },
        valueInput: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputValue: this.valueInput,
        }
    },
    watch: {
        //khi prop cha truyền lại valueInput thì cập nhật lại value input con
        //->binding chiều cha sang con
        valueInput(newValue) {
            this.inputValue = newValue
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.input {
    padding-left: 8px;
    padding-right: 62px;
    height: 36px;
    width: 250px;
    font-size: 14px;
    border-radius: 4px;
    color: #000000;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
}

.err-input {
    border: 1px solid #ef5350;
}

.err-null {
    color: #ef5350;
    margin-top: 8px;
}

.div-input {
    width: 250px;
    display: flex;
}

#div-icon-search {
    top: 1px;
    position: absolute;
    left: 214px;
    width: 36px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#div-icon-search:hover {
    cursor: pointer;
}

#icon-search {
    background: url('../../assets/img/sprites.06b14dc5.svg') no-repeat -288px -23px;
    width: 24px;
    height: 24px;
}</style>
