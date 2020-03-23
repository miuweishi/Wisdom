import Vue from "vue";
import VueRouter from "vue-router";
import qs from "qs";
import axios from "axios";
import store from "../store/index";

import index from "../components/index.vue";
import sort from "../components/sort.vue";
import cart from "../components/cart.vue";
import center from "../components/center.vue";
import login from "../components/login.vue";
import register from "../components/register.vue";
import password from "../components/password.vue";
import info from "../components/info.vue";
import setting from "../components/setting.vue";
import changeName from "../components/changeName.vue";
import changePWD from "../components/changePWD.vue";
import myOrder from "../components/myOrder.vue";
import detailPages from "../components/detailPages.vue";
import Searchroote from "../components/home/Searchroote";

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    //首页
    {
      name: "首页",
      path: "/home", //当浏览器地址为/home时，显示Home组件的内容
      component: index
    },
    {
      path: "/",
      redirect: "/home" //重定向
    },
    //分类
    {
      name: "分类",
      path: "/sort",
      component: sort
    }, {
      name: 'detailPages',
      path: '/detailPages/:id',
      component: detailPages
    },
    //购物车
    {
      name: "购物车",
      path: "/cart",
      component: cart,
      meta: {
        //设置该元信息就是为了鉴权
        requiresAuth: true
      }
    },
    //个人中心
    {
      name: "客服",
      path: "/center",
      component: center
    },
    //登录
    {
      name: "登录",
      path: "/login",
      component: login
    },
    //注册
    {
      name: "注册",
      path: "/register",
      component: register
    },
    //输入密码表单
    {
      name: "输入密码",
      path: "/password",
      component: password
    },
    //个人资料
    {
      name: "个人资料",
      path: "/info",
      component: info,
      meta: {
        //设置该元信息就是为了鉴权
        requiresAuth: true,
        previousPage: "/center"
      }
    },
    //设置
    {
      name: "设置",
      path: "/setting",
      component: setting,
      meta: {
        //设置该元信息就是为了鉴权
        requiresAuth: true,
        previousPage: "/center"
      }
    },
    //修改昵称
    {
      name: "修改昵称",
      path: "/changeName",
      component: changeName,
      meta: {
        //设置该元信息就是为了鉴权
        requiresAuth: true,
        previousPage: "/info"
      }
    },
    //修改密码
    {
      name: "修改密码",
      path: "/changePWD",
      component: changePWD,
      meta: {
        //设置该元信息就是为了鉴权
        requiresAuth: true,
        previousPage: "/info"
      }
    },
    //订单
    {
      name: "我的订单",
      path: "/myOrder",
      component: myOrder,
      meta: {
        //设置该元信息就是为了鉴权
        requiresAuth: true,
        previousPage: "/center"
      }
    },
    //搜索界面
    {
      name: "搜索",
      path: "/Searchroote",
      component: Searchroote
    }
  ]
});

// 全局路由守卫
router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth) {
    //鉴权操作
    let storage = JSON.parse(localStorage.getItem("authorization"));
    if (storage) {
      //登陆就可以进入下一步：这样写所有都需要鉴权才可进入下个组件
      axios
        .post("http://47.112.39.163:1912/users/verify", qs.stringify(storage))
        .then(res => {
          if (res.data.result) {
            //token没有失效，直接跳转
            store.state.login.user = res.data.data[0];
            next();
          } else {
            //token失效,需要重新登录
            store.state.login.user = null;
            router.push({
              name: "登录",
              query: {
                targeturl: to.path
              }
            });
          }
        });
    } else {
      //没有token，token已经失效
      //如果你未登录，就让你跳到登陆页
      router.push({
        name: "登录",
        query: {
          targeturl: to.path
        }
      });
    }
  } else {
    next();
  }
});

export default router;