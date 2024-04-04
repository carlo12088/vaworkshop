import React from 'react';
import logo from './images/va.jpeg'
import { PDFViewer, PDFDownloadLink, Document, Image, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const Template = () => {
    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCell, styles.imageCell]}>
                                <Image src={logo} style={styles.image} />
                            </View>
                            <View style={styles.tableCellAddress}>
                                <Text>QUITO MATRIZ:Av.Occidental N52-120 y Av.La Florida Telefono:(02)3959060</Text>
                                <Text>GUAYAQUIL SUCURSAL:Av.Carlos Julio Arosemena Km.1 Telefono:(04)2590840</Text>
                                <Text>MANTA SUCURSAL:Ciudadela Umiña Via de Circunvalación junto a Tecnicentro Nitroauto Telefono: :(05)3700383</Text>
                                <Text>PORTOVIEJO SUCURSAL:Av.Metropolitan a Km 1.5 via a Manta junto a Ediasa Telefono:(05)3701575</Text>
                                <Text>PBX:1800827282 www.vallejoaraujo.com</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>1800-827282 Opción 1</Text>
                                <Text>VALLEJO ARAUJO S.A</Text>
                                <Text>ORDEN DE TRABAJO TALLER</Text>
                                <Text>BODEGA:    ROMBO:</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 3</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Celda 4</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 5</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 6</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Celda 7</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 8</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 9</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Celda 10</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 11</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 12</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Celda 13</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 14</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 15</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Celda 16</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 17</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 18</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Celda 19</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 20</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 21</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Celda 22</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 23</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Celda 24</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

// Estilos CSS para el PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf'
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#bfbfbf'
    },
    tableCell: {
        flex: 1,
        padding: 1,
        fontSize: 6
    },
    tableCellAddress: {
        flex: 1,
        padding: 5,
        fontSize: "6px"
    },
    imageCell: {
        textAlign: 'center',
        padding: 0,
        width:10
    },
    image: {
        width: 50, // Ancho de la imagen
        height: 50 // Alto de la imagen
    }
});

// Componente principal que utiliza react-to-pdf para generar el PDF
const PDFGenerator = () => {
    return (
        <div>
            <PDFDownloadLink document={<Template />} fileName="archivo.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Generando PDF...' : 'Descargar PDF'
                }
            </PDFDownloadLink>
            <PDFViewer width="1000" height="600">
                <Template />
            </PDFViewer>
        </div>
    );
};

export default PDFGenerator;
