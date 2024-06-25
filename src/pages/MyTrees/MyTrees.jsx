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

export default function MyTrees() {
  const filters = [
    { label: "Mais Recentes", value: "data" },
    { label: "Preço", value: "price" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [order, setOrder] = useState("data");
  const [collections, setCollections] = useState([]);

  //backend calls
  const { data: collection, isLoading } = useGetTree({
    onSuccess: () => {
      console.log(collection);
    },
    onError: (err) => {
      toast.error("Erro ao carregar itens", err);
    },
  });

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchPurchasedTrees = async () => {
    try{
      const response = await axios.get("/api/user/purchasedTrees/${userId}");
      const data = Array.isArray(response.data) ? response.data : [];
      setCollections(data);
    } catch(err) {
      toast.error("Erro ao carregar itens", err);
    }
  }

  async function formatAllCollection() {
    let cardContent = collection;
    cardContent.sort(orderBy);
    for (let content of cardContent) {
      content.buttonText = "Baixar Certificado";
      content.link = "EDITE EM MyTrees.jsx " + content._id;
    }
    console.log(cardContent);
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

  useEffect(() => {
    fetchPurchasedTrees();
  }, []);

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading]);

  return (
    <Container>
      <Title>MINHAS ÁRVORES</Title>

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
          onChange={(e) => {setOrder(e.value);formatAllCollection();}}
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
                <LargeCard data={card} />
              </Line>
            ))
          }
        </DivLine>
      )}
    </Container>
  );
}
