import React, { useContext } from "react";
import { Tabla,Tr,Th } from "../css/Formats";
import { FilaEquipos } from "./FilaEquipos";
import { equiposContext } from "./Contextos";
const Tablaequipos= () => {
  const {teams, pinEquipo} = useContext(equiposContext);
  return (
      <Tabla>
        <thead>
          <Tr>
            <Th>Equipo</Th>
            <Th>Jugador</Th>
            <Th>Seleccion</Th>
          </Tr>
        </thead>
        <tbody>
          {
          teams.map((team) => (
            <FilaEquipos
              team={team}
              key={team.equipo}
              pinEquipo={pinEquipo}/>
          ))
          }
        </tbody>
      </Tabla>
  );
};
export default Tablaequipos;
