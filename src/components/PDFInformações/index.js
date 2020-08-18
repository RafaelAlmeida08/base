import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
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
  
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Image src={image} style={styles.image}/>
        {
                <View style={styles.wrapper} wrap={false}>
                    <View style={styles.section}>
                        <Text style={styles.title}>
                          {props.data.produto}
                        </Text>
                        <Text style={styles.information}>
                          Coparticipação: {props.data.coparticipacao}
                        </Text>
                        <Text style={styles.information}>
                          Acomodação: {props.data.acomodacao}
                        </Text>
                        <Text style={styles.information}>
                          Registro ANS: {props.data.registroans}
                        </Text>
                        <Text style={styles.information}>
                          Total:
                        </Text>
                        <Text style={styles.price}>
                          R$ {props.data.preco}
                        </Text>
                    </View>
                </View>
            
          }
      </Page>
    </Document>
  );
}