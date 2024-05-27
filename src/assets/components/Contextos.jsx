import React, { createContext, useEffect, useState } from "react";

export const equiposContext = createContext();
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
  };

  const eliminaEquipo = (eq) => {
    
      setTeams(
        teams.filter(t =>
          t.equipo !== eq.equipo
        )
      );
    }

  return (
    <equiposContext.Provider
      value={{ teams, TablaInicial, actualizaEquipo, pinEquipo, eliminaEquipo }}>
      {children}
    </equiposContext.Provider>
  );
};
export default ContextoEquipos;
