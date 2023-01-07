import Vue from 'vue'
import App from './App.vue'
import DataTable from "@andresouzaabreu/vue-data-table";
import "bootstrap/dist/css/bootstrap.min.css";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
Vue.config.productionTip = false;
Vue.component("data-table", DataTable)


new Vue({
  render: h => h(App),
}).$mount('#app')
