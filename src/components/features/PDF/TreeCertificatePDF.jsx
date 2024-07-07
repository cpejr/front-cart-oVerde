// Libs
import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";
// Components
import montserratLight from "./fonts/Montserrat-Light.ttf";
import montserratSemiBold from "./fonts/Montserrat-SemiBold.ttf";

// Font Handling

Font.register({
  family: "Montserrat",
  fonts: [{ src: montserratLight, fontWeight: "normal" }],
});
Font.register({
  family: "Montserrat",
  fonts: [{ src: montserratSemiBold, fontWeight: "semibold" }],
});

// PDF Styles

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: "flex",
  },
  title: {
    fontSize: 24,
    textATextgn: "center",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  div: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    textATextgn: "justify",
  },
  section: {
    fontSize: 22,
    fontFamily: "Montserrat",
    fontWeight: 600,
  },
  header: {
    display: "flex",
    fontSize: 12,
    paddingBottom: 10,
    flexDirection: "row",
    textATextgn: "center",
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: 600,
    height: "auto",
    justifyContent: "flex-start",
    gap: 250,
  },
  image: {
    width: 200,
    height: 200,
  },
  item: {
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  space: {
    display: "flex",
    gap: 5,
  },
  collumn: {
    display: "flex",
    flexDirection: "column",
    gap: 13,
    alignItems: "flex-start",
    width: 370,
  },
  collumn2: {
    display: "flex",
    flexDirection: "column",
    gap: 70,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  hr: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  GreenCard: {
    width: 55,
    height: 35,
  },
  GreenCardDiv: {
    display: "grid",
    flexDirection: "row",
    gap: 4,
    height: 35,
  },
  GreenCardText: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    alignSelf: "center",
    //color: 'rgb(32, 54, 153)',
    fontSize: 15,
  },
});

export default function TreeCertificatePDF({ data }) {
  return (
    <Document
      fileName="Certificado.pdf"
      file="certificado.pdf"
      download="certificado.pdf"
    >
      <Page size="A4" style={styles.page}>
        <div style={styles.header}>
          <Text style={styles.title} fixed>
            Certificado de Posse de Árvore
          </Text>
        </div>
        <View style={styles.hr} fixed />
        <div style={styles.row}>
          <div style={styles.collumn}>
            <div style={styles.space}>
              <Text style={styles.text}>
                Este certificado confirma que {data?.id_user?.name} é o
                proprietário da árvore {data?.id_tree?.name}.
              </Text>
            </div>

            <div style={styles.space}>
              <Text style={styles.text}>
                Data da Aquisição: {new Date().toLocaleDateString()}
              </Text>
            </div>
          </div>
        </div>
      </Page>
    </Document>
  );
}
TreeCertificatePDF.propTypes = {
  data: PropTypes.object.isRequired,
};
