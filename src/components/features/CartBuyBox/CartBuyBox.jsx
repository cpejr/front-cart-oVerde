import {Box, StyledButton, PriceLabel } from './Styles';

export default function CartBuyBox({value}) {

    return (
        <Box>
            <PriceLabel>TOTAL: R$ {value}</PriceLabel>
            <StyledButton>FECHAR COMPRA</StyledButton>
        </Box>
    );
}