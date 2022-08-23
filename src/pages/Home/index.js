import React , { useState, useEffect }from 'react';
import { useDispatch } from "react-redux";
import { Box, Lista } from "./styles";
import { addReserveRequest } from '../../store/modules/reservas/actions';
import api from '../../services/api';

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function loadTrips(){
      const response = await api.get("trips")
      setTrips(response.data);
    }
    loadTrips()
  },[])

  function handleAdd(id){
    dispatch(addReserveRequest(id));
  }
 return (
   <div>
    <Box>
      {trips.map((trip) => {
        return(
          <Lista key = {trip.id}>
            <img src = {trip.image} alt = {trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? "Disponível" : "Indisponível"} </span>
            <button
              type = "button"
              onClick= {() => handleAdd(trip.id)}
            >
              <span>RESERVAR</span>
            </button>
          </Lista>
        )
      })}
    </Box>
   </div>
 );
}