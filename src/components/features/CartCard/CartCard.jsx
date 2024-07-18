import { Box, DeleteIcon, Description, Name, Price, Image } from "./Styles";
import {Delete, Tree} from "@assets/index";

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