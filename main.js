const app = Vue.createApp({
    data() {
        return {
            totalPrice: 0,
            nbrProduct: 0,
            promo:"", 
            bestSellerProduct: true   //transmis au composant enfant
        };
    },

    methods: {
        addCart(price) {
            this.nbrProduct += 1;
            this.totalPrice = price * this.nbrProduct;
        }
    },

    computed: {},
});
