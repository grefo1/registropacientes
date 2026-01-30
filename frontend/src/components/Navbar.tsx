import { useNavigate } from "react-router-dom";
import lupa from "../assets/lupa.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Registro Pacientes</div>

        {/* Links */}
        <div className="flex gap-6">
          <button
            onClick={() => navigate("/pacientes")}
            className="font-semibold hover:text-gray-200 transition"
          >
            Pacientes
          </button>

          <button
            onClick={() => navigate("/agregar")}
            className="font-semibold hover:text-gray-200 transition"
          >
            Agregar
          </button>

          <button
            onClick={() => navigate("/ordenes")}
            className="font-semibold hover:text-gray-200 transition"
          >
            Órdenes
          </button>

          <div className="flex items-center border rounded px-3 py-2 bg-white shadow-sm">
            <input
              type="text"
              placeholder="Buscar paciente..."
              className="flex-1 outline-none text-gray-700"
            />

            <button className="ml-2  p-0 w-10">
              <img src={lupa} alt="" className="w-10 h-10 opacity-70 " />
            </button>
          </div>
          <div>Logout</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
