export default {
  state: {
    user: null
  },
  mutations: {
    login(state, { data, Authorization }) {
      //登陆
      state.user = data;

      //登陆成功把登陆的状态存到本地存储里面
      localStorage.setItem(
        "authorization",
        JSON.stringify({
          Authorization,
          phone: data.phone
        })
      );
    },
    logout(state) {
      //退出
      state.user = null;
      localStorage.removeItem("authorization");
    }
  },
  actions: {}
};
