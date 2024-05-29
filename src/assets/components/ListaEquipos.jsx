import React from "react";
import { FaPlaystation } from "react-icons/fa";
import InputEquipos from "./InputEquipos";
import Tablaequipos from "./Tablaequipos";
import { TablaPartidos } from "./TablaPartidos";
const ListaEquipos = () => {
  return (
    <div className='ListaEquipos'>
      <h3>
        <FaPlaystation />
        LISTA DE EQUIPOS
      </h3>
      <div>
        <InputEquipos />
        <Tablaequipos />
      </div>
      <Tablaequipos verCompletado={true} />
      <TablaPartidos />
    </div>
  );
};
export default ListaEquipos;
