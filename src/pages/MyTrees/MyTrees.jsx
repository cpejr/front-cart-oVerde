import React, { useRef, useState } from "react";
//import generatePDF, { Margin } from "react-to-pdf";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {
  Container,
  Content,
  Button,
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
  PdfArea
} from "./Styles";
import { SearchBar } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import { Checkbox } from "primereact/checkbox";
import TreeCertificatePDF from "../../components/features/PDF/TreeCertificatePDF.jsx";

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

  const recoverContentToPDF = () => document.getElementById("content-id");

  const PdfData = {
    name: "usuario",
    tree: "árvore",
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
      </DivLine>
      <PdfArea>
        <PDFDownloadLink
          document={<TreeCertificatePDF data={PdfData} />}
          filename="certificate.pdf"
        >
            <Button> Download PDF </Button>
        </PDFDownloadLink>
      </PdfArea>
    </Container>
  );
}