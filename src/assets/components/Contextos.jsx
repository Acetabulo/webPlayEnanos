import React, { createContext, useEffect, useState } from "react";
//Creacion de componente contexto
export const equiposContext = createContext();
//Creacion de funciones de Componente contexto
const ContextoEquipos = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const TablaInicial = () => {
    useEffect(() => {
      const RecuperarRegistros =
        JSON.parse(localStorage.getItem("Equipos")) || [];
      setTeams(RecuperarRegistros);
    }, []);
  };

  const actualizaEquipo = (eqs) => {
    setTeams(() => [...teams, eqs]);
  };

  const pinEquipo = (casilla) => {
    setTeams(
      teams.map((t) =>
        t.equipo === casilla.equipo ? { ...t, pin: !t.pin } : t
      )
    );
    agregarEqPartidos();
  };

  const eliminaEquipo = (eq) => {
    setTeams(teams.filter((t) => t.equipo !== eq.equipo));
  };

  const [eqPartidos, setEqPartidos] = useState([]);
  const agregarEqPartidos = () => {
    setEqPartidos(teams.filter((team) => team.pin === true));
    console.log(eqPartidos);
  };

  return (
    <equiposContext.Provider
      value={{
        teams,
        TablaInicial,
        actualizaEquipo,
        pinEquipo,
        eliminaEquipo,
        eqPartidos,
        agregarEqPartidos,
      }}>
      {children}
    </equiposContext.Provider>
  );
};
export default ContextoEquipos;
