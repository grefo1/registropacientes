import { useState } from "react";
import Navbar from "./components/Navbar";
import Pacientes from "./pages/Pacientes";
import Agregar from "./pages/Agregar";

function App() {
  const [vista, setVista] = useState("pacientes");

  return (
    <>
      <Navbar cambiarVista={setVista} />

      {vista === "pacientes" && <Pacientes />}
      {vista === "agregar" && <Agregar />}

      <div className="p-6"></div>
    </>
  );
}

export default App;
