import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#bfbfbf",
    marginBottom: 2,
  },
  tableRowNew: {
    flexDirection: "row",
    marginBottom: 2,
  },
  tableCell: {
    flex: 1,
    padding: 1,
    fontSize: 6,
    marginBottom: 2,
  },
  tableCellNew: {
    flex: 1,
    fontSize: 6,
  },
  tableCell2: {
    flex: 1,
    padding: 1,
    fontSize: 6,
    marginBottom: 1,
    borderRight: 1,
  },
  tableCell3: {
    flex: 1,
    padding: 1,
    fontSize: 6,
    marginBottom: 1,
    border: 1,
    fontSize: 8,
  },
  tableCellAddress: {
    flex: 1,
    padding: 10,
    fontSize: "6px",
  },
  imageCell: {
    textAlign: "center",
    padding: 0,
    width: 10,
  },
  image: {
    width: 125, // Ancho de la imagen
    height: 50, // Alto de la imagen
  },
  imageCabecera: {
    width: "100%", // Ancho de la imagen
    height: "auto", // Alto de la imagen
  },
  headerCell: {
    textAlign: "center",
  },
  table1: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0', // Color de fondo para el encabezado
  },
  row: {
    flexDirection: 'row',
  },
  headerCell1: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 6,
    fontWeight: 'bold',
  },
  cellText: {
    fontSize: 6,
  },
  TextSpace: {
    marginBottom: 2,
  },
  TextSpace1: {
    marginBottom: 3,
  },
  TextSpace2: {
    padding: 4,
    marginBottom: 3,
    fontWeight: 'bolder',
  },
  TextSpace4: {
    marginBottom: 3,
    textAlign: 'center',
  },
  textCabecera: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: 'black',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: 'black',
  },
  textTitulo: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: 'black',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textFondoGris: {
    fontSize: 8,
    fontFamily: 'Helvetica',
    color: 'black',
    marginTop: 5,
    marginLeft: 5
  },
  textsubtext: {
    fontSize: "9pt",
    fontFamily: 'Helvetica',
    color: 'black',
    fontWeight: 'bold',
  },
  textsubtextresult: {
    fontSize: "7pt",
    fontFamily: 'Helvetica',
    color: 'black',
  },
});

export default styles;
