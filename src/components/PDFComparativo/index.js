import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

export default function PDF(props) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    },
    section: {
      padding: 10
    },
    wrapper: {
      margin: 10,
      border: "1px solid #81d742"
    },
    image: {
      display: 'block',
      marginHorizontal: 'auto',
      marginVertical: '0',
      width: '100px',
      height: '100px'
    },
    title: {
      fontSize: '22pt',
      fontWeight: 600,
      textAlign: 'center'
    }
  });
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {props.data.length > 0
          ? props.data.map(planoInfo => (
                <View style={styles.wrapper}>
                    <View style={styles.section}>
                        <Text style={styles.title}>
                            {planoInfo.nome}
                        </Text>
                        <Text style={styles.title}>
                            {planoInfo.total}
                        </Text>
                    </View>
                </View>
            )) 
          : "" }
      </Page>
    </Document>
  );
}