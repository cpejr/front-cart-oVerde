import React from "react";
import Header from "../../components/features/layout/Header/Header";
import Footer from "../../components/features/layout/Footer/Footer";
import { Button } from "../../components";
import { BomDespachoImageSupportPage, QRCodeImage, WhatsAppIcon } from "../../assets";
import { 
  Container, 
  HeaderArea, 
  Image,
  Title, 
  SubTitle,
  TextArea,
  Text1,
  Text2,
  DonationArea,
  QRCodeArea,
  QRCodeAndText,
  QRCode,
  QRCodeText,
  WhatsAppButtonArea,
  WhatsAppImage,
  ButtonText,
  Redirecionar,
  FooterArea
} from "./Styles";

export default function Support() {

  return(
    <Container>
      <HeaderArea>
        <Header />
      </HeaderArea>
  
      <Image src={BomDespachoImageSupportPage} alt="SupportPageBomDespachoImage"/>  

      <Title>
        APOIE O PROJETO NOSSA HISTÓRIA
      </Title>
      <TextArea>
        <Text1>
          A principal forma de nos apoiar é participando do projeto, ajudando na pesquisa história, enviando vídeos, fotografias, documentos que contam a nossa história. Contribua, compartilhe, divulge!
        </Text1>
        <Text2>
          Você também pode ajudar a manter vivo esse trabalho de preservação da memória de Bom Despacho fazendo uma doação!
        </Text2>
      </TextArea>
      <DonationArea>
        <QRCodeArea>
          <SubTitle>
            PARA DOAR:
          </SubTitle>
          <QRCodeAndText>
            <QRCode src={QRCodeImage} alt="Qr Code"/>
            <QRCodeText>
              Escaneie o código ao lado ou faça um pix para 123.321.123
            </QRCodeText>
          </QRCodeAndText>
        </QRCodeArea>
        <WhatsAppButtonArea>
          <SubTitle>
            PARA CONTRIBUIR:
          </SubTitle>
          <Redirecionar href="https://wa.me/+5531975293805">
            <Button 
              width="70%" 
              flexDirection="row"
              paddingLeft="0.7rem"
              paddingRight="0.7rem"
            >
              <WhatsAppImage src={WhatsAppIcon} alt="WhatsAppIcon"/>
              <ButtonText>
                Entre em contato pelo WhatsApp
              </ButtonText>
            </Button>
          </Redirecionar>
        </WhatsAppButtonArea>
      </DonationArea>
      <FooterArea>
        <Footer /> 
      </FooterArea>
    </Container>
  )
}