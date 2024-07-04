import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Filter,
  DivSelect,
  UniSelect,
  DivLine,
  Line,
} from "./Styles";
import { toast } from "react-toastify";
import { SearchBar } from "../../components";
import { useGetTree } from "../../hooks/querys/tree";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import axios from "axios";

export default function BuyTrees() {
  const filters = [
    { label: "Mais Recentes", value: "data" },
    { label: "Preço", value: "price" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [order, setOrder] = useState("data");
  const [collections, setCollections] = useState([]);

  //backend calls
  const { data: collection, isLoading } = useGetTree({
    onSuccess: () => {},
    onError: (err) => {
      toast.error("Erro ao carregar itens", err);
    },
  });

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

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

  const buyTree = async (treeId) => {
    try {
      const userId = `${userId}`; // Substitua pelo ID do usuário logado
      const response = await axios.post(
        `/api/users/${userId}/buyTree/${treeId}`
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Erro ao comprar a árvore!", error.response.data.message);
    }
  };

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading]);

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
    </Container>
  );
}
