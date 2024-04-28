//importacion de recursos
import { Inputs,Label,GrupoInput,LeyendaError, IconoValidacion } from '../css/Formats';
//declaración de componente
const Componenteinput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular/*, funcion*/}) => {
//captura de valores en campo.
    const onChange = (e) => {
        //cambiarEstado({...estado, [e.target.value]: e.target.value});
        cambiarEstado({...estado, campo: e.target.value});
        console.log(e.target.id);
        console.log(estado.valido);
        console.log(estado.campo);
        
        }
    const validacion = () => {
            if(expresionRegular){

                //console.log(estado);
               // console.log(expresionRegular)
                
                if(expresionRegular.test(estado.campo)){
                //if(expresionRegular.test([e.target.value])){
                    cambiarEstado({...estado, valido: 'true'});
                } else {
                    cambiarEstado({...estado, valido: 'false'});
                }
            }
            
        }
//valores que devuelve la funcion:        
        return (
            <div>
                <Label 
                    htmlFor={name}
                    valido={estado.valido}
                >
                    {label}
                </Label>
                <GrupoInput>
                    <Inputs 
                        type={tipo} 
                        id={name}
                        value={estado.campo}
                        placeholder={placeholder}
                        onChange={onChange} onKeyUp={validacion} valido={estado.valido}
                    />
                    <IconoValidacion 
                        icon={estado.valido === 'true'}
                        valido={estado.valido}
                    />
                </GrupoInput>
                <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
            </div>
        );
}
    export default Componenteinput;