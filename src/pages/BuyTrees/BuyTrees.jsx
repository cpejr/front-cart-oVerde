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
} from "./Styles";
import { SearchBar, LargeCard } from "@components";
import { useGetTree } from "@hooks/querys/tree";

export default function BuyTrees() {
  // Select Data
  const filters = [
    { label: "Mais Recentes", value: "recent" },
    { label: "Mais Antigas", value: "older" },
    { label: "Mais baratas", value: "lowPrice" },
    { label: "Mais caras", value: "higherPrice" },
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
  console.log("COLLECTIONSSS");

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }
  }, [collection, isLoading]);

  useEffect(() => {
    if (collection) {
      formatAllCollection();
    }
  }, [order]);

  function formatAllCollection() {
    let cardContent = collection;
    console.log("COLLECTION");

    if (order == "recent") {
      cardContent = cardContent.reverse();
      console.log("Aqui no recent");
    } else if (order == "older") {
      cardContent;
      console.log("Aqui no older");
    } else {
      cardContent.sort(orderBy);
      console.log("Aqui no .sort");
    }

    for (let content of cardContent) {
      content.buttonText = "Comprar Certificado";
      content.link = "EDITE EM MyTrees.jsx " + content._id;
    }
    setCollections(cardContent);
    console.log("Aqui no setCollections");
  }

  function orderBy(a, b) {
    if (order == "lowPrice") {
      return b.price - a.price;
    } else if (order == "higherPrice") {
      return a.price - b.price;
    }
    console.log(a.price);
  }
  console.log("Aqui no orderby");
  console.log(order);

  async function buyTree(treeId) {
    // Buy Function needs to be implemented
    console.log(treeId);
  }

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading, order]);

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
