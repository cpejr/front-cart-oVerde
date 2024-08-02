// Libs
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
// Components
import {
  Container,
  Title,
  Filter,
  DivSelect,
  UniSelect,
  DivLine,
  Line,
  Terms,
  HighlightLink,
  LoadingSpinner,
} from "./Styles";
import { SearchBar, LargeCard } from "@components";
import { useGetTree } from "@hooks/querys/tree";
import { useCart } from "../../Stores/CartContext";
import ModalAcceptTerms from "../../components/features/modals/ModalAcceptTerms/ModalAcceptTerms";

export default function BuyTrees({ trees }) {
  //Context
  const { addToCart, isInCart } = useCart();

  // Select Data
  const filters = [
    { label: "Mais Recentes", value: "recent" },
    { label: "Mais Antigas", value: "older" },
    { label: "Mais baratas", value: "lowPrice" },
    { label: "Mais caras", value: "higherPrice" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Backend Calls
  const { data: collection, isLoading } = useGetTree({
    onSuccess: () => {},
    onError: (err) => {
      toast.error("Erro ao carregar itens", err);
    },
  });
  const [collections, setCollections] = useState([]);

  async function formatAllCollection() {
    setLoading(true);
    let cardContent = [...collection];
    console.log(cardContent);
    let cardContent2 = collection;
    console.log(cardContent2);
    if (order === "recent") {
      cardContent = cardContent.reverse();
    } else if (order === "older") {
      cardContent;
    } else {
      cardContent.sort(orderBy);
    }

    cardContent = cardContent.map((content) => ({
      ...content,
      buttonText: "Adicionar ao carrinho",
      link: "EDITE EM MyTrees.jsx " + content._id,
    }));

    setCollections(cardContent);
    setLoading(false);
  }

  function orderBy(a, b) {
    if (order === "lowPrice") {
      return a.price - b.price;
    } else if (order === "higherPrice") {
      return b.price - a.price;
    }
  }

  async function buyTree(treeId) {
    // Buy Function needs to be implemented
    console.log(treeId);
  }

  useEffect(() => {
    console.log("Loading State:", loading);
    if (!isLoading && collection) {
      formatAllCollection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading, order]);

  //Modal Acceptance Term
  const [modalAccept, setModalAccept] = useState(false);

  const openModalAccept = () => setModalAccept(true);
  const closeModalAccept = () => setModalAccept(false);

  return (
    <Container>
      <Title>COMPRAR ÁRVORES</Title>

      <Filter>
        <DivSelect>
          <SearchBar
            placeholder="Pesquisar"
            value={searchValue}
            search={handleSearchChange}
          />
        </DivSelect>
        <UniSelect
          options={filters}
          optionLabel="label"
          placeholder="Filtrar por"
          onChange={(e) => {
            setOrder(e.value);
          }}
        />{" "}
        {loading && <LoadingSpinner />}
      </Filter>
      {isLoading ? (
        <Title>Carregando</Title>
      ) : (
        <DivLine>
          {collections
            .filter((card) => !isInCart(card._id))
            .filter((card) =>
              card.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((card, index) => (
              <Line key={index}>
                <LargeCard data={card} onBuy={() => buyTree(card._id)} />
              </Line>
            ))}
        </DivLine>
      )}
    </Container>
  );
}
