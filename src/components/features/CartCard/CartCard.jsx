import { Box, DeleteIcon, Description, Name, Price, Image } from "./Styles";
import {Delete, Tree} from "@assets/index";

export default function CartCard() {


    return (
        <Box>
            <DeleteIcon src={Delete}></DeleteIcon>
            <Image src={Tree}></Image>
            <Name>Nome</Name>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.</Description>
            <Price>R$ 99,99</Price>
        </Box>
    );
}