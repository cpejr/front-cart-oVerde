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
  LoadingSpinner,
} from "./Styles";
import { SearchBar, LargeCard } from "@components";
import { useGetTree } from "@hooks/querys/tree";
import { useGlobalLanguage } from '../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function BuyTrees() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  // Select Data
  const filters = [
    { label: translations.labelRecent, value: "recent" },
    { label: translations.labelOld, value: "older" },
    { label: translations.labelCheap, value: "lowPrice" },
    { label: translations.labelExpensive, value: "higherPrice" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Backend Calls
  const { data: collection, isLoading } = useGetTree({
    onSuccess: () => {},
    onError: (err) => {
      toast.error(translations.loadingErrorMessage, err);
    },
  });
  const [collections, setCollections] = useState([]);

  async function formatAllCollection() {
    setLoading(true);
    let cardContent = [...collection];
    console.log(cardContent);
    let cardContent2 = collection;
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
      buttonText: translations.textButton,
      link: "EDITE EM MyTrees.jsx " + content._id,
    }));

    setCollections(cardContent);
    setLoading(false);
  }

  function orderBy(a, b) {
    if (order === "lowPrice") {
      return a.price - b.price;
    } else if (order === "higherPrice") {
      return b.price - a.price;
    }
  }

  async function buyTree(treeId) {
    // Buy Function needs to be implemented
    console.log(treeId);
  }

  useEffect(() => {
    console.log("Loading State:", loading);
    if (!isLoading && collection) {
      formatAllCollection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading, order]);

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
          placeholder={translations.placeholderFilter}
          onChange={(e) => {
            setOrder(e.value);
          }}
        />{" "}
        {loading && <LoadingSpinner />}
      </Filter>
      {isLoading && collections ? (
        <Title>{translations.loadingTitle}</Title>
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
