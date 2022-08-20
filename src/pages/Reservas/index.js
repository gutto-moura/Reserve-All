import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve } from '../../store/modules/reservas/actions';
import reserve from '../../store/modules/reservas/reducer';
import { Reserva, Titulo, Solicitar } from "./styles";


export default function Reservas() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)

  function handleDelete(id){
    dispatch(removeReserve(id))
  }
  
 return (
   <div>
     <Titulo>Você fez {reserve.length} reserva</Titulo>
     {reserves.map(reserve => (
      <Reserva key = {reserve.id}>
        <img src = {reserve.image} alt = {reserve.title}/>
        <strong>{reserve.title}</strong>
        <span>Quantidade: {reserve.amount}</span>
        <button
          type = "button"
          onClick = {() => handleDelete(reserve.id)}
        >
          Deletar
        </button>
      </Reserva>
     ))}

     <Solicitar type = "button">Solicitar reservas</Solicitar>
   </div>
 );
}