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
} from "./Styles";
import { SearchBar, LargeCard } from "@components";
import { useGetTree } from "@hooks/querys/tree";
import ModalAcceptTerms from "../../components/features/modals/ModalAcceptTerms/ModalAcceptTerms";

export default function BuyTrees() {
  // Select Data
  const filters = [
    { label: "Mais Recentes", value: "data" },
    { label: "Preço", value: "price" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [order, setOrder] = useState("data");
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
    let cardContent = collection;
    cardContent.sort(orderBy);
    for (let content of cardContent) {
      content.buttonText = "Comprar Certificado";
      content.link = "EDITE EM MyTrees.jsx " + content._id;
    }
    setCollections(cardContent);
  }

  async function orderBy(a, b) {
    if (order == "price") {
      if (a.price >= b.price) {
        return -1;
      } else {
        return 1;
      }
    }
  }

  async function buyTree(treeId) {
    // Buy Function needs to be implemented
    console.log(treeId);
  }

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading]);

  //Modal Acceptance Term
  const [ModalAccept, SetModalAccept] = useState(false);

  const toggleModal = () => {
    SetModalAccept(!ModalAccept);
  };

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
          placeholder="Ordenar Por"
          onChange={(e) => {
            setOrder(e.value);
            formatAllCollection();
          }}
        />
      </Filter>
      {isLoading && collections ? (
        <Title>Carregando</Title>
      ) : (
        <DivLine>
          {collections
            .filter((card) =>
              card.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .sort(orderBy)
            .map((card, index) => (
              <Line key={index}>
                <LargeCard data={card} onBuy={() => buyTree(card._id)} />
              </Line>
            ))}
        </DivLine>
      )}

      <Terms>
        <p>
          Leia nosso termo de aceite clicando{" "}
          <HighlightLink onClick={toggleModal}>aqui!</HighlightLink>
        </p>
      </Terms>
      <ModalAcceptTerms modal={ModalAccept} onClose={toggleModal} />
    </Container>
  );
}
