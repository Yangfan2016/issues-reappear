import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mounted() {
    // 关闭页面级别的 loading 动画
    let pageLoading = document.getElementById("page-loading");
    if (pageLoading) {
      setTimeout(() => {
        pageLoading.remove();
      }, 1e3);
    }
  }
}).$mount('#app');

