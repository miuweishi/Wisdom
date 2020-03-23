// import axios from 'axios';

export default {
    state: {
        cartlist: null //购物车的数据
    },
    mutations: {

        addcart(state, goods) {
            state.cartlist.unshift(goods);
        },
        changenum(state, { //改变数量
            gid,
            num
        }) {
            // window.console.log("changenum:", gid);
            // window.console.log(this.state.good.cartlist);
            this.state.good.cartlist.forEach(item => {
                if (item.gid === gid) {
                    item.num = num;
                }
            });


        },
        removeFromCart(state, gid) {
            // state.cartlist = state.cartlist.filter(item => item.id != id);
            // window.console.log("removeFromCart:", gid);
            // window.console.log(this.state.good.cartlist);

            this.state.good.cartlist = this.state.good.cartlist.filter(item => item.gid != gid);

            window.console.log(this.state.good.cartlist);
        },
        clearCart(state) {
            state.cartlist = [];
        }
    },
    actions: {

    },
    getters: { //类似computed ，里面是get方法
        cartlength(state) {
            return state.cartlist.length;
        },
        //统计总价
        totalprice(state) {
            return state.cartlist.reduce((prev, item) => prev + item.num * item.price, 0);

        }
    },

}