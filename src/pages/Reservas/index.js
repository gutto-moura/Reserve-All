import React from 'react';
import { useSelector } from 'react-redux';
import reserve from '../../store/modules/reservas/reducer';
import { Reserva, Titulo, Solicitar } from "./styles";


export default function Reservas() {
  const reserves = useSelector(state => state.reserve)
 return (
   <div>
     <Titulo>Você fez {reserve.length} reserva</Titulo>
     {reserves.map(reserve => (
      <Reserva key = {reserve.id}>
        <img src = {reserve.image} alt = {reserve.title}/>
        <strong>{reserve.title}</strong>
        <span>Quantidade: 2</span>
        <button
          type = "button"
          onClick = {() => {}}
        >
          Deletar
        </button>
      </Reserva>
     ))}

     <Solicitar type = "button">Solicitar reservas</Solicitar>
   </div>
 );
}