
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como compleado o pendiente de una tarea'
}

const argv = require("yargs")
.command('crear', "Crea un elemento por hacer", {
    descripcion
})
.command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado
})
.command("borrar", "Borra una descripción", {
    descripcion
})
.help().argv;

module.exports = {
    argv
}