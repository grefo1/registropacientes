export async function agregarPaciente(
  pNombre: string,
  pApellido: string,
  pDomicilio: string,
  pUs: number
) {
  await fetch("http://localhost:3000/pacientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: pNombre,
      apellido: pApellido,
      domicilio: pDomicilio,
      usCoop: pUs,
    }),
  });
}
