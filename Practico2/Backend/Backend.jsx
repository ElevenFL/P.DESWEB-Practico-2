const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();
app.use(bodyParser.json());

// Endpoint para agregar tareas
app.post('/tasks', (req, res) => {
    const taskName = req.body.task;
    
    if (!taskName || taskName.trim() === '') {
        return res.status(400).json({ message: 'El nombre de la tarea no puede estar vacío' });
    }
    
    database.saveTask(taskName);
    res.json({ message: `Tarea guardada: ${taskName}` });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});



// Comentarios:
// Captura el input del usuario y lo envía al backend via fetch API.
// Muestra la respuesta del servidor al usuario.
// Mejoras posibles:
// Añadir validación en el cliente para evitar enviar datos vacíos.
// Mejorar la UI con frameworks como React/Vue.
// Añadir spinner de carga durante las peticiones.
// Implementar manejo de errores más robusto. 