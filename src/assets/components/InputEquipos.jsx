//importacion de recursos
import React, { useState, useEffect, useContext } from "react";
import {
  Inputs,
  Label,
  GrupoInput,
  LeyendaError,
  IconoValidacion,
  Formulario,
  MensajeError,
  MensajeExito,
  ContenedorBotonCentrado,
  Boton,
} from "../css/Formats";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { equiposContext } from "./Contextos";
//DECLARACION DE COMPONENTE INPUT
export const Componenteinput = ({
  label,
  tipo,
  estado,
  cambiarEstado,
  placeholder,
  name,
  leyendaError,
  expresionRegular /*, funcion*/,
}) => {
  //Captura de valores en campo.
  const onChange = (e) => {
    cambiarEstado({ ...estado, name: e.target.id, campo: e.target.value });
  };
  //Validación de expresiones en campo.
  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };
  //valores que devuelve la funcion:
  return (
    <div>
      <Label
        htmlFor={name}
        valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
        <Inputs
          value={estado.campo}
          type={tipo}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={validacion}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === "true"}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};
//Validación de casillas
export const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{3,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  login: /^[a-zA-ZÀ-ÿ]{3,10}$/, //Válidas letras, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};
//COMPONENTE DE INGRESO DE EQUIPOS
const InputEquipos = () => {
  //Declaracion de variables de campos y formulario
  const { teams, TablaInicial, actualizaEquipo } = useContext(equiposContext);
  const [equipo, setEquipo] = useState({ campo: "", valido: null });
  const [jugador, setJugador] = useState({ campo: "", valido: null });
  const [formularioValido, setFormularioValido] = useState(null);
  //Set de recarga de formulario]
  TablaInicial();
  //Envio formulario
  const onSubmit = (e) => {
    e.preventDefault();
    if (teams.find((eq) => eq.equipo === equipo.campo)) {
      alert("Equipo REPETIDO");
    } else {
      if (equipo.valido === "true" && jugador.valido === "true") {
        setFormularioValido(true);
        actualizaEquipo({
          [equipo.name]: equipo.campo,
          [jugador.name]: jugador.campo,
          pin: false,
        });
        limpiarListaEquipos();
      } else {
        setFormularioValido(false);
      }
    }
  };
  //Funcion para limpiar campos de lista de equipos
  const limpiarListaEquipos = () => {
    setEquipo({ campo: "", valido: null });
    setJugador({ campo: "", valido: null });
    document.getElementById("listaEquipos").reset();
  };
  //ENVIO DE FORMULARIO A LOCALSTOGE
  useEffect(() => {
    localStorage.setItem("Equipos", JSON.stringify(teams));
  }, [teams]);
  //ENVIO DE COMPONENTE A PANTALLA
  return (
    <div>
      <Formulario
        id='listaEquipos'
        action=''
        onSubmit={onSubmit}>
        <Componenteinput
          estado={equipo}
          cambiarEstado={setEquipo}
          tipo='text'
          label='Equipo'
          placeholder='Ingresa Equipo'
          name='equipo'
          leyendaError='El EQUIPO solo puede contener letras y espacios mínimo 3 (No puede llevar números).'
          expresionRegular={expresiones.nombre}
          autocomplete='Off'
        />
        <Componenteinput
          estado={jugador}
          cambiarEstado={setJugador}
          tipo='text'
          label='Jugador'
          placeholder='Ingresa jugador'
          name='jugador'
          leyendaError='El JUGADOR solo puede contener solo LETRAS mínimo 3. (no espacios, ni caracteres especiales)'
          expresionRegular={expresiones.login}
        />
        {formularioValido === false && (
          <MensajeError>
            <FaExclamationTriangle />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </MensajeError>
        )}
        {formularioValido === true && (
          <MensajeExito>
            <FaCheckCircle /> Formulario enviado exitosamente!
          </MensajeExito>
        )}
        <ContenedorBotonCentrado>
          <Boton type='submit'>Guardar</Boton>
        </ContenedorBotonCentrado>
      </Formulario>
    </div>
  );
};
export default InputEquipos;
