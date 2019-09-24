import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import App from './App.vue'

Vue.config.productionTip = false

const VueApp = wrap(Vue, App)
customElements.define('wc-vue', VueApp)

export default VueApp


// import Vue from 'vue'
// import wrap from '@vue/web-component-wrapper'
// import App from './App.vue'

// Vue.config.productionTip = false

// const VueApp = wrap(Vue, App)
// customElements.define('wc-vue', VueApp)

// export default VueApp