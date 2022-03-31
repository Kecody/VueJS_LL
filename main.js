const app = Vue.createApp({
    data() {
        return {
            product:"Pizza",
            type:"Orientale",
            price: 12,
            image:"assets/images/pizza1-tomate.jpg",
            sale:true,
            notAvailable: true,
            ingredients: [
                "Olives",
                "Poulet roti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozarella",
                "Oeuf"
            ],
            // tableau objet
            sauces: [
                {
                    id: 1001,
                    type: "Sauce Tomate",
                    color: "#db4006",
                    image:"assets/images/pizza1-tomate.jpg",
                },

                {
                    id: 1002,
                    type: "Crème Fraiche",
                    color: "#e9cb8f",
                    image:"assets/images/pizza1-creme.jpg",
                },
            ],
            // objet
            energy: {
                    Kcal: 242,
                    Glucides: 27.99,
                    Fibres: 1.75,
                    Proteines: 9.62,
                    Sel: 11,
                },
            totalPrice: 0,
            nbrProduct: 0,
            promo:"",    
        };
    },
    //methods
    methods: {
        addProduct() {
            if(this.sale) {
                this.nbrProduct += 1;
                this.totalPrice = (this.price -5) * this.nbrProduct;
            } else {
                this.nbrProduct += 1;
                this.totalPrice = this.price * this.nbrProduct;
            }
        },
        updateImage(newLinkImage) { // argument newLinkImage
            this.image = newLinkImage ;
        },
    }, 
    //computed 
    // n'a pa besoin de réxecuter la function tant que le product ou le type n'a pas changer
    computed : { //propriete  que nous pouvons ajouter a une application vue qui calcule des valeurs pour nous, elle nous aide a garder la logique de calcul hord du modèle 
        title() {
            return this.product + " " + this.type ;
        }
    }
});