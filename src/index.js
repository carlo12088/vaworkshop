import React from 'react';
import ReactDOM from 'react-dom/client';
import PDFGenerator from './PDFGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));


var datosPrueba = {

  agencia: "SERVICIO NORTE",
  orden: "N202108",
  vehiculo: "YARIS HB AC 1.5 5P 4",
  placa: "PDM1047", 
  anio: 2020 ,
  chasis: "MR2K29F35L1166627",
  propietario: "TORRES ERAZO ANGEL MAURICIO",
  identificacoin: 1717300295, 
  mail: "MAURICIO.TORRES.ERAZO@GMAIL.COM",
  direccion: "CENEPA 10 ZAMORA 10",
  telefono: "0980208114",
  recepción: "30/11/20 10:00",
  entrega: "30/11/20 10:00",
  observaciones: "MA_10.000KM MRS",
  asesor: "ALEX ZAVALA",
  mailasesor: "azavala@casabaca.com",
  telefonoasesor: "0962987777"
};

// Convertir el objeto a una cadena JSON y guardar en localStorage
localStorage.setItem('datos', JSON.stringify(datosPrueba));

root.render(
  <React.StrictMode>
    <PDFGenerator />
  </React.StrictMode>
);