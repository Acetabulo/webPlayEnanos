import React, { useContext } from "react";
import { Tabla } from "../css/Formats";
import { FilaEquipos } from "./FilaEquipos";
import { equiposContext } from "./Contextos";
const Tablaequipos= () => {
  const {teams} = useContext(equiposContext);
  return (
      <Tabla>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Jugador</th>
          </tr>
        </thead>
        <tbody>
          {
          teams.map((team) => (
            <FilaEquipos
              team={team}
              key={team.equipo}/>
          ))
          }
        </tbody>
      </Tabla>
  );
};
export default Tablaequipos;
