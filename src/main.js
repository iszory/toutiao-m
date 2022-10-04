import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import Vant from 'vant'
// import { Button } from 'vant'
import 'vant/lib/index.css'
// const app = createApp()
// // 3. 注册你需要的组件
// app.use(Button)

// eslint-disable-next-line eol-last
createApp(App).use(store).use(router).use(Vant).mount('#app')