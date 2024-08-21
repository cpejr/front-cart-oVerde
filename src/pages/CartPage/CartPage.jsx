// Components
import { Container, Title, CardsContainer } from "./Styles";
import { CartCard } from "@components";
import CartBuyBox from "./CartBuyBox";
import { useCart } from "../../Stores/CartContext";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextCart } from "./translation";

export default function CartPage() {
  const { cartItems: data } = useCart();

  //translation
  const globalLanguage = useGlobalLanguage();
  const translations = TranslateTextCart(globalLanguage);

  const calculateTotalPrice = (data) => {
    const total = data.reduce((total, tree) => total + tree.price, 0);
    return total.toFixed(2);
  };

  return (
    <Container>
      <Title>{translations.title}</Title>
      <CartBuyBox value={calculateTotalPrice(data)} />
      <CardsContainer>
        {data.map((tree, index) => (
          <CartCard key={index} data={tree} />
        ))}
      </CardsContainer>
    </Container>
  );
}
