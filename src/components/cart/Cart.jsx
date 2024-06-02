import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import { Dock } from 'react-dock'
import ProdutoCart from '../produto-cart/ProdutoCart';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import back from '../../assets/back.png'

function Cart() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {cartItems, totalCart} = useContext(CartContext)
    


    useEffect(()=>{
        window.addEventListener('openSideBar', function(){
            setShow(true);
        });

        // setCartItems(carrinho)
    },[]);

    function checkout(){
        navigate('/checkout')
    }

  return (
    <Dock position='right'
            isVisible={show}
            fluid={false}
            size={360}
            onVisibleChange={(visible) =>{
                setShow(visible);
            }}>
        <div className='text-center'>
            <img onClick={(e)=>setShow(false)} src={back} alt="Voltar" className='cart-btn-clouse' />
            <h1>Meu Pedido</h1>
        </div>
        <div className="lista-produtos">
            {
                cartItems.map((item)=>{
                    return <ProdutoCart key={item.id}
                                id={item.id}
                                foto={item.foto}
                                nome={item.nome}
                                qtd={item.qtd}
                                preco={item.preco}/>
                })
            }
            
            
        </div>

        <div className='footer-cart'>
            <div className='footer-cart-valor'>
                <span>Total</span>
                <span><strong>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(totalCart)}</strong></span>
            </div>
            <div>
                <button className='btn-checkout' onClick={checkout}>Finalizar pedido</button>
            </div>
        </div>
    </Dock>
  )
}

export default Cart