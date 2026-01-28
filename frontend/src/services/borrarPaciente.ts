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
