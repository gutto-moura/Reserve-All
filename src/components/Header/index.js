import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from "../../assets/logo.svg"
import { Container, Reserva } from "./styles"

export default function Header() {
    const reserveSize = useSelector(state => state.reserve)
 return (
   <Container>
    <Link to = "/">
        <img src = {logo} alt = "Logomarca do projeto" />
    </Link>
    <Reserva to = "/reservas">
        <div>
            <strong>Minhas Reservas</strong>
            <span>{reserveSize.length} reservas</span>
        </div>
    </Reserva>
   </Container>
 );
}