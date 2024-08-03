import {Box, StyledButton, PriceLabel } from './Styles';

import PropTypes from 'prop-types';

export default function CartBuyBox({value}) {

    return (
        <Box>
            <PriceLabel>TOTAL: R$ {value}</PriceLabel>
            <StyledButton>FECHAR COMPRA</StyledButton>
        </Box>
    );
}

CartBuyBox.propTypes = {
    value: PropTypes.double,
};