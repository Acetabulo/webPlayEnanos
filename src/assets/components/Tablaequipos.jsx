import React, { useEffect, useState } from 'react'
import RecuperarRegistros from './RecuperarRegistros'
//import RecuperarRegistros from './RecuperarRegistros'
//import { Tabla } from './Formats';

const Tablaequipos = () => {
  
  const [teams, setTeams] = useState(RecuperarRegistros());
  useEffect(() => {
    if (teams != []) {
      setTeams()
      
    }
    }, [])
  
  
  /*function ListaEquipos(props){

  }*/
  
  
  /*const teams = RecuperarRegistros();
  console.log(teams);
 
 /* const ListaEquipos = tablaEquipos.map(function(equipo){
    return equipo.eq;
  });*/
  //console.log(ListaEquipos)
    return (
        <div>
          
        </div>
    )
    
}

export default Tablaequipos