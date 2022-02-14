import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

const app = createApp(App);
app.use(store);
app.use(Buefy);
app.mount('#app');
