import React from "react";
export const FilaEquipos = ({team}) => {
    return (
      <tr>
        <td>
          <input

            type='checkbox'
            checked={team.pin}
            onChange={() => console.log("cambiando")}
          />
          {team.equipo}
        </td>
        <td>{team.jugador}</td>
      </tr>
    );
  };
  