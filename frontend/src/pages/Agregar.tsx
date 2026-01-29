import { useState } from "react";
import { agregarPaciente } from "../services/agregarPacientes";

function AgregarPaciente() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [usCoop, setUsCoop] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      nombre,
      apellido,
      domicilio,
      usCoop,
    });

    agregarPaciente(nombre, apellido, domicilio, Number(usCoop));
  };

  return (
    <div className="flex justify-center items-start mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4"
      >
        <input
          required
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          required
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          required
          placeholder="Domicilio"
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          required
          placeholder="UsCoop"
          value={usCoop}
          onChange={(e) => setUsCoop(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default AgregarPaciente;
