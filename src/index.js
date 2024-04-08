import React from 'react';
import ReactDOM from 'react-dom/client';
import PDFGenerator from './PDFGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));


var datosPrueba = {
  nombre: "Juan",
  correo: "juan@example.com",
  edad: 30,
  ciudad: "Ciudad de México",

  agencia: "SERVICIO NORTE",
  orden: "N202108"
};

// Convertir el objeto a una cadena JSON y guardar en localStorage
localStorage.setItem('datos', JSON.stringify(datosPrueba));

root.render(
  <React.StrictMode>
    <PDFGenerator />
  </React.StrictMode>
);
