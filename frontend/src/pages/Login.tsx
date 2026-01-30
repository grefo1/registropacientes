import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Iniciar sesión
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Usuario o email
            </label>
            <input
              type="text"
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        <button
          onClick={() => navigate("/register")}
          className="w-full mt-6 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Login;
