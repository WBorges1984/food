import React, { useEffect, useState } from 'react'
import './cart.css'
import { Dock } from 'react-dock'
import ProdutoCart from '../produto-cart/ProdutoCart';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        window.addEventListener('openSideBar', function(){
            setShow(true);
        })
    },[]);

    function checkout(){
        navigate('/checkout')
    }

  return (
    <Dock position='right'
            isVisible={show}
            fluid={false}
            size={420}
            onVisibleChange={(visible) =>{
                setShow(visible);
            }}>
        <div className='text-center'>
            <h1>Meu Pedido</h1>
        </div>
        <div className="lista-produtos">
            <ProdutoCart />
            <ProdutoCart />
            <ProdutoCart />
            <ProdutoCart />
        </div>

        <div className='footer-cart'>
            <div className='footer-cart-valor'>
                <span>Total</span>
                <span><strong>R$ 250,00</strong></span>
            </div>
            <div>
                <button className='btn-checkout' onClick={checkout}>Finalizar pedido</button>
            </div>
        </div>
    </Dock>
  )
}

export default Cart