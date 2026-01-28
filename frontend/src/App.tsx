import { useState } from "react";
import Navbar from "./components/Navbar";
import Pacientes from "./pages/Pacientes";



function App() {
  const [vista , setVista] = useState("Pacientes")

  return (
    <>
      <Navbar cambiarVista={setVista} />

      { vista === "pacientes" && <Pacientes />}
      
      <div className="p-6">
      
      </div>
    </>
  );
}

export default App;