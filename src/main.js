import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./assets/css/index.less"; // variables to override above
Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
