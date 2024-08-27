import React from "react";
import PropTypes from "prop-types";

import {Certificated, Description, Name, Title, Text, Heading, Footer} from './Styles'

const Certificate = ({ card }) => {

  return (
      <Certificated id="certificated">
        <Title>Certificado de Concessão Temporária de Árvore</Title>
        <Title>Cartão Verde Floresta em Pé</Title>
      
        <Heading>
          <Text>Nome do Cliente: { card?.id_user?.name }</Text>
          <Text>Número do Certificado: { card?._id }</Text>
          <Text>Data de Emissão: { card?.createdAt }</Text>
          <Text>Localização da Árvore: { card?.id_tree?.location }</Text>
          </Heading>

        <Text>
        Certificamos que { card?.id_user?.name } é o detentor da concessão temporária de uma árvore localizada na área de reserva ambiental [Nome da Reserva] [Número da Quadra] { card?.id_tree?._id }. Ela estará sob sua proteção pelo período de [Período de Concessão] meses/anos. Durante este período, a árvore permanecerá em pé, contribuindo para a preservação do ecossistema local.
        </Text>
        <Text>
        Este certificado é uma prova do compromisso do cliente com a sustentabilidade e a conservação da biodiversidade.
        </Text>
        <Text>
        Termos da Concessão:
        </Text>
        <Text>
        A concessão é válida pelo período especificado, após o qual poderá ser renovada.
        A árvore permanecerá em seu local natural, sem possibilidade de remoção ou exploração.
        O cliente tem o direito de visitar a árvore mediante agendamento prévio.
        A Cartão Verde Floresta em Pé garante a preservação e o monitoramento da árvore durante todo o período de concessão.
        Agradecemos por apoiar a preservação da nossa floresta e contribuir para um futuro mais sustentável.


        </Text>

        <Footer>
          <Text>
          Assinatura:
          </Text>
          <Text>
          [Nome do Representante]
          Cartão Verde Floresta em Pé
          </Text>
          <Text>
          Contato:
          </Text>
          <Text>
          E-mail: cartaoverde7@gmail.com
          </Text>
          <Text>
          Telefone: [Telefone de Contato]
          </Text>
          <Text>
          Website: cartaoverdeflorestaempe.com.br
          </Text>

        </Footer>

      </Certificated>
  );
}

export default Certificate;


