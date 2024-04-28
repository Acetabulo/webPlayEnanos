import styled, {css} from "styled-components";

const colores = {
	borde: "#24792A",
	error: "#bb2929",
	exito: "#1ed12d"
};

const Formulario = styled.form`
	gap: 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`
const Tabla = styled.table`
	display: inline-block;
	float: rigth;
	position: absolute;
	z-index: 90;
`;

/*const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`
*/

 const Label = styled.label`
	width: 7%;
 	
	font-weight: 500;
	padding: 5px 10px;
	min-height: 20px;
	cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	display: inline;
	float: rigth;
	position: relative;
	z-index: 90;
`;

const Inputs = styled.input`
	display: inline;
	width: 25%;
	background: #f8f8f8;
	border-radius: 3px;
	height: 35px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.valido === 'true' && css`
		display: none;
	`}
	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

  const IconoValidacion = styled('react-icons')`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}
	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;
 
/* const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 800px){
		grid-column: span 1;
	}
`; */
 
const ContenedorBotonCentrado = styled.div`
	display: center;
	flex-direction: column;
	align-items: center;
	@media (max-width: 100px){
		grid-column: span 1;
	}
`;

/*const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;
*/

const Boton = styled.button`
	margin: 10px;
	height: 35px;
	line-height: 35px;
	width: 12%;
	background: #271557;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

export {
	Formulario,
	Tabla,
	Label,
	GrupoInput,
	Inputs,
	LeyendaError,
	IconoValidacion,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError
};