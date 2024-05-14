import React from "react";
import { FaPlaystation } from "react-icons/fa";
import InputEquipos from "./InputEquipos";
import Tablaequipos from "./Tablaequipos";
const ListaEquipos = () => {
  return (
    <div>
      <h3>
        <FaPlaystation />
        LISTA DE EQUIPOS
      </h3>
      <Tablaequipos />
      <InputEquipos />
      </div>
  );
};
export default ListaEquipos;
