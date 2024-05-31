import React from 'react'
import './produtoVitrine.css'
import foto from '../../assets/hamburguer.png'
import bag from '../../assets/bag-black.png'

function ProdutoVitrine(props) {
  return (
    <div className='produto-box text-center'>
     <img src={foto} alt="Foto" />

      <div>
        <h2>Spicy Burguer</h2>
        <p className='prod-vitrine-descricao'>Hambuguer de 250g, queijo, tomate, alface e cebola</p>
        <p className='prod-vitrine-preco'>R$ 18,90</p>
      </div>
      
      <div>
        <button className='btn btn-card'>
            <img src={bag} className='icon' alt="" />
            Adicionar
        </button>
      </div>

    </div>
  )
}

export default ProdutoVitrine