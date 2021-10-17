addEventListener("DOMContentLoaded", () => {
    console.log("cambio realizado")
    const proyectos = document.querySelectorAll(".proyecto")
    const ventana = document.querySelector(".fondo-borroso")
    const cerrarVentana = document.querySelector(".descripcion-proyecto--cerrar")
    cerrarVentana.addEventListener("click", () => {
        ventana.classList.toggle("mostrar")
    })
    const informacion = {
        controlDePrecios: {
            titulo: "CONTROL DE PRECIOS",
            cliente: "Carnicería Multicarnes Santa Lucía",
            descripcion: "Esta es una página web en la cual se pueden mostrar diversos productos para el público en la página principal. A su vez, existe la opción de que se inicie sesión, y solo un usuario con el rol de administrador es capaz de crear otro usuario.",
            enlace: "https://carniceria-sl-final.herokuapp.com/",
            tecnologiasUsadas: "JS, Node, MongoDb, Express, Bootstrap",
            enlaceGit: "https://github.com/CesarCr300/Carniceria-SL"
        },
        apirestNotas: {
            titulo: "APIREST DE NOTAS",
            cliente: "Personal",
            descripcion: "Esta APIREST permite la creación de un usuario la cual le brinda un token. Con este token la api permite poder crear a las notas existentes del usuario y acceder a ellas, contando con todas las funcionalidades CRUD. Por último, se realizaron los test con jest.",
            enlace: "https://notes-apirest.herokuapp.com/",
            tecnologiasUsadas: "JS, Node, MongoDB, Express, Babel",
            enlaceGit: "https://github.com/CesarCr300/APIREST-NOTES"
        }
    }
    for (let proyecto of proyectos) {
        proyecto.addEventListener("click", () => {
            const descripcionProyecto = document.querySelector(".descripcion-proyecto--contenido")
            descripcionProyecto.innerHTML = `
            <h2>${informacion[proyecto.id].titulo}</h2>
                <p class="descripcion-proyecto--descripcion">Cliente: ${informacion[proyecto.id].cliente}</p>
                <p class="descripcion-proyecto--descripcion">${informacion[proyecto.id].descripcion} </p>
                <p class="descripcion-proyecto--descripcion">Tecnologías usadas: ${informacion[proyecto.id].tecnologiasUsadas}</p>
                <div class="descripcion-proyecto--contenido--enlaces">
                <a href="${informacion[proyecto.id].enlaceGit}" target="_blank" class="boton">Código</a>
                <a href="${informacion[proyecto.id].enlace}" target="_blank" class="boton">Producto Final</a>
                </div>
                
            `
            ventana.classList.toggle("mostrar")
        })
    }
})