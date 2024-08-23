import PropTypes from "prop-types";

import {Certificated, Description, Name, Title} from './Styles'

const Certificate = ({ name, tree_description, certificate_description }) => {

  return (
      <Certificated id="certificated">
        <Title>CERTIFICADO DE POSSE DE ÁRVORE</Title>
        <Name>{ name }</Name>
        <Description>{ tree_description }</Description>
	<Description> { certificate_description }</Description>
      </Certificated>
  );
}

export default Certificate;

Certificate.propTypes = {
  name: PropTypes.string.isRequired,
  tree_description: PropTypes.string.isRequired,
  certificate_description: PropTypes.string.isRequired,
};
