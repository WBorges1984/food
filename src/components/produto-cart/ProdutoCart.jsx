import React, { useContext } from 'react'
import './produtoCart.css'
import foto from '../../assets/hamburguer.png'
import { CartContext } from '../../contexts/cart-context'

function ProdutoCart(props) {
  const {AddItemCart, RemoveItemCart} = useContext(CartContext)

  function AddItem(){
    const item = {
      id: props.id, 
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1
  }
    AddItemCart(item)
  }

  function RemoveItem(){
    RemoveItemCart(props.id)
  }


  return (
    <div className='produto-cart-box'>
        <img src={props.foto} alt="Foto" />
        <div className='footer-container'>
            <p className='produto-cart-nome'>{props.nome}</p>
            <p className='produto-cart-valor'>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(props.preco)}</p>
        
            <div className="footer-produto-cart">
                <div>
                    <button onClick={RemoveItem} className='btn footer-produto-btn'>-</button>
                    <span className='footer-produto-qtd'>{props.qtd}</span>
                    <button onClick={AddItem}  className='btn footer-produto-btn'>+</button>
                </div>
                <p className='footer-produto-preco '>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(props.preco * props.qtd)}</p>
            </div>
        </div>
    
    </div>
  )
}

export default ProdutoCart