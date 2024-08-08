import React from 'react';
import PropTypes, { func } from "prop-types";

import {Certificated, Description, Name, Title} from './Styles'

const Certificate = ({ name, description }) => {

  console.log(description);
  return (
      <Certificated id="certificated">
        <Title>CERTIFICADO DE POSSE DE ÁRVORE</Title>
        <Name>{ name }</Name>
        <Description>{ description }</Description>
      </Certificated>
  );
}

export default Certificate;

Certificate.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};