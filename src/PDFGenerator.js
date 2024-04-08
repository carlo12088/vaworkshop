import React from "react";
import logo from "./images/va.jpeg";
import styles from "./styles";
import {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Image,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
const Template = () => {

  const datosLocalStorage = JSON.parse(localStorage.getItem('datos'));

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableCell, styles.imageCell]}>
                <Image src={logo} style={styles.imageCabecera} />
              </View>
              <View style={styles.tableCellAddress}>
                <Text style={styles.textCabecera}>

                  Agencia:
                  <Text style={styles.text}> {datosLocalStorage ? datosLocalStorage.agencia : ''}</Text>
                </Text>
              </View>

              <View style={styles.tableCellAddress}>
                <Text style={styles.textCabecera}>
                  O/R:
                  <Text style={styles.text}> {datosLocalStorage ? datosLocalStorage.orden : ''}</Text>
                </Text>
              </View>

            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.textTitulo}>
                  DETALLE DE RECEPCIÓN DE VEHÍCULO
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.textsubtext}>Propietario:
                  <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.propietario : ''}</Text>
                </Text>
              </View>
            </View>

            <View style={[styles.tableRow, { backgroundColor: 'lightgrey' }]}>
              <View style={styles.tableCell}>
                <Text style={styles.textFondoGris}>
                  Datos de Vehiculo
                </Text>
              </View>
            </View>


            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Vehiculo:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.vehiculo : ''}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Placa:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.placa : ''}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Anio:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.anio : ''}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Chasis:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.chasis : ''}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.tableRow, { backgroundColor: 'lightgrey' }]}>
              <View style={styles.tableCell}>
                <Text style={styles.textFondoGris}>
                  Datos de Facturacion
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCellNew}>
                <View style={styles.tableRowNew}>
                  <View style={styles.tableCellNew}>
                    <Text style={styles.textsubtext}>Facturado:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.propietario : ''}</Text>
                  </View>
                  <View style={styles.tableCellNew}>
                    <Text style={styles.textsubtext}>Identificacion:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.identificacoin : ''}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCellNew}>
                    <Text style={styles.textsubtext}>Mail:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.mail : ''}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Telefono:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.telefono : ''}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Direccion:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.direccion : ''}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.tableRow, { backgroundColor: 'lightgrey' }]}>
              <View style={styles.tableCell}>
                <Text style={styles.textFondoGris}>
                  Datos de Recepcion y Entrega
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Fecha y hora de recepción:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.recepción : ''}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.textsubtext}>Fecha y hora de entrega:</Text>
                    <Text style={styles.textsubtextresult}> {datosLocalStorage ? datosLocalStorage.entrega : ''}</Text>
                  </View>
                </View>
              </View>
            </View>


            <View style={styles.tableRow}>
              <View style={styles.tableCell2}>
                <Text style={styles.TextSpace2}>REGISTRO DE LLAMADAS</Text>
                <View style={styles.table1}>
                  {/* Encabezados */}
                  <View style={styles.headerRow}>
                    <View style={styles.headerCell1}><Text style={styles.headerText}>FECHA</Text></View>
                    <View style={styles.headerCell1}><Text style={styles.headerText}>HORA</Text></View>
                    <View style={styles.headerCell1}><Text style={styles.headerText}>USUARIO (Nombre y Firma)</Text></View>
                    <View style={styles.headerCell1}><Text style={styles.headerText}>Verificación (f)</Text></View>
                  </View>
                  {/* Filas de datos */}
                  <View style={styles.row}>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                    <View style={styles.cell}><Text style={styles.cellText}></Text></View>
                  </View>
                </View>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.TextSpace2}>SINTOMAS PRESENTADOS</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.TextSpace}>OBSERVACIONES GENERALES</Text>
                <Text style={styles.TextSpace}> </Text>
                <Text style={styles.TextSpace}> </Text>
                <Text style={styles.TextSpace}> </Text>
                <Text style={styles.TextSpace}> </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell3}>
                <Text style={styles.TextSpace4}>AUTORIZACIÓN CLIENTE</Text>
                <Text>
                  1.- La presente autorización expresa que: Siendo el
                  propietario o actuando como representante del mismo estoy en
                  condiciones de autorizar los servicios anotados, así como
                  remplazo de las piezas que fueren pertinentes para la
                  ejecución de los mismos.
                </Text>
                <Text>
                  2.- El valor de la factura por toda la reparación o servicio
                  será cancelada de acuerdo a los términos y forma de pago, al
                  recibir el trabajo.
                </Text>
                <Text>
                  3.- Que después de 7 días de haberme comunicado VALLEJO ARAUJO
                  S.A. que los servicios requeridos han sido completamente
                  efectuados, se cargue $ 5.00 diarios por concepto de bodega.
                </Text>
                <Text>
                  4.- Cualquier reclamo relacionado con los servicios obtenidos
                  deberé presentarlo dentro de un plazo máximo de 10 días, a
                  contar de la fecha de recibidos estos.
                </Text>
                <Text>
                  5.- Autorizar al personal específico de VALLEJO ARAUJO S.A.
                  para que mi vehículo sea probado en la vía pública.
                </Text>
                <Text>
                  6.- Autorizar a VALLEJO ARAUJO S.A. para que envié a otros
                  talleres a hacer ciertas reparaciones especializadas que no se
                  efectúan regularmente en este taller.
                </Text>
                <Text>
                  7.- Exonerar de responsabilidad a VALLEJO ARAUJO S.A. por
                  cualquier demora causada por la dificultad de conseguir
                  repuestos o por demoras en el despacho de los mismos por el
                  proveedor.
                </Text>
                <Text>
                  8.- Exonerar a VALLEJO ARAUJO S.A. y a su personal de toda
                  responsabilidad, por pérdidas, robo, incendio o accidentes y
                  los riesgos que estén fuera de su control.{" "}
                </Text>
              </View>
              <View style={styles.tableCell}>
                <Image src={logo} style={styles.image} />
                <Text style={styles.headerCell}>Rotura, faltante, abolladura y raspones marcados con (X)</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>
                  Firma: ___________ Nombre:________________ C.I. Ó RUC:
                </Text>
                <Text>(No firmar sin no leer condiciones.)</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>INFORMACIÓN PARA EL CLIENTE</Text>
                <Text>
                  -Este comprobante certifica que hemos recibido su vehículo
                  para reparación o chequeo.
                </Text>
                <Text>
                  - El pago debe hacerse según los términos autorizados y
                  aceptados; si desea cancelar de otra manera debe ponerse en
                  contacto con VALLEJO ARAUJO S.A. antes de acercarse a retirar
                  el vehículo.
                </Text>
                <Text>
                  - Nuestro horario de atención es de lunes a viernes de 07h30 a
                  17h30, la hora máxima de entrega de vehículos es hasta las
                  17h30
                </Text>
                <Text>
                  - La caja atiende desde las 09h00 a 18h00,
                  ininterrumpidamente.
                </Text>
                <Text>- Sàbados desde las 07h30 a 12h30.</Text>
                <Text>
                  PROGRAMA TU CITA AL : 1800 -82 72 82 / Whastapp: 099 9667777
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>RECIBÍ EL VEHICULO A SATISFACCIÓN</Text>
                <Text>NOMBRE:__________________________</Text>
                <Text>C.I Ó RUC:_________________________</Text>
              </View>
              <View style={styles.tableCell}>
                <Text> </Text>
                <Text> </Text>
                <Text>FIRMA:___________________________</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Fecha:__________________</Text>
                <Text> </Text>
                <Text>________________________</Text>
                <Text>FIRMA DE RECEPCIONISTA:</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Componente principal que utiliza react-to-pdf para generar el PDF
const PDFGenerator = () => {
  return (
    <div>
      <PDFDownloadLink document={<Template />} fileName="archivo.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Generando PDF..." : "Descargar PDF"
        }
      </PDFDownloadLink>
      <PDFViewer width="1000" height="600">
        <Template />
      </PDFViewer>
    </div>
  );
};

export default PDFGenerator;