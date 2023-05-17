<template>
    <!-- Thanh bar o duoi bang -->
    <div class="nav-table">
        <div class="nav-table-bottom">
            <p>Số bản ghi/trang </p>
            <Combobox style="width: 80px;" 
                :defaultValue="20" 
                @setDefaultValue="onSetNumRecord"
                :optionReverse="true"
                src="https://cegovapp.misacdn.net/cegov/img/ic_drop-down.fa70eead.svg" :listSelect="[10, 20, 50, 100]">
            </Combobox>
            <p><b>1-20</b> bản ghi</p>
            <img src="../../assets/img/btn-prev-page.svg" style="margin-right: 16px;"
                @click="subCurrentPage()">
            <img src="../../assets/img/btn-next-page.svg" @click="addCurrentPage()" style="margin-right: 24px;">
        </div>
        <p>Tống số: <b id="num-record"> 50 </b> bản ghi</p>
    </div>
</template>
<script>
import Combobox from '../input/Combobox.vue'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex';
export default {
    name: "TableBar",
    components: {
        Combobox
    },
    data(){
        return {
           
        }
    },
    computed: {
    },
    methods: {
        
    }
}
</script>
<style>
.nav-table>p {
    position: absolute;
    top: 0px;
    left: 0px;
    margin-left: 16px;
}
</style>