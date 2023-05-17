<template>
    <div class="div-main-page">
        <BasePage title="Compete Page">
            <template v-slot:bodypage>
                <span>This is the body slot</span>
            </template>
        </BasePage>
        <h1>Compete</h1>
    </div>
    
</template>

<script>
import BasePage from '../BasePage.vue';
export default {
    name: 'CompetePage',
    components: {
        BasePage
    },
    props: []
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
</style>
