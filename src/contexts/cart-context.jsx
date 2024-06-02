import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props){

    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    function CalcularTotal(items){
        let tot = 0;
        for(var item of items)
            tot = tot + (item.preco * item.qtd)

        setTotalCart(tot)
    }

    function AddItemCart(item){
        
        let cartItemsNovo = [];
        let findItem = false;

        for (var prod of cartItems){
            if(prod.id == item.id){
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItemsNovo.push(item);
            }else{
                cartItemsNovo.push(prod)
            }
        }

        if((findItem == false) || (cartItems.length == 0)){
            cartItemsNovo.push(item);
        }
        
        setCartItems(cartItemsNovo);
        CalcularTotal(cartItemsNovo)
    }

    function RemoveItemCart(id){
        
        let cartItemsNovo = [];

        for (var prod of cartItems){
            if(prod.id == id){
                    prod.qtd = prod.qtd - 1;
            }

            cartItemsNovo.push(prod)
        }

        cartItemsNovo = cartItemsNovo.filter((item)=>{
            return item.qtd > 0
        });
      
        setCartItems(cartItemsNovo);
        CalcularTotal(cartItemsNovo)
    }

    return <CartContext.Provider value={{cartItems, setCartItems, AddItemCart, RemoveItemCart,totalCart, setTotalCart}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};