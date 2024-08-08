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
import { SearchBar, LargeCard} from "@components";
import useAuthStore from "../../Stores/auth";
import { useGetCertificateByUser } from "@hooks/querys/certificate";
import { useGlobalLanguage } from '../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';
import generateCertificate from '../../services/generateCertificate';
import { Certificate } from "../../components";

export default function MyTrees() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });
  
  // States and Variables

  const userID = useAuthStore((state) => state?.auth?.user?._id);
  const [order, setOrder] = useState("active");
  const [loading, setLoading] = useState(false);
  const [certificateData, setCertificateData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  async function translateCollections(cardContent){
    if (globalLanguage != "PT"){
      for (let card of cardContent){
        card.name = await translateText(card.name, translateLanguage);
      }
    }
    setCertificateData(cardContent);
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
    setLoading(true);
    let cardContent = [...personalCertificates];
    console.log(cardContent);
    console.log(cardContent);
    let cardContent2 = personalCertificates;
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
      buttonText: "Baixar certificado",
      link: "EDITE EM MyTrees.jsx" + content._id,
    }));

    translateCollections(cardContent);
    setLoading(false);
  }

  function orderBy(a, b) {
    if (order === "active") {
      return a.price - b.price;
    } else if (order === "expired") {
      return b.price - a.price;
    }
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
              <>
              <Line onClick={() => card} key={index}>
                <Certificate name={card?.id_tree?.name} description={card?.id_tree?.description}/>
                <LargeCard id="card" data={card} onBuy={ () => generateCertificate() }/>
              </Line>
              
              </>
            ))}
        </DivLine>
      )}
      <button onClick={() => console.log(userID)}></button>
    </Container>
  );
}

