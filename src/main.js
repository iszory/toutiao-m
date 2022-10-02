import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

// eslint-disable-next-line eol-last
createApp(App).use(store).use(router).mount('#app')