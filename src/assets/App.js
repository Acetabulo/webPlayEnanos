import React from "react";
import ListaEquipos from "./components/ListaEquipos";
import ContextoEquipos from "./components/Contextos";

function App() {
  return (
    <ContextoEquipos>
      <div>
        <div>
          <ListaEquipos />
        </div>
      </div>
    </ContextoEquipos>
  );
}
export default App;
