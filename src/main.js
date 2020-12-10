import Vue from 'vue';
import App from '@/App.vue';

import { firstElem, lastElem } from '@/file';
import callAlert from '@/callAlert';

callAlert(firstElem);
callAlert(lastElem);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
