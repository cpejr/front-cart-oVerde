// Libs
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
// Components
import {
  Container,
  Title,
  CardsContainer,
} from "./Styles";
import { LargeCard, CartBuyBox, CartCard  } from "@components";
import { useGetTree } from "@hooks/querys/tree";

export default function CartPage() {

  /* Backend Calls
  const { data: collection, isLoading } = useGetTree({
    onSuccess: () => {},
    onError: (err) => {
      toast.error("Erro ao carregar itens", err);
    },
  });
  const [collections, setCollections] = useState([]);

  async function formatAllCollection() {
    let cardContent = collection;
    for (let content of cardContent) {
      content.buttonText = "R$ 99,99";
      content.link = "EDITE EM MyTrees.jsx " + content._id;
    }
    setCollections(cardContent);
  }

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading]); */

  return (
    <Container>
      <Title>CARRINHO DE COMPRAS</Title>
      <CartBuyBox value={"99,99"}/>

      <CardsContainer>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
      </CardsContainer>

    </Container>
  );
}
