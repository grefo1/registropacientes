import { useEffect, useState } from "react";
import { getPacientes } from "../services/traerPacientes";
import { borrarPaciente } from "../services/borrarPaciente";

function Pacientes() {
  type Paciente = {
    id: number;
    nombre: string;
    apellido: string;
    domicilio: string;
    usCoop: number;
  };

  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    getPacientes().then(setPacientes);
  }, []);

  const handleBorrar = async (id: number) => {
    if (window.confirm("¿Seguro que querés borrar?")) {
      await borrarPaciente(id);
      setPacientes((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pacientes</h1>

      {pacientes.length === 0 && (
        <p className="text-gray-500">No hay pacientes</p>
      )}

      <div className="space-y-2">
        {pacientes.map((p: any) => (
          <div key={p.id} className="bg-white p-3 rounded shadow">
            <div>
              <p className="font-semibold">
                {p.nombre.toUpperCase()} {p.apellido.toUpperCase()}
              </p>

              <p className="text-gray-600 text-sm">
                {p.domicilio.toUpperCase()}
              </p>

              <p className="text-gray-600 text-sm">UsCoop : {p.usCoop}</p>

              <div className="flex gap-2">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleBorrar(p.id)}
                >
                  Borrar
                </button>

                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pacientes;
