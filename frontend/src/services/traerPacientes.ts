export async function getPacientes(){
    try {
        const res = await fetch("http://localhost:3000/")

        if (!res.ok) {
            throw new Error("Error en la respuesta del servidor.");
            
        }

        return res.json();
    } catch (error) {
        console.log(error)
        alert("Error al mostrar pacientes")
        return[]
    }
   
}