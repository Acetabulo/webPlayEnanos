import React, { createContext, useEffect, useState } from "react";

export const equiposContext = createContext();
const ContextoEquipos = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const TablaInicial = () => {
	useEffect(() => {
	  const RecuperarRegistros =
      JSON.parse(localStorage.getItem("Equipos")) || [];
    setTeams(RecuperarRegistros);
	}, [])
	
    
  };

  const actualizaEquipo = (eqs) => {
    setTeams(()=>[...teams,eqs]);
  };
  return (
    <equiposContext.Provider value={ {teams,TablaInicial,actualizaEquipo} }>
      {children}
    </equiposContext.Provider>
  );
};
export default ContextoEquipos;
