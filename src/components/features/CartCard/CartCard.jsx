import { Box, DeleteIcon, Description, Name, Price, Image } from "./Styles";
import { Delete, Tree } from "@assets/index";

import PropTypes from "prop-types";
import { useCart } from "../../../Stores/CartContext";
export default function CartCard({ data }) {
  const { removeFromCart } = useCart();
  function removeTree() {
    removeFromCart(data._id);
  }

  return (
    <Box>
      <DeleteIcon src={Delete} onClick={removeTree}></DeleteIcon>
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
