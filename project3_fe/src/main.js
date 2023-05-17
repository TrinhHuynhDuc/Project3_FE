import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
//import router
import { createRouter, createWebHistory } from 'vue-router'
//định nghĩa các router trong file router rồi
import Router from './router/router'

//import vuex
import Vuex from 'vuex'
//import store
import Store from './store'
//đăng ký vuex vào app
app.use(Vuex);
const store = new Vuex.Store(Store)
app.use(store)


//khởi tạo router
const router = createRouter({
    history: createWebHistory(),
    routes: Router
})
router.beforeEach((to, from, next) => {
    const isAuthenticated = false // Kiểm tra xem người dùng đã đăng nhập hay chưa
  
    if (to.path !== '/login' && !isAuthenticated) {
      next('/login'); // Chuyển hướng đến trang login nếu chưa đăng nhập
    } else {
      next(); // Cho phép truy cập vào các trang khác nếu đã đăng nhập hoặc đang ở trang login
    }
  });
//đăng ký router vào app
app.use(router);
app.mount('#app')
