export async function agregarPaciente(
  pNombre: string,
  pApellido: string,
  pDomicilio: string,
  pUs: number,
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

export async function borrarPaciente(id: number) {
  try {
    const res = await fetch(`http://localhost:3000/pacientes/${id}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPacientes() {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/pacientes",{
      method : "GET",
      headers :{
        "Authorization": `^Bearer ${token}`,
        "Content-type": "application/json"
      }
    });

    if (!res.ok) {
      throw new Error("Error en la respuesta del servidor.");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
