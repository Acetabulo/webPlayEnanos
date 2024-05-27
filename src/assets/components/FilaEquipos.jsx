import React, { useContext } from "react";
import {Tr, Td} from '../css/Formats'
import { equiposContext } from "./Contextos";
export const FilaEquipos = ({team, pinEquipo}) => {
const {eliminaEquipo} = useContext(equiposContext)
const limpiarFila=()=>{
  //e.preventDefault();
  if(window.confirm('Seguro de borrar registro')){
    eliminaEquipo(team);
  }
}
  return (
      <Tr key={team.equipo}>
        <Td>{team.equipo}</Td>
        <Td>{team.jugador}</Td>
        <Td>
          <input
            type='checkbox'
            checked={team.pin}
            onChange={() => pinEquipo(team)}
          />
        </Td>
        
        {!team.pin&&(
          <Td><button >E</button></Td>
        )}
  
        <Td><button onClick={limpiarFila}> C </button></Td>
              
      </Tr>
    );
  };
  