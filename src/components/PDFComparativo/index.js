import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import data from '../../jsonformatter.json';
import image from '../images/logo_header.png';

export default function PDF(props) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 10
    },
    section: {
      padding: 10
    },
    wrapper: {
      margin: 10,
      border: "1 solid #1c3362"
    },
    title: {
      fontSize: '22pt',
      fontWeight: 600,
      textAlign: 'center',
      color: "#1c3362",
      marginBottom: 12
    },
    information: {
      fontSize: "20pt",
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 8
    },
    price: {
      marginBottom: 12,
      color: '#1c3362',
      textAlign: 'center'
    },
    image: {
      display: 'block',
      marginHorizontal: 'auto',
      marginBottom: 15,
      width: '250px',
      height: '100px'
    }
  });

  function getPlanos() {
    if(props.data.length > 0 && props.range) {
      let planos = props.data;
      let total = 0;
  
      planos.map((index) => {
          total = getTotal(index.btxplano);
          index.preco = (total).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      })

      return planos;
    }
  }

  function getTotal(plano) {
    let dataPlano = data.tbl_preco.filter((index) => {
        return index.btxplano == plano;
    });

    let total = 0;
    for (var [key, value] of Object.entries(props.range)) {
        switch (key) {
            case "00 a 18":
                if (value > 0) {
                    total += dataPlano[0].preco[0] * value;
                }
                break;
            case "19 a 23":
                if (value > 0) {
                    total += dataPlano[0].preco[1] * value;
                }
                break;
            case "24 a 28":
                if (value > 0) {
                    total += dataPlano[0].preco[2] * value;
                }
                break;
            case "29 a 33":
                if (value > 0) {
                    total += dataPlano[0].preco[3] * value;
                }
                break;
            case "34 a 38":
                if (value > 0) {
                    total += dataPlano[0].preco[4] * value;
                }
                break;
            case "39 a 43": 
                if (value > 0) {
                    total += dataPlano[0].preco[5] * value;
                }
                break;
            case "44 a 48":
                if (value > 0) {
                    total += dataPlano[0].preco[6] * value;
                }
                break;
            case "49 a 53": 
                if (value > 0) {
                    total += dataPlano[0].preco[7] * value;
                }
            case "54 a 58":
                if (value > 0) {
                    total += dataPlano[0].preco[8] * value;
                }
                break;
            case "59 ou +":
                if (value > 0) {
                    total += dataPlano[0].preco[9] * value;
                }
            default:
                break;
        }
    }
    return total;
  }
  
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Image src={image} style={styles.image}/>
        {props.data.length > 0 && props.range
          ? getPlanos().map(planoInfo => (
                <View style={styles.wrapper} wrap={false}>
                    <View style={styles.section}>
                        <Text style={styles.title}>
                          {planoInfo.produto}
                        </Text>
                        <Text style={styles.information}>
                          Coparticipação: {planoInfo.coparticipacao}
                        </Text>
                        <Text style={styles.information}>
                          Acomodação: {planoInfo.acomodacao}
                        </Text>
                        <Text style={styles.information}>
                          Registro ANS: {planoInfo.registroans}
                        </Text>
                        <Text style={styles.information}>
                          Total:
                        </Text>
                        <Text style={styles.price}>
                          R$ {planoInfo.preco}
                        </Text>
                    </View>
                </View>
            )) 
          : "" }
      </Page>
    </Document>
  );
}