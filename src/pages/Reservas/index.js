import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsDashCircleDotted, BsPlusCircleDotted } from "react-icons/bs";
import { Reserva, Titulo, Solicitar, Amount } from "./styles";
import reserve from '../../store/modules/reservas/reducer';
import { removeReserve, updateAmountRequest } from '../../store/modules/reservas/actions';

export default function Reservas() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)

  function handleDelete(id){
    dispatch(removeReserve(id))
  }
  function decrementAmount(trip){
    dispatch(updateAmountRequest(trip.id, trip.amount - 1));
  }
  function incrementAmount(trip){
    dispatch(updateAmountRequest(trip.id, trip.amount + 1));
  }
 return (
   <div>
     <Titulo>Você fez {reserve.length} reserva</Titulo>
     {reserves.map(reserve => (
      <Reserva key = {reserve.id}>
        <img src = {reserve.image} alt = {reserve.title}/>
        <strong>{reserve.title}</strong>
        <Amount>
          <button type="button" onClick={() => decrementAmount(reserve)}>
            <BsDashCircleDotted size={20} color="#191919" />
          </button>
          <span>{reserve.amount}</span>
          <button type="button" onClick={() => incrementAmount(reserve)}>
            <BsPlusCircleDotted size={20} color="#191919" />
          </button>
        </Amount>
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