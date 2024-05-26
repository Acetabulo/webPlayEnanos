import React from "react";
import { FaPlaystation } from "react-icons/fa";
import InputEquipos from "./InputEquipos";
import Tablaequipos from "./Tablaequipos";
const ListaEquipos = () => {
  return (
    <div className="ListaEquipos">
      <h3>
        <FaPlaystation />
        LISTA DE EQUIPOS
      </h3>
      <InputEquipos />
      <Tablaequipos />
      <Tablaequipos verCompletado={true} />
      </div>
  );
};
export default ListaEquipos;
