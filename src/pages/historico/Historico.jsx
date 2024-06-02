import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './historico.css'
import api from '../../services/api.js'

function Historico() {
  const[pedidos, setPedidos] = useState([])
  
  useEffect(()=>{
    api.get('/pedidos')
    .then((res)=>{
      setPedidos(res.data)
    })
    .catch((err)=>{
      alert("Erro ao carregar pedidos")
    })
  },[])

  return (<>
    <Navbar showMenu/>
    <div className="container">
      <div className="titulo text-center">
        <h1>Histórico de Pedidos</h1>
      </div>

      <div className="box-pedidos">
        <table >
          {pedidos.map((item)=>{
            return(
            <tr key={item.id_pedido}>
              <td><strong>{item.id_pedido}</strong></td>
              <td className='text-light'>{item.dt_pedido}</td>
              <td className='text-red'>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(item.total)}</td>
          </tr>
            )
          })}
        </table>
      </div>


    </div>
    
  
  </>  
  )
}

export default Historico