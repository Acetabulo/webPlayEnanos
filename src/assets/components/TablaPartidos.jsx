import React, { useContext } from "react";
import { equiposContext } from "./Contextos";
import { Tabla, Tr, Td, Th } from "../css/Formats";

export const TablaPartidos = () => {
  const { eqPartidos, agregarEqPartidos } = useContext(equiposContext);
  const listarEquipo = () => {
    return eqPartidos.map((ep) => <option key={ep.equipo}>{ep.equipo}</option>);
  };
console.log(eqPartidos)
  return (
    <div>
      <input
        type='checkbox'
        onChange={agregarEqPartidos}
      />
      <Tabla>
        <thead>
          <Tr>
            <Th>Equipo</Th>
            <Th>Gol</Th>
            <Th>Gol</Th>
            <Th>Equipo</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>
              <select onClick={agregarEqPartidos}>
                {listarEquipo(eqPartidos)}
              </select>
            </Td>
            <Td>
              <input></input>
            </Td>
            <Td>
              <input></input>
            </Td>
            <Td>
              <select>{listarEquipo(eqPartidos)}</select>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <select></select>
            </Td>
            <Td>
              <input></input>
            </Td>
            <Td>
              <input></input>
            </Td>
            <Td>
              <select></select>
            </Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td>
              <input></input>
            </Td>
            <Td>
              <input></input>
            </Td>
            <Td></Td>
          </Tr>
        </tbody>
      </Tabla>
    </div>
  );
};
