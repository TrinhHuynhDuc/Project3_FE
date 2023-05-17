<template>
    <!-- pop up edit danh hiệu thi đua-->
    <div id="popup-edit" :class="{'popup-add': formMode=='add', 'popup-edit': formMode=='edit'}">
        <div class="popup-add__div">
            <div class="div-tooltip" id="popup-add__close" @click="onClickClose">
                <img src="../../assets/img/x.svg" />
                <div class="tooltip" :class="{'tooltip-under':formMode=='edit'}">Đóng<div :class="{'arrow-under':formMode=='edit', 'arrow':formMode=='add'}"></div>
                </div>
            </div>
            <div class="div-tooltip" id="popup-add__question">
                <img src="../../assets/img/question.jpg" />
                <div class="tooltip" :class="{'tooltip-under':formMode=='edit'}">Hướng dẫn<div :class="{'arrow-under':formMode=='edit', 'arrow':formMode=='add'}"></div>
                </div>
            </div>
            <p class="popup__title" style="margin-top: 8px;">{{ title }}</p>
            <!-- tên danh hiệu -->
            <div id="div-add__input1">
                <p style="margin:0px">Tên danh hiệu thi đua <span class="span-red"> *</span></p>
                <input id="input-name" maxlength="255" class="add__input" :class="{ 'err-input': isShowErrName }"
                    placeholder="Nhập tên danh hiệu thi đua" @blur="validateName" @input="genderCode"
                    v-model="emulation.emulationName" ref="inputFirst" />
                <div class="err-null" v-show="isShowErrName">
                    Tên danh hiệu không được để trống
                </div>
            </div>
        </div>
        <div style="display: flex;">
            <div class="add__div1">
                <!-- Mã danh hiệu -->
                <div id="div-add__input2">
                    <p>Mã danh hiệu<span class="span-red"> *</span></p>
                    <input id="input-code" class="add__input" :class="{ 'err-input': isShowErrCode }" @blur="validateCode"
                        @input="onInputCode" v-model="emulation.emulationCode" />
                    <div class="err-null" v-show="isShowErrCode">
                        Mã danh hiệu không được để trống
                    </div>
                </div>
                <!-- Cấp khen thưởng -->
                <div id="div-add__input3">
                    <p>Cấp khen thưởng<span class="span-red"> *</span></p>
                    <Combobox class="popup__select" defaultValue="Cấp trường học" src="https://cegovapp.misacdn.net/cegov/img/ic_drop-down.fa70eead.svg"
                        :listSelect="['Cấp nhà nước', 'Cấp tỉnh', 'Cấp huyện', 'Cấp trường học']"
                        @setDefaultValue="setValueLevel">
                    </Combobox>
                    <div class="err-null" v-show="isShowErrLevelNull">
                        Cấp khen thưởng không được để trống
                    </div>
                </div>

            </div>
            <div class="add__div2">
                <!-- Đối tượng khen thưởng -->
                <div id="div-add__checkbox1">
                    <p>Đối tượng khen thưởng<span class="span-red"> *</span></p>
                    <div style="display: flex;">
                        <div class="checkbox-div">
                            <input type="checkbox" id="add__checkbox1" @change="validateObject" v-model="personalCheckBox" />
                            <p class="checkbox-p"> Cá nhân</p>
                        </div>
                        <div class="checkbox-div">
                            <input type="checkbox" id="add__checkbox2" @change="validateObject" v-model="colectiveCheckBox" />
                            <p class="checkbox-p" @blur="validateObject">Tập thể</p>
                        </div>
                    </div>
                    <div class="err-null" v-show="isShowErrObject">
                        Đối tượng khen thưởng không được để trống
                    </div>
                </div>
                <!-- Loại phong trào -->
                <div id="div-add__checkbox2">
                    <p>Loại phong trào<span class="span-red"> *</span></p>
                    <div style="display: flex;">
                        <div class="checkbox-div">
                            <input type="checkbox" id="add__checkbox3" @change="validateType" v-model="regularlyCheckBox" />
                            <p class="checkbox-p" style="margin-right: 0px">Thường xuyên</p>
                        </div>
                        <div class="checkbox-div">
                            <input type="checkbox" id="add__checkbox4" @change="validateType" v-model="batchedCheckBox" />
                            <p class="checkbox-p">Theo đợt</p>
                        </div>
                    </div>
                    <div class="err-null" v-show="isShowErrType">
                        Loại phong trào không được để trống
                    </div>
                </div>

            </div>

        </div>
        <!-- Ghi chú -->
        <div id="popup-add__note">
            <p style="margin: 0;">Ghi chú</p>
            <textarea id="text-note" type="text" row="5" placeholder="Nhập ghi chú"
                v-model="emulation.emulationNote"></textarea>
        </div>
        <!-- trangj thái -->
        <div id="div-edit__state" v-if="formMode == 'edit'">
            <p>Trạng thái</p>
            <div style="display: flex;">
                <div class="radio-div">
                    <input type="radio" name="group1" id="add__radio1" v-model="selectState" value="use" />
                    <p class="checkbox-p" style="margin-right: 0px">Sử dụng</p>
                </div>
                <div class="radio-div">
                    <input type="radio" name="group1" id="add__radio2" v-model="selectState" value="stopUse"/>
                    <p class="checkbox-p">Ngừng sử dụng</p>
                </div>
            </div>
        </div>
        <!-- thanh button edit-->
        <div id="popup-add-button">
            <Button id="popup-add-cancel" @click="onClickClose" title="Hủy"></Button> 
            <div class="div-tooltip">
                <Button id="popup-add-save" @click="onClickSave" title="Lưu"></Button>
                <div class="tooltip">Ctrl + S<div class="arrow"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Combobox from '../input/Combobox.vue'
import Button from '../button/Button.vue'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'PopupAdd',
    props: ["itemEmulation", "formMode", "title"],
    components: {
        Combobox,
        Button
    },
    data() {
        return {
            emulation: [],
            isShowErrName: false,
            isShowErrCode: false,
            isShowErrLevelNull: false,
            isShowErrLevel: false,
            isShowErrObject: false,
            isShowErrType: false,
            personalCheckBox: false,
            colectiveCheckBox: false,
            regularlyCheckBox: false,
            batchedCheckBox: false,
            selectState: "",
            iconSelectUrl: 'https://cegovapp.misacdn.net/cegov/img/ic_drop-down.fa70eead.svg'
        }
    },
    methods: {
        
        /*
        * CreatedBy: Trịnh Huỳnh Đức-25-3-23
        * hàm gọi khi click nút đóng popup
        */
        onClickClose() {
            this.$emit('onEmitClosePopupEdit')
        },
        /*
        * CreatedBy: Trịnh Huỳnh Đức-25-3-23
        * Hàm gọi khi blur input name 
        */
        validateName() {
            //name
            this.isShowErrName = !this.emulation.emulationName
            if(this.emulation.emulationName)
            this.emulation.emulationName = this.emulation.emulationName.trimStart()
            return !this.isShowErrName
        },
        /*
        * Hàm gọi khi input name ->sinh mã
        * CreatedBy: Trịnh Huỳnh Đức-9-4-23
        */
        genderCode() {
            //sinh mã tự động, trước hết chuẩn hóa chuỗi
            if (this.emulation.emulationName) {
                let nameNormal = this.emulation.emulationName.trim()//bỏ khoảng trắng 2 đầu
                nameNormal = this.emulation.emulationName.replace(/\s{2,}/g, " ")//bỏ khoảng trắng ở giữa
                let nameWords = nameNormal.split(" "); // Tách chuỗi thành mảng các từ
                let codeWord = nameWords.map(nameWords => nameWords.charAt(0)) // Lấy ký tự đầu tiên của mỗi từ trong mảng
                this.emulation.emulationCode = codeWord.join("").toUpperCase()
                //nếu dài hơn 20 ký tự thì cắt đi
                if(this.emulation.emulationCode.length > 20)
                this.emulation.emulationCode = this.emulation.emulationCode.substring(0,20)
            }
            //tránh khi mà chưa ấn cách thì nó null
            if(!this.emulation.emulationName)
            this.emulation.emulationName = ' ' + this.emulation.emulationName
            this.validateName()
        },

        /*
        * Hàm gọi khi blur input code
        * CreatedBy: Trịnh Huỳnh Đức-25-3-23
        */
        validateCode() {
            //code
            this.isShowErrCode = !this.emulation.emulationCode
            if(this.emulation.emulationCode)
            //cắt khoảng trắng đầu
            this.emulation.emulationCode = this.emulation.emulationCode.trimStart()
            //nếu dài hơn 20 ký tự thì cắt đi
            if(this.emulation.emulationCode.length > 20)
            this.emulation.emulationCode = this.emulation.emulationCode.substring(0,20)
            return !this.isShowErrCode
        },
        /*
        * Hàm gọi khi nhập input code,
        * CreatedBy: Trịnh Huỳnh Đức-(7-5-2023)
        */
        onInputCode() { 
            //tránh khi mà chưa ấn cách thì nó null
            if(!this.emulation.emulationCode)
            this.emulation.emulationCode = ' ' + this.emulation.emulationCode
            this.validateCode()
        },
        /**
         * Hàm validate cấp khen thưởng
         * CreatedBy: Trịnh Huỳnh Đức (23-3-2023)
         */
        validateLevel() {
            //level
            //kiểm tra null
            if(!this.emulation.levelAwardName){
                this.isShowErrLevel = false//bỏ err sai cấp khen thưởng đi
                this.isShowErrLevelNull = true
                return false
            }
        },

        /*
        * hàm gọi khi blur checkbox đối tượng
        * CreatedBy: Trịnh Huỳnh Đức-25-3-23
        */
        validateObject() {
            // debugger
            if ((!this.personalCheckBox) && (!this.colectiveCheckBox)) {
                this.isShowErrObject = true
            }
            else
                this.isShowErrObject = false
            return !this.isShowErrObject
        },

        /*
        * hàm gọi khi blur checkbox loại phong trào
        * CreatedBy: Trịnh Huỳnh Đức-25-3-23
        */
        validateType() {
            if ((this.regularlyCheckBox == false) && (this.batchedCheckBox == false)) {
                this.isShowErrType = true
            }
            else
                this.isShowErrType = false
            return !this.isShowErrType
        },

        /*
        * khi ấn lưu thì validate lại lần nữa, nếu ok thì gọi API
        * CreatedBy: Trịnh Huỳnh Đức-25-3-23
        */
        onClickSave() {
            
        },
        /**
         * hàm gọi khi click chọn item select của đối tượng cấp khen thưởng
         * CreatedBy: Trịnh Huỳnh Đức-29-3-23
         */
        setValueLevel(value) {
            this.emulation.levelAwardName = value
            //validate
            this.validateLevel()
        }
    },
    created() {
        //khởi tạo mã danh hiệu ban đầu
        this.emulation.emulationCode = "EC-"
        this.personalCheckBox = true
        this.regularlyCheckBox = true

    },
    mounted() {
        //focus input đầu tiên
        this.$nextTick(() => {
            this.$refs.inputFirst.focus()
        })
    },
}
</script>

<style scoped>
.span-red {
    color: red;
}
.checkbox-p {
    text-align: center;
    margin: 8px
}

.radio-div {
    width: 30%;
    height: 33px;
    display: flex;
    align-items: center;
}

.popup__select {
    width: 100%;
    font-size: 14px;
    border-radius: 4px;
    color: #000000;
    margin-top: 8px;
    min-width: 80px;
}

#popup-edit {
    width: 600px;
    position: absolute;
    /* top: 0px; */
    left: calc(50% - 300px);
    z-index: 5;
    box-shadow: 0 0 16px rgb(23 27 42 / 24%);
    border-radius: 4px;
    background-color: #ffffff;
}

.popup-add__div {
    background-color: #ffffff;
    position: relative;
    padding: 24px;
    border-radius: 4px 4px 0px 0px;
    padding-bottom: 0px;
}

#div-edit__state {
    padding: 14px 24px 0px 24px;
}

.checkbox-div {
    width: 50%;
    height: 33px;
    display: flex;
    align-items: center;
    margin-top: 8px;
}

input[type=radio] {
    width: 24px;
    height: 24px;
    transform: scale(0.8);
}

#div-edit__state>p {
    margin: 0;
}

/* tooltip */
.tooltip {
    background-color: #213253;
    color: #fff;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translate(-50%, 0%);
    /**căn giữa theo phần tử cha */
    border-radius: 8px;
    width: max-content;
    padding: 8px;
    display: none;
}

.tooltip-under {
    /**khi hiển thị tt ở dưới button */
    top: 36px;
}

.arrow-under {
    position: relative;
}

.arrow-under::before {
    /**khi hiển thị tt ở dưới button */
    content: "";
    position: absolute;
    top: -32px;
    left: calc(50% - 8px);
    /**căn giữa theo phần tử cha */
    border: solid transparent;
    border-width: 0px 8px 8px 8px;
    border-bottom-color: #213253;
}

.arrow {
    position: relative;
}

.arrow::before {
    content: "";
    position: absolute;
    top: 8px;
    left: calc(50% - 8px);
    /**căn giữa theo phần tử cha */
    border: solid transparent;
    border-width: 0px 8px 8px 8px;
    border-bottom-color: #213253;
    transform: rotate(180deg);
}

.div-tooltip {
    position: relative;
}

.div-tooltip:hover>.tooltip {
    display: block;
}
.popup-add {
    top: calc(50vh - 224px - 38px);
}
.popup-edit {
    top: 0px;
}
/* pop up loc*/
.popup {
    background-color: #ffffff;
    position: relative;
    padding: 24px;
    border-radius: 4px 4px 0px 0px;
}

.popup__title {
    font-size: 18px;
    font-weight: bold;
}

.popup p {
    margin: 0px;
}

#popup-filter {
    width: 328px;
    box-shadow: 0 0 16px rgb(23 27 42 / 24%);
    margin-top: 114px;
    margin-left: 212px;
    background-color: #ffffff;
    border-radius: 4px;
    position: absolute;
    z-index: 3;
}

#popup-filter__close {
    position: absolute;
    top: 24px;
    right: 24px
}

#popup__cancel {
    min-width: 80px;
    background-color: #ffffff;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    margin-right: 8px;
}

#popup__apply {
    min-width: 80px;
    background-color: #3395FF;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    color: #ffffff;
}

/* pop up them */
#popup-add {
    width: 600px;
    position: absolute;
    top: calc(50vh - 224px - 38px);
    left: calc(50% - 300px);
    z-index: 5;
    box-shadow: 0 0 16px rgb(23 27 42 / 24%);
    border-radius: 4px;
}

.popup-add__div {
    background-color: #ffffff;
    position: relative;
    padding: 24px;
    border-radius: 4px 4px 0px 0px;
    padding-bottom: 0px;
}

.popupthem__select {
    height: 33px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    color: #000000;
    margin-top: 8px;
}

.add__input {
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    height: 33px;
    font-size: 14px;
    border-radius: 4px;
    color: #000000;
    margin-top: 8px;
    box-sizing: border-box;
}

/* thêm vaof để xử lý cái đoạn validate */
input {
    border: 1px solid #E0E0E0;
}

.popupthem p {
    margin: 0px;
    margin-top: 24px;
}

.add__div1 p {
    margin: 0px;
    margin-top: 16px;
}

.add__div1 {
    background-color: #ffffff;
    padding: 0px 4px 0px 24px;
    box-sizing: border-box;
    width: 50%;

}

.add__div2 {
    background-color: #ffffff;
    padding: 0px 24px 0px 4px;
    box-sizing: border-box;
    width: 50%;
    float: right;
}

.add__div2>div>p {
    margin: 0px;
    margin-top: 16px;
}

.them__div2__input {
    width: 100%;
    padding-left: 8px;
    height: 33px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    color: #000000;
    margin-top: 8px;
    box-sizing: border-box;
    background-color: #1e8909;
}

#popup-add__note {
    background-color: #ffffff;
    padding: 16px 24px 24px 24px;
    padding-bottom: 0px;
}

#text-note {
    width: 100%;
    padding-left: 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    color: #000000;
    box-sizing: border-box;
    margin-top: 8px;
    height: 66px;
    resize: none;
}

#text-note:hover {
    border: 1px solid #0062CC;
}

#text-note:focus {
    outline: none;
    border: 1px solid #0062CC;
}

input[type="checkbox"] {
    float: left;
    width: 20px;
    height: 20px;
}

input[type="checkbox"]:not(:checked):hover {
    box-shadow: 0 0 0 3px #dceafc;
    border-radius: 5px;
}
input[type="checkbox"]:focus {
    box-shadow: 0 0 0 3px #dceafc;
    border-radius: 5px;
}
#popup-add__question {
    position: absolute;
    top: 18px;
    right: 56px;
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
#popup-add__question:hover {
    cursor: pointer;
}
#popup-add__close {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#popup-add__close:hover {
    cursor: pointer;
}

#popup-add-cancel {
    min-width: 80px;
    background-color: #ffffff;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    margin-right: 8px;
}

#popup-add-cancel:hover,
#popup-add-saveadd:hover {
    background-color: #F5F5F5;
}

#popup-add-saveadd {
    min-width: 80px;
    background-color: #ffffff;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #3395FF;
    color: #3395FF;
    margin-right: 8px;
}

#popup-add-save {
    min-width: 80px;
    background-color: #3395FF;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    color: #ffffff;
}

#popup-add-save:hover {
    background-color: #2979ff;
}
#popup-add-save:active {
    background-color: #869cc1;
}

#popup-add-button {
    padding-right: 24px;
    display: flex;
    justify-content: right;
    background-color: #FAFAFA;
    height: 60px;
    width: auto;
    align-items: center;
    border-radius: 0px 0px 4px 4px;
}</style>
