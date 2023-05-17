<template>
    <div class="div-main-page">
        <BasePage :title="title" @onEmitClickAdd="()=>{this.isShowPopupAdd=true}"/>
        <!-- <h1>{{ title + name }}</h1> -->
        <div class="div-table">
            <table>
                <thead>
                    <tr>
                        <td>Cột 1</td>
                        <td>Cột 2</td>
                        <td>Cột 3</td>
                        <td>Cột 4</td>
                        <td>Cột 5</td>
                        <td>Cột 6</td>
                        <td>Cột 7</td>
                    </tr>
                </thead>
                <tr>
                    <td>Dòng 1, ô 1</td>
                    <td>Dòng 1, ô 2</td>
                    <td>Dòng 1, ô 3</td>
                    <td>Dòng 1, ô 4</td>
                    <td>Dòng 1, ô 5</td>
                    <td>Dòng 1, ô 6</td>
                    <td>Dòng 1, ô 7</td>
                </tr>
                <tr>
                    <td>Dòng 1, ô 1</td>
                    <td>Dòng 1, ô 2</td>
                    <td>Dòng 1, ô 3</td>
                    <td>Dòng 1, ô 4</td>
                    <td>Dòng 1, ô 5</td>
                    <td>Dòng 1, ô 6</td>
                    <td>Dòng 1, ô 7</td>
                </tr>
                <tr>
                    <td>Dòng 1, ô 1</td>
                    <td>Dòng 1, ô 2</td>
                    <td>Dòng 1, ô 3</td>
                    <td>Dòng 1, ô 4</td>
                    <td>Dòng 1, ô 5</td>
                    <td>Dòng 1, ô 6</td>
                    <td>Dòng 1, ô 7</td>
                </tr>
                <tr>
                    <td>Dòng 1, ô 1</td>
                    <td>Dòng 1, ô 2</td>
                    <td>Dòng 1, ô 3</td>
                    <td>Dòng 1, ô 4</td>
                    <td>Dòng 1, ô 5</td>
                    <td>Dòng 1, ô 6</td>
                    <td>Dòng 1, ô 7</td>
                </tr>
            </table>
        </div>
        <TableBar/>
    </div>

    <!-- popup thêm -->
    <PopupAdd formMode="add" title="Thêm danh hiệu thi đua" 
        v-if="isShowPopupAdd"
        @onEmitClosePopupEdit="()=>this.isShowPopupAdd=false"></PopupAdd>
</template>

<script>
import BasePage from '../BasePage.vue';
import TableBar from '../table/TableBar.vue';
import PopupAdd from '../popup/PopupAdd.vue';
import { mapGetters } from 'vuex'
export default {
    name: "HomePage",
    props: ["title"],
    components: {
        BasePage,
        TableBar,
        PopupAdd
    },
    data() {
        return {
            isShowPopupAdd: false,//lưu trạng thái hiển thị popup
        }      
    },
    computed: {
        ...mapGetters(['name'])
    }
}
</script>

<style scoped>
.div-main-page {
    width: calc(100vw - 196px -12px);
    height: calc(100vh - 56px);
    margin-left: 196px;
    box-sizing: border-box;
    padding: 16px 16px 16px 16px;
    background-color: #F5F5F5;
}

/* bang */
.div-main {
    width: calc(100vw - 196px -12px);
    height: calc(100vh - 56px);
    margin-left: 196px;
    box-sizing: border-box;
    padding: 16px 16px 16px 16px;
    background-color: #F5F5F5;
}

.main__title {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    margin-bottom: 16px;
    line-height: 35px;
}

.div-table {
    height: 377px;
    overflow-y: scroll;
    margin-top: 16px;
    overflow-x: scroll;
    border-radius: 4px;
    box-shadow: 0 0 16px rgb(23 27 42 / 16%);
}

/* tùy chỉnh thanh cuộn table*/
.div-table::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.div-table::-webkit-scrollbar-track {
    background-color: #ffffff;
}

.div-table::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

tr,
td {
    height: 48px;
    box-sizing: border-box;
}

table,
tr,
td {
    border: 1px solid #E0E0E0;
    border-collapse: collapse;
    border-top: 0px solid #E0E0E0;
    border-left: 0px solid #E0E0E0;
}

tr td {
    padding-left: 16px;
    padding-right: 16px;
}

thead {
    background-color: #F5F5F5;
}

thead>tr>td {
    font-weight: 700;
}

tbody>tr>td {
    font-weight: 400;
}

/*  #CCE4FF*/
tbody>tr:hover {
    background-color: #fbe9e7;
}

tbody>tr {
    position: relative;
}

.state {
    background-color: #2979ff;
    width: 8px;
    height: 8px;
    float: left;
    border-radius: 50%;
    margin-right: 8px;
    margin-top: 4px;
}

.state-top {
    background-color: #9e9e9e;
}

/* cố định thẻ thead */
thead tr {
    position: sticky;
    top: 0;
    background-color: #F5F5F5;
    z-index: 2;
}

/* khi cuộn sticky thì nó vẫn còn border */
thead tr td:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid #E0E0E0;
}

/* css của thanh menu hiện  lên khi chọn item trong bảng */
#table-menu {
    padding-right: 16px;
    display: flex;
    justify-content: right;
    background-color: #F5F5F5;
    height: 36px;
    width: auto;
    align-items: center;
    position: absolute;
    z-index: 2;
    right: 0px;
    top: 123px;
}

#table-menu>button {
    min-width: 80px;
    height: 36px;
    border-radius: 4px;
}

thead tr td:not(:first-child) {
    max-width: 100%;
    min-width: 150px;
}

table {
    width: max-content;
    background-color: #ffffff;
}</style>
