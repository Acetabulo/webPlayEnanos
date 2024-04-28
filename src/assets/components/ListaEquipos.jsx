import React, {useState, useEffect} from 'react';

import Componenteinput from './ComponenteInput';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from "../css/Formats";
import {FaPlaystation, FaExclamationTriangle, FaCheckCircle} from "react-icons/fa"

import Tablaequipos from './Tablaequipos';
//import RecuperarRegistros from './RecuperarRegistros';

const ListaEquipos = () => {
//Declaracion de variables de campos y formulario
	const [equipo, setEquipo] = useState({campo: '', valido: null});
	const [jugador, setJugador] = useState({campo: '', valido: null});
/*	//hipótesis campo por revisar
	const [equipos, setEquipos] = useState (
			[{campo:'', valido: null}
		]
	)
*/	
	const [formularioValido, setFormularioValido] = useState(null);
	const [equipos, setEquipos] = useState([])
//Validación de campos
	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{3,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
		login: /^[a-zA-ZÀ-ÿ]{3,10}$/, //Válidas letras, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}	
//Set de recarga de formulario
	useEffect(() => {
		const localStorageInicial = JSON.parse(localStorage.getItem("Equipos")) || [];
		setEquipos(localStorageInicial);
		console.log("Cargando pagina")
	  /*return () => {
		second
	  }*/
	}, [])
	
	
//Agregar equipos
	
/*const agregarEquipos = () => {
		var jug=jugador.campo
		var eq=equipo.campo
		var arreglo={jug,eq}
		const nuevoEquipo = [...equipos];
		const existeEquipo = nuevoEquipo.find((eq) => equipos.eq === equipo.eq )
		if (existeEquipo) {
			console.log("ya existe")
		} else {
			console.log("ingresar nuevo")
			//setEquipos([equipos,arreglo])
			//nuevoEquipo.push(arreglo);
		}
		console.log(equipo)
	}	
		
*/	
	
/*
	useEffect(() => {
	  setEquipos(localStorageInicial);
	},[])
*/	
//Enviar formulario
	const onSubmit = (e) => {
		e.preventDefault();

		//inicio de intento de validación
		
		
		/*
		const beqs = equipos.map((beq) => {
			return(console.log(beq.eq));
		});
		
		if(
			eq === beqs.eq
		){
		console.log("Repetido")	
		}else{
		console.log("nuevo")
		}
		*/
	
		//fin de intento de validación
		if(
			equipo.valido === 'true' &&	jugador.valido === 'true'
    	){
		setFormularioValido(true);
		var jug=jugador.campo
		var eq=equipo.campo
		var arreglo={jug,eq}
		setEquipos([...equipos,arreglo]);
	
	/*Hipotesis de casilla = campo
	setEquipos([...equipos, {campo}]);*/

		console.log(equipos);
		/*const valores = equipos.map((equipo)=>{
			<li>{equipo.eq}</li>}
		});
		
		

/*		
		var jug=jugador.campo
		var eq=equipo.campo
		var arregloEquipos={ jug, eq};
		setRegistrosEquipos([...registrosEquipos, arregloEquipos]);
		console.log(registrosEquipos)
      	limpiarListaEquipos();
*/		
	  } else {
			
    	setFormularioValido(false);
		}

	}

/*	
	useEffect(()=>{
		if (equipos!=[]) {
			localStorage.setItem("registrosEquipos",JSON.stringify(equipos));	
		}else{
			localStorage.setItem("registrosEquipos",JSON.stringify([{}]))
		}},[])

*/
/*
	const [registrosEquipos, setRegistrosEquipos] = useState(RecuperarRegistros());
	console.log("registros de Equipos", registrosEquipos)


	const limpiarListaEquipos = () =>{
		cambiarEquipo({campo: '', valido: null});
      	cambiarJugador({campo: '', valido: null});
		document.getElementById("listaEquipos").reset();
	}
	
*/
/* 
	useEffect(()=>{
		localStorage.setItem("registrosEquipos",JSON.stringify(registrosEquipos));
	})
*/
	return (
	<main>
		<h3>
        <FaPlaystation/>
        LISTA DE EQUIPOS
      	</h3>
		<Formulario id="listaEquipos" action="" onSubmit={onSubmit}>
        <Componenteinput
			estado={equipo}
			cambiarEstado={setEquipo}
			tipo="text"
			label="Equipo"
			placeholder="Ingresa Equipo"
			name="equipo"
			leyendaError="El EQUIPO solo puede contener letras y espacios mínimo 3 (No puede llevar números)."
			expresionRegular={expresiones.nombre}
			autocomplete="Off"
		/>
		<Componenteinput
			estado={jugador}
			cambiarEstado={setJugador}
			tipo="text"
			label="Jugador"
			placeholder="Ingresa jugador"
			name="jugador"
			leyendaError="El JUGADOR solo puede contener solo LETRAS mínimo 3. (no espacios, ni caracteres especiales)"
			expresionRegular={expresiones.login}
		/>
		
		{formularioValido === false && <MensajeError><FaExclamationTriangle/><b>Error:</b> Por favor rellena el formulario correctamente.</MensajeError>}
		{formularioValido === true && <MensajeExito><FaCheckCircle/> Formulario enviado exitosamente!</MensajeExito>}
		<ContenedorBotonCentrado>
			<Boton type="submit">Guardar</Boton>
		</ContenedorBotonCentrado>
		</Formulario>
		<Tablaequipos />
 	</main>
		
	);
}
 
export default ListaEquipos;