import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createMetaManager } from 'vue-meta';

import Home from './components/Home.vue';

import './styles.css';
import './registerServiceWorker';

const routes = [
  { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const app = createApp(App)
  .use(router)
  .use(createMetaManager());
app.mount('#app');
