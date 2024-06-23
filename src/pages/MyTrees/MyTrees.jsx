import { useState } from "react";
import {
  Container,
  Title,
  Filter,
  DivSelect,
  UniSelect,
  DivLine,
  Line,
} from "./Styles";
import { SearchBar } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";

const cardData = [
  { _id: 1, title: "Card 1", description: "Descrição do Card 1", link:"google.com", buttonText:"Comprar certificado" },
  { _id: 2, title: "Card 2", description: "Descrição do Card 2", link:"google.com", buttonText:"Comprar certificado" },
];

export default function MyTrees() {
  const filters = [
    { label: "Mais Recentes", value: "data" },
    { label: "Quantidade", value: "quantity" },
  ];

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <Title>ACERVO</Title>

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
        />
      </Filter>
      <DivLine>
        {cardData
          .filter((card) =>
            card.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((card, index) => (
            <Line key={index}>
              <LargeCard data={card} />
            </Line>
          ))}
      </DivLine>
    </Container>
  );
}
