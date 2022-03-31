app.component("product", {
    template: `<div class="product-image">
    <img :src="image" alt="photo de pizza"> <!--liaison d'attribut -->
</div>
<div class="product-description">
   <h1>{{ title }}</h1>
   <img v-show ="showBestSellerImg()" class="img-best-seller" src="assets/images/best-seller.png">
   <p v-show = "notAvailable">Momentanement indisponible</p> <!-- gere uniquement le display css, est conseillé si on bascule des choses très souvent-->

    <p v-if = "sale"><!--rendu conditionnel-->
       <span class="sale">{{price}}</span>
       <span class ="price">{{price - 5}}</span>
   </p >
   <p v-else>
       <span class ="new-price">{{price}}</span>
   </p>

   <br>

   <strong>Ingrédients</strong>
       <div>
           <!--donne un indice pour que vue suive l'identité de chaque noeud créer grâce à l'attribut key et ainsi reutiliser reogarniser les éléments existants.-->
           <span v-for ="(ingredient, index) in ingredients" :key="index">{{ingredient + ", "}}</span><!-- il est conseille d'attribuer des key a des boucles for dans la mesure du possible sauf si le contenu itéré soit simple ou se fier au comportement par default pour des gains de performances-->
       </div>
       <br>
   <div class="sauce">
       <strong>Sauce au choix</strong>
       <ul>
           <li v-for = "sauce in sauces" :key="sauce.id" @mouseover="updateImage(sauce.image)" :style="{backgroundColor : sauce.color}">{{sauce.type}}</li>
           <!--liaison de style--> <!--expression-->
       </ul>
   </div>
   <div>
       <strong>Valeurs nutritionnelles pour 100 grammes</strong>
       <ul><!--L'attribut key donne a chaque éléments une clef unique afin que vue puisse saisir l'élément et ne pas le perdre au fur et a mesure que les choses se mettent à jour dans l'application -->
           <li v-for = "( value, name, index) in energy" :key="index">{{name}} : {{ value }}</li> <!--récupère la valeur et le nom dans le tableau energy-->
       </ul>
   </div>

       <button :class="{noActiveBtn : notAvailable}" @click = "addProduct()" :disabled="notAvailable" >Ajouter à ma commande</button><!-- On veut écouter l'évenement click , raccourcis v-on:click -> (@click)-->
       <!--liaison d'attribut de classe--><!--condition pour que la classe noActiveBtn soit active sera la propriete notAvailable--><!--directive d'attribut-->
   </div>
   `,

   props: {
       bestseller: { // attribut personnaliser
           type:Boolean // type bolean
       }
   },

    data(){
        return {product:"Pizza",
        type:"Orientale",
        price: 12,
        image:"assets/images/pizza1-tomate.jpg",
        sale:true,
        notAvailable: false,
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
        };
    },

        //methods
        methods: {
            addProduct() {
	
                if(this.sale) {
                    this.$emit("add-product", this.price -5)
                } else {
                    this.$emit("add-product", this.price)
                }
                
                },
            updateImage(newLinkImage) { // argument newLinkImage
                this.image = newLinkImage ;
            },
            showBestSellerImg(){    // affiche ou non l'image si bestseller = true
                if(this.bestseller) {
                    return true;
                } else {
                  false;  
                }
            },
        }, 
        //computed 
        // n'a pa besoin de réxecuter la function tant que le product ou le type n'a pas changer
        //propriete  que nous pouvons ajouter a une application vue qui calcule des valeurs pour nous, elle nous aide a garder la logique de calcul hors du modèle 
        computed : { 
            title() {
                return this.product + " " + this.type ;
            },
        },
});