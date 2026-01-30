import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pacientes from "./pages/Pacientes";
import Login from "./pages/Login";
import AgregarPaciente from "./pages/Agregar";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/agregar" element={<AgregarPaciente />} />

          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
