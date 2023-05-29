import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css"

const Menu = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link text-light">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/cadastro" className="nav-link text-light">Cadastro</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/mensagens" className="nav-link text-light">Mensagens</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu