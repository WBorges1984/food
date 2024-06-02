import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProdutoVitrine from '../../components/produto-vitrine/ProdutoVitrine'

import api from '../../services/api.js';

export default function Home() {
const [produtos, setProdutos] = useState([]);
useEffect(()=>{
  api.get('/produtos')
  .then((res)=>{
    setProdutos(res.data)
  })
  .catch((err)=>{
    alert("Erro ao carregar produtos")
  })
},[])

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
        {
          produtos.map((prod)=>{
            return <ProdutoVitrine  key={prod.id_produto}
                                    id={prod.id_produto} 
                                    nome={prod.nome} 
                                    descricao={prod.descricao} 
                                    preco={prod.preco}
                                    foto={prod.foto} />
          })
        }
        {console.log('url: '+ process.env.REACT_APP_URL_SERVER)}
    </div>
    
  
  </>
  )
}
