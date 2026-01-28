export async function getPacientes() {
  try {
    const res = await fetch("http://localhost:3000/pacientes");

    if (!res.ok) {
      throw new Error("Error en la respuesta del servidor.");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
