// import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BotonAgregarPaciente from "./components/Boton";


/* 
type Paciente = {
  id: number;
  nombre: string;
  apellido: string;
  domicilio: string;
  usCoop: number;
};
 
function App() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => {
        setPacientes(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargaaaaando...</p>;

  return (
    <div className="container">
      <h1 className="title">Pacientes</h1>

      <div className="grid">
        {pacientes.map(p => (
          <div className="card" key={p.id}>
            <h3>{p.nombre.toUpperCase()} {p.apellido.toUpperCase()}</h3>
            <p>Domicilio: {p.domicilio.toUpperCase()}</p>
            <p>UsCoop: {p.usCoop}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default App;

*/

function App() {
  return (
    <>
      <Navbar />

      
      <BotonAgregarPaciente text="NuevoaPaciente" />
      
    </>
  );
}

export default App;