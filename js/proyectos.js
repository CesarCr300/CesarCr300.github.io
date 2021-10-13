addEventListener("DOMContentLoaded", () => {
    const proyectos = document.querySelectorAll(".proyecto")
    const ventana = document.querySelector(".fondo-borroso")
    const ventanaDescripcion = document.querySelector(".descripcion-proyecto")
    const informacion = {
        controlDePrecios: {
            titulo: "CONTROL DE PRECIOS",
            cliente: "Carnicería Multicarnes Santa Lucía",
            descripcion: "Esta es una página web en la cual se pueden mostrar diversos productos para el público en la página principal. A su vez, existe la opción de que se inicie sesión."
        },
        apirestNotas: {
            titulo: "APIREST DE NOTAS",
            cliente: "Personal",
            descripcion: ""
        }
    }


    for (let proyecto of proyectos) {
        proyecto.addEventListener("click", () => {
            console.log(proyecto.id)
            const descripcionProyecto = document.querySelector(".descripcion-proyecto")
            descripcionProyecto.innerHTML = `
           <div class="descripcion-proyecto--cerrar">
                            <i class="fas fa-times"></i>
                        </div>
            <h3>${informacion[proyecto.id].titulo}</h3>
                        <p class="descripcion-proyecto--cliente">Cliente: ${informacion[proyecto.id].cliente}</p>
                        <p class="descripcion-proyecto--descripcion">Descripción: ${informacion[proyecto.id].descripcion} </p>
            `
            const cerrarVentana = document.querySelector(".descripcion-proyecto--cerrar")
            cerrarVentana.addEventListener("click", () => {
                ventana.classList.toggle("mostrar")
            })
            ventana.classList.toggle("mostrar")
        })
    }
})