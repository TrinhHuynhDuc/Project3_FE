<template>
    <!-- thanh menu -->
    <div class="menu">
        <RouterLink to="/overview" class="rout" exact-active-class="active-router">
            <div class="menu__item">
                <div class="menu-item__left">
                    <img src="../assets/img/icons8-home-48.png">
                    <p>Trang chủ</p>
                </div>
            </div>
        </RouterLink>
        <MenuItem path="/compete" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_movement_default.102c9e3d.svg"></MenuItem>
        <MenuItem path="/award" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_reward_default.156d6945.svg"></MenuItem>
        <MenuItem path="/decide" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_decision_menu_default.cae653f2.svg"></MenuItem>
        <MenuItem path="/profile" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_profile_default.d730fb8f.svg"></MenuItem>
        <MenuItem path="/search" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_search_default.903d371b.svg"></MenuItem>
        <MenuItem path="/report" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_report_default.67157268.svg"></MenuItem>
        <div style="height: 2px;background-color: #ddd;margin-top: 5px;margin-bottom: 5px;margin-left: 12px;margin-right: 12px;"></div>
        <MenuItem path="/home" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_category_default.d46f95b8.svg"></MenuItem>
        <MenuItem path="/setting" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_setting_default.be222d4a.svg"></MenuItem>
        <div style="height: 2px;background-color: #ddd;margin-top: 5px;margin-bottom: 5px;margin-left: 12px;margin-right: 12px;"></div>
        <MenuItem path="/help" title="Menu item" src1="https://cegovapp.misacdn.net/cegov/img/ic_guide_default.186420dc.svg"></MenuItem>  
    </div>
</template>

<script>
import MenuItem from './menu/MenuItem.vue';
export default {
    name: "TheMenu",
    props: [],
    components: {
        MenuItem
    },
    data() {
        
    }
}
</script>

<style scoped>
/* thanh menu */
.menu {
    width: 200px;
    float: left;
    height: calc(100vh - 56px - 16px - 44px);
    overflow-y: scroll;
    box-sizing: border-box;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
}

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

.menu-item__left > p {
    font-size: 14px;
    font-weight: 500;
}

.menu__item>img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
}

.menu-item__left {
    display: flex;
    align-items: center;
}

.menu-item__left>img {
    margin-right: 12px;
}

#btn-collapse {
    height: 44px;
    display: flex;
    align-items: center;
    padding: 12px;
    margin-top: 12px;
    position: fixed;
    bottom: 16px;
    left: 8px;
    box-sizing: border-box;
    background-color: #edf1f5;
    border-radius: 8px;
    width: 172px;
}

#btn-collapse:hover {
    cursor: pointer;
}

/* tùy chỉnh thanh cuộn menu*/
.menu::-webkit-scrollbar {
    width: 8px;
}

.menu::-webkit-scrollbar-track {
    background-color: #ffffff;
}

.menu::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
</style>
