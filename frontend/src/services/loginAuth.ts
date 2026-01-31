async function comprobarUsuario(pEmail: string, pContraseña: string) {
  await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify({
      email: pEmail,
      contraseña: pContraseña,
    }),
  });
}

export default comprobarUsuario;
