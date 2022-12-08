import { createApp } from 'vue'
import App from './App.vue'
import { createClient } from '@urql/vue';

import './assets/main.css'

const client = createClient({
    url: 'http://localhost:3000/graphql',
});
createApp(App).mount('#app')
