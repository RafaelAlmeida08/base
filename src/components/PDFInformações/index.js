import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import imageLogo from '../images/logo.png';
import imageContent from '../images/familia.jpg';
import imageFooter from '../images/logo_header.png';

export default function PDF(props) {
  const styles = StyleSheet.create({
    defaultPage: {
      backgroundColor: "#ffffff",
    },
    firstPage: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    wrapper: {
      backgroundColor: '#76BE8C',
      height: '400px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    logoWrapper: {
      width: '100%',
      height: '40%',
      backgroundColor: '#003663',
      borderTop: '14 solid #ffffff',
      borderBottom: '14 solid #ffffff'
    },
    logo: {
      width: '240px',
      height: '120px',
      display: 'block',
      marginHorizontal: 'auto',
      marginBottom: 0
    },  
    presentationText: {
      width: '100%',
      textAlign: 'center',
      color: '#003663',
      marginTop: 12
    },
    secondPage: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%'    
    },
    content: {
      width: '100%',
      height: '90%',
      display: 'flex',
      flexDirection: 'row'
    },
    contentWrapper: {
      width: '100%',
      height: '100%'
    },
    contentTextWrapper: {
      backgroundColor: '#003663',
      borderRadius: 50,
      width: '450px',
      height: '420px',
      marginTop: 70,
      marginLeft: 75,
      paddingHorizontal: 30,
      paddingVertical: 40
    },
    textTitle: {
      marginTop: 15,
      marginBottom: 45,
      fontWeight: 800,
      color: "#ffffff",
      fontSize: 20
    },
    textContent: {
      marginBottom: 20,
      color: '#ffffff'
    },
    imageContent: {
      width: '240px',
      height: '220px',
      marginTop: 80,
      marginLeft: -14,
      borderRadius: 20
    },
    footer: {
      width: '100%',
      height: '10%',
      display: 'flex',
      flexDirection: 'row-reverse'    
    },
    imageFooter: {
      width: '100px',
      height: '40px',
      marginRight: 12
    },
    demonstrationWrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    demonstrationHeader: {
      width: '100%',
      height: '5%'
    },
    demonstrationHeaderText: {
      color: '#003663',
      fontWeight: 700,
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10
    },
    demonstrationCardWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    demonstrationCard: {
      backgroundColor: '#003663',
      width: '45%',
      height: '450px',
      paddingHorizontal: 20,
      paddingVertical: 15,
      marginTop: 35,
      borderRadius: 20
    },
    demonstrationCardText: {
      color: '#fffffff',
      fontSize: 17,
      fontWeight: 600,
      marginBottom: 7
    },
    demonstrationCardTextFooter: {
      color: '#fffffff',
      fontSize: 17,
      fontWeight: 600,
      marginTop: 7,
      marginBottom: 7,
      textAlign: "center"
    },
    demonstrationFooter: {
      width:'100%',
      height: '60px',
      display: 'flex',
      flexDirection: 'row-reverse',
      position: "relative",
      alignSelf: 'flex-end',
      bottom: 0,
      marginTop: 10
    },
    text: {
      color: '#003663',
      fontSize: 17,
      fontWeight: 900,
      textAlign: 'center',
      marginBottom: 30
    },
    textWrapper: {
      paddingTop: 12,
      display: 'block',
      marginHorizontal: 'auto',
      marginVertical: 0,
      color: "#ffffff"
    },
    imageCenter: {
      width: '140px',
      height: '80px',
      display: 'block',
      marginHorizontal: 'auto',
    },
    imageCenterWrapper: {
      marginVertical: 10
    }
  });
  
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.defaultPage}>
        <View style={styles.firstPage}>
          <View style={styles.wrapper}>
            <View style={styles.logoWrapper}>
              <Image src={imageLogo} style={styles.logo}/>
            </View>
          </View>
          <Text style={styles.presentationText}>
            COTAÇÃO | PLANOS COLETIVOS POR ADESÃO
          </Text>
        </View>  
      </Page>
      <Page size="A4" orientation="landscape" style={styles.defaultPage}>
        <View style={styles.secondPage}>
          <View style={styles.content}>
            <View style={styles.contentTextWrapper}>
              <Text style={styles.textTitle}>
                 Olá, {props.dados.nome ? props.dados.nome : "Nome do Prospect"}
              </Text>
              <Text style={styles.textContent}>
                Somos a  TECSAÚDE. Uma parceira inovadora e tecnológica,  
                composta por profissionais com grande experiência e renome  
                no mercado de saúde.
              </Text>
              <Text style={styles.textContent}>
                Agradecemos  a oportunidade de poder oferecer, 
                planos de qualidade com ótimo custo benefício, 
                para você e para sua família. 
              </Text>
            </View>
            <View style={styles.imageContent}>
              <Image src={imageContent} style={styles.imageContent}/>
            </View>
          </View>
          <View style={styles.footer}>
            <Image src={imageFooter} style={styles.imageFooter}/>
          </View>
        </View>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.secondPage} wrap>
        <View style={styles.demonstrationWrapper}>
          <View style={styles.demonstrationHeader} fixed>
            <Text style={styles.demonstrationHeaderText}>
              RESUMO DA COTAÇÃO
            </Text>
          </View>
          <View style={styles.demonstrationCardWrapper} >
            { 
                <View style={styles.demonstrationCard} wrap={false}>
                  <Text style={styles.demonstrationCardText}>
                    PLANO: {props.plano.produto ? props.plano.produto : "Nome do Plano"}
                  </Text>
                  <Text style={styles.demonstrationCardText}>
                    REGISTRO ANS: {props.plano.registroans ? props.plano.registroans : "ANS"}
                  </Text>
                  <Text style={styles.demonstrationCardText}>
                    QUANTIDADE DE VIDAS: {props.vidas}
                  </Text>
                  <Text style={styles.demonstrationCardText}>
                    PRAÇA: {props.dados.praca}
                  </Text>
                  <Text style={styles.demonstrationCardText}>SEGMENTAÇÃO: {props.plano.segmentacao}</Text>
                  <Text style={styles.demonstrationCardText}>ABRANGÊNCIA: {props.plano.abrangencia}</Text>
                  <Text style={styles.demonstrationCardText}>COPARTICIPAÇÃO: {props.plano.coparticipacao}</Text>
                  <Text style={styles.demonstrationCardText}>ACOMODAÇÃO: {props.plano.acomodacao}</Text>
                  <Text style={styles.demonstrationCardText}>VALOR: {props.plano.valor}</Text>
                  <Text style={styles.demonstrationCardTextFooter}>RESUMO DE REDE</Text>
                </View>
              }
          </View>
            <View style={styles.demonstrationFooter} >
              <Image src={imageFooter} style={styles.imageFooter}/>
            </View>
        </View>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.secondPage}>
          <View style={styles.firstPage}>
              <View style={styles.wrapper}>
                <Text style={styles.text}>OBRIGADO POR ESCOLHER A TECSAÚDE</Text>
                <View style={styles.logoWrapper}>
                  <View style={styles.textWrapper}>                  
                    <Text style={styles.textCorretor}>Qualquer dúvida, entre em contato com nosso consultor:</Text>
                    <Text>Telefone: {props.dados.telefone_consultor}</Text>
                    <Text>Celular: {props.dados.celular_consultor}</Text>
                    <Text>E-mail: {props.dados.email_consultor}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.imageCenterWrapper}>
                <Image src={imageFooter} style={styles.imageCenter}/>
              </View>
            </View>
        </Page>
    </Document>
  );
}