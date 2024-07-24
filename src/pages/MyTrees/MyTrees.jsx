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
import { useGlobalLanguage } from '../../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function MyTrees() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });
  
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
    { label: translations.labelValid, value: "active" },
    { label: translations.labelExpired, value: "expirated" },
  ];

  // Backend Calls

  const { data: personalCertificates, isLoading: isCertificatesLoading } =
    useGetCertificateByUser({
      id: userID,
      type: order,
      onError: (err) => {
        toast.error(translations.toastLoadingItensError, err);
      },
    });

  async function formatAllCollection() {
    let cardContent = personalCertificates;
    for (let content of cardContent) {
      content.buttonText = translations.buttonLoadCertificate;
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
      <Title>{translations.pageTitle}</Title>

      <Filter>
        <DivSelect>
          <SearchBar
            placeholder={translations.placeholderSearch}
            value={searchValue}
            search={handleSearchChange}
          />
        </DivSelect>
        <UniSelect
          options={filters}
          optionLabel="label"
          placeholder={translations.placeholderOrder}
          value={order}
          onChange={(e) => {
            setOrder(e.value);
            formatAllCollection();
          }}
        />
      </Filter>
      {isCertificatesLoading && certificateData ? (
        <Title>{translations.loading}</Title>
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
