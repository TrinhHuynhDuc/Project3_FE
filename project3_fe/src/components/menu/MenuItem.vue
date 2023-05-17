<template>
    <RouterLink :to="path" class="rout" exact-active-class="active-router">
        <div class="menu__item">
            <div class="menu-item__left">
                <img v-bind:src="src1">
                <p>{{ title }} </p>
            </div>
            <img src="../../assets/img/btn-next-page.svg">
        </div>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router'
// mỗi menu item có title, src của icon, và path để xd router
export default {
    name: "MenuItem",
    props: ["title", "src1", "path"],
    components: { RouterLink },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.menu__item {
    height: 44px;
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 12px;
    box-sizing: border-box;
    justify-content: space-between;
    margin-top: 4px;
    border-radius: 8px;
}
.rout:not(.active-router) .menu__item:hover {
    background-color: #eff7ff;
    color: #ff6d00;
}
.menu__item:hover img {
    fill: #007AFF;
}
.menu__item>img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
}
.menu-item__left > p {
    font-size: 14px;
    font-weight: 500;
}
.menu-item__left {
    display: flex;
    align-items: center;
}

.menu-item__left>img {
    margin-right: 12px;
}
</style>