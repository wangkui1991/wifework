/** @format */

export default [
  {
    path: '/',
    name: 'home',
    component: require('home/Home.vue').default
  },
  {
    path: '/about',
    name: 'about',
    component: require('about/About.vue').default
  },
  {
    path: '/service',
    name: 'service',
    component: require('service/Service.vue').default
  },
  {
    path: '/work',
    name: 'work',
    component: require('work/Work.vue').default
  },
  {
    path: '/contact',
    name: 'contact',
    component: require('contact/Contact.vue').default
  },
  {
    path: '/serviceDetail',
    name: 'serviceDetail',
    component: require('service/ServiceDetail.vue').default
  },
  {
    path: '/workDetail',
    name: 'workDetail',
    component: require('work/WorkDetail.vue').default
  }
]
