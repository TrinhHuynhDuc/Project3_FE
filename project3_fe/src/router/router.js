
import HomePage from '../components/bodypage/HomePage.vue'
import BasePage from '../components/BasePage.vue'
import CompetePage from '../components/bodypage/CompetePage.vue'
import LoginPage from '../components/bodypage/LoginPage.vue'
const Router =
    [
        {
            path: "/login",
            component: LoginPage,
            props: {
                
            }
        },
        {
            path: "/overview",
            component: HomePage,
            props: {
                title: "Trang chủ"
            }
        },
        {
            path: "/compete",
            component: CompetePage,
            props: {
                
            }
        },
        {
            path: "/award",
            component: BasePage,
            props: {
                title: "Award"
            }
        },
        {
            path: "/decide",
            component: BasePage,
            props: {
                title: "Decide"
            }
        },
        {
            path: "/profile",
            component: BasePage,
            props: {
                title: "Profile"
            }
        },
        {
            path: "/search",
            component: BasePage,
            props: {
                title: "Search"
            }
        },
        {
            path: "/report",
            component: BasePage,
            props: {
                title: "Report"
            }
        },
        {
            path: "/home",
            component: BasePage,
            props: {
                title: "Home"
            }
        },
        {
            path: "/setting",
            component: BasePage,
            props: {
                title: "Setting"
            }
        },
        {
            path: "/help",
            component: BasePage,
            props: {
                title: "Help"
            }
        }
    ]
      
export default Router;
