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
import useAuthStore from "../../Stores/auth";
import { useGetCertificateByUser } from "@hooks/querys/certificate";

export default function MyTrees() {
  // States and Variables

  const userID = useAuthStore((state) => state?.auth?.user?._id);
  const [order, setOrder] = useState("active");
  const [certificateData, setCertificateData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  // Select Data

  const filters = [
    { label: "Válidos", value: "active" },
    { label: "Expirados", value: "expirated" },
  ];

  // Backend Calls

  const { data: personalCertificates, isLoading: isCertificatesLoading } =
    useGetCertificateByUser({
      id: userID,
      type: order,
      onError: (err) => {
        toast.error("Erro ao carregar itens", err);
      },
    });

  async function formatAllCollection() {
    let cardContent = personalCertificates;
    for (let content of cardContent) {
      content.buttonText = "Baixar Certificado";
    }
    setCertificateData(cardContent);
  }

  useEffect(() => {
    if (!isCertificatesLoading && personalCertificates) {
      formatAllCollection();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalCertificates, isCertificatesLoading]);

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
          value={order}
          onChange={(e) => {
            setOrder(e.value);
            formatAllCollection();
          }}
        />
      </Filter>
      {isCertificatesLoading && certificateData ? (
        <Title>Carregando</Title>
      ) : (
        <DivLine>
          {certificateData
            .filter((card) =>
              card?.id_tree?.name
                ?.toLowerCase()
                ?.includes(searchValue?.toLowerCase())
            )
            .map((card, index) => (
              <Line onClick={() => card} key={index}>
                <LargeCard data={card} />
              </Line>
            ))}
        </DivLine>
      )}
    </Container>
  );
}
