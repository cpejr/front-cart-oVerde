import { useState } from "react";
import {
  Container,
  Title,
  Filter,
  Characteristics,
  DivSelect,
  FilterTitle,
  UniSelect,
  StyledCheckbox,
  VerticalLine,
  DivLine,
  Line,
} from "./Styles";
import { SearchBar, GooglePayButton } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import { Checkbox } from "primereact/checkbox";

const cardData = [
  { _id: 1, title: "Card 1", description: "Descrição do Card 1" },
  { _id: 2, title: "Card 2", description: "Descrição do Card 2" },
];

export default function MyTrees() {
  const filters = [
    { label: "Melhor avaliados", value: "melhorAvaliados" },
    { label: "Favoritos", value: "favoritos" },
  ];

  const characteristicCheckboxes = [
    { label: "Característica 1" },
    { label: "Característica 2" },
    { label: "Característica 3" },
  ];

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <Title>ACERVO</Title>
      <SearchBar
        placeholder="Pesquisar"
        value={searchValue}
        search={handleSearchChange}
      />
      <Filter>
        <Characteristics>
          <FilterTitle>Características:</FilterTitle>
          {characteristicCheckboxes.map((checkbox, index) => (
            <label key={index}>
              <Checkbox />
              {checkbox.label}
            </label>
          ))}
        </Characteristics>
        <VerticalLine />
        <DivSelect>
          <UniSelect
            options={filters}
            optionLabel="label"
            placeholder="Ordenar Por"
          />
        </DivSelect>
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
        <GooglePayButton />
      </DivLine>
    </Container>
  );
}
