import React , {useState, useEffect}from 'react';
import api from '../../services/api';
import { useDispatch } from "react-redux";
import { Box, Lista } from "./styles"

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

  function handleAdd(trip){
    dispatch({
      type: 'ADD_RESERVE',
      trip
    });
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
              onClick= {() => handleAdd(trip)}
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