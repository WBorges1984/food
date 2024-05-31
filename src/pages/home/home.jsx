import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProdutoVitrine from '../../components/produto-vitrine/ProdutoVitrine'


export default function Home() {
  return (<>
    <Navbar showMenu />
    <div className="container">
        <div className='titulo text-center'>
            <h1>Nosso cardapio...</h1>
            <p className='subtitulo'>Clique em adicionar para colocar os produtos na sacola de compra.
                Se preferir você pode pedir pelo WhatsApp. (21) 97000-2611
                Lista de produtos</p>
        </div>
    </div>
    <div className="text-center">
        <ProdutoVitrine />
        <ProdutoVitrine />
        <ProdutoVitrine />
        <ProdutoVitrine />
    </div>
    
  
  </>
  )
}
