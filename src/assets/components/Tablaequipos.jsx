import React, { useContext } from "react";
import { Tabla,Tr,Th } from "../css/Formats";
import { FilaEquipos } from "./FilaEquipos";
import { equiposContext } from "./Contextos";
const Tablaequipos= ({verCompletado=false}) => {
  const {teams, pinEquipo } = useContext(equiposContext);
  const equipoTablafilas=(pinValor)=>{
    return(
      teams
      .filter(team=>team.pin === pinValor)
      .map((team) => (
            <FilaEquipos
              team={team}
              key={team.equipo}
              pinEquipo={pinEquipo}/>
          ))
    )
  }

  return (
      <Tabla>
        <thead>
          <Tr>
            <Th>Equipo</Th>
            <Th>Jugador</Th>
            <Th>Seleccion</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </thead>
        <tbody>
          {
          equipoTablafilas(verCompletado)
          }
        </tbody>
      </Tabla>
  );
};
export default Tablaequipos;
