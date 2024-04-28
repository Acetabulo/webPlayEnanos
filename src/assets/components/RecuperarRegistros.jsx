const RecuperarRegistros = () => {
    var datos = localStorage.getItem("registrosEquipos");
    if(datos){
        return JSON.parse(datos);
    }else{
        return [];
    }
}
export default RecuperarRegistros