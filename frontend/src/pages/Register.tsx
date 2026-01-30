import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Crear cuenta
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Usuario</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Repetir contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Registrarse
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-6 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Volver al login
        </button>
      </div>
    </div>
  );
}

export default Register;
