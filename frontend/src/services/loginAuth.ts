
async function comprobarUsuario(pEmail: string, pContraseña: string) {
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: pEmail,
      contraseña: pContraseña,
    }),
  });

  if (!res.ok) {
    alert("Login incorrecto");
    return;
  }

  const data = await res.json();
  localStorage.setItem("token", data.token);

  return data;
}

export default comprobarUsuario;
