/* eslint-disable react/react-in-jsx-scope */
// Components
import { Container, Title, CardsContainer, StyledSelect } from "./Styles";
import { CartCard } from "@components";
import CartBuyBox from "./CartBuyBox";
import { useCart } from "../../Stores/CartContext";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextCart } from "./Translation";
import { useState } from "react";

export default function CartPage() {
  const { cartItems: data } = useCart();
  const [year, setYear] = useState(0);
  //translation
  const globalLanguage = useGlobalLanguage();
  const translations = TranslateTextCart(globalLanguage);
  const calculateTotalPrice = (data) => {
    const total = data.reduce(
      (total, tree) => total + tree.price[year] * tree.quantity,
      0
    );
    return total.toFixed(2);
  };

  let options = [
    { value: 0, label: "1" },
    { value: 1, label: "2" },
    { value: 2, label: "3" },
  ];
  return (
    <Container>
      <Title>{translations.title}</Title>

      <CartBuyBox value={calculateTotalPrice(data)} year={year} />
      <StyledSelect
        options={options}
        onChange={(e) => setYear(e)}
        placeholder="Quantidade de anos que quer a arvore"
      ></StyledSelect>
      <CardsContainer>
        {data.map((tree, index) => (
          <CartCard key={index} data={tree} index={year} />
        ))}
      </CardsContainer>
    </Container>
  );
}
