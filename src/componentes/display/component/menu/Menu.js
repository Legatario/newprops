import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/cadastro">Cadastro</NavLink>
                </li>
                <li>
                    <NavLink to="/mensagens">Mensagens</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu