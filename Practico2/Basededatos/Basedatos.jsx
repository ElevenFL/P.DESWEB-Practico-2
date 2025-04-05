const tasks = [];

function saveTask(taskName) {
    tasks.push(taskName);
    console.log(`Tarea "${taskName}" almacenada en la base de datos.`);
}

function getAllTasks() {
    return [...tasks]; // Devuelve copia para evitar modificaciones directas
}

module.exports = {
    saveTask,
    getAllTasks
};



// Comentarios:
// Simula una base de datos usando un array en memoria.
// Proporciona funciones básicas para guardar y recuperar tareas.
// Mejoras posibles:
// Reemplazar con una base de datos real (MongoDB, PostgreSQL).
// Añadir índices para búsquedas eficientes.
// Implementar modelos más complejos (fechas, estados, prioridades).
// Añadir transacciones para operaciones complejas.
// Implementar caché para mejorar rendimiento.