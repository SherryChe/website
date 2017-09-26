import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../pages/index.vue';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: Hello
    },{
      path:'/',
      components:{
        header: Header,
        main:Index,
        footer:Footer
      }
    }
  ]
})
