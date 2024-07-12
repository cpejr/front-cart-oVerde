import {Box, StyledButton } from './Styles';

export default function CartBuyBox({value}) {

    return (
        <Box>
            <h1>TOTAL: R$ {value}</h1>
            <StyledButton>FECHAR COMPRA</StyledButton>
        </Box>
    );
}