import React from "react";
import {Tr, Td} from '../css/Formats'
export const FilaEquipos = ({team, pinEquipo}) => {
    return (
      <Tr>
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
          <Td><button>E</button></Td>)}
        {!team.pin&&(  
        <Td><button>C</button></Td>
        )}        
      </Tr>
    );
  };
  