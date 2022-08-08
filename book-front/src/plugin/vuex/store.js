import {createApp} from "vue";
import App from '/src/App'
import router from "@/plugin/router";
import {store} from "@/plugin/vuex/store";


createApp(App)
    .use(store)
    .use(router)
    .mount("#app")