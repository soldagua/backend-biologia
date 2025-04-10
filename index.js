const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let ubicaciones = [];

// POST /guardarUbicacion
app.post('/guardarUbicacion', (req, res) => {
  const { latitude, longitude, especie } = req.body;
  if (!latitude || !longitude || !especie) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  const nueva = {
    latitude,
    longitude,
    especie,
    esInvasora: true,
    propia: false,
  };
  ubicaciones.push(nueva);
  res.status(201).json({ message: 'Ubicación guardada', data: nueva });
});

// GET /ubicaciones
app.get('/ubicaciones', (req, res) => {
  res.json(ubicaciones);
});

app.listen(PORT, () => {
  console.log(`🌱 Backend corriendo en http://localhost:${PORT}`);
});
