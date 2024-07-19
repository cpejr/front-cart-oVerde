import { Box, DeleteIcon, Description, Name, Price, Image } from "./Styles";
import {Delete, Tree} from "@assets/index";

import PropTypes from 'prop-types';

export default function CartCard({data}) {

    return (
        <Box>
            <DeleteIcon src={Delete}></DeleteIcon>
            <Image src={Tree}></Image>
            <Name>{data?.name}</Name>
            <Description>{data?.description}</Description>
            <Price>R$ {data?.price}</Price>
        </Box>
    );
}

CartCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.double, 
    }),
};