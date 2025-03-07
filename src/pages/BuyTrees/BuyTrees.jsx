/* eslint-disable react/react-in-jsx-scope */
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
import { useCart } from "../../Stores/CartContext";

import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import translateText from "../../services/translateAPI";
import PropTypes from "prop-types";

// Context

export default function BuyTrees() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  // Transformamos a linguagem para minúscula para a função de tradução
  const translateLanguage = globalLanguage.toLowerCase();

  const { isInCart } = useCart();
  const [collections, setCollections] = useState([]);

  async function translateCollections(cardContent) {
    if (globalLanguage !== "PT") {
      for (let card of cardContent) {
        // Garante que `card.name` exista antes de traduzir
        if (card?.name) {
          card.name = await translateText(card.name, translateLanguage);
        }
      }
    }
    setCollections(cardContent);
  }

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

  async function formatAllCollection() {
    setLoading(true);
    let cardContent = [...(collection || [])];

    if (order === "recent") {
      // Inverte a ordem, exibindo mais recentes primeiro
      cardContent = cardContent.reverse();
    } else if (order === "older") {
      // Mantém a ordem original
      cardContent;
    } else {
      // Ordena por preço (crescente ou decrescente)
      cardContent.sort(orderBy);
    }

    // Adiciona dados extras nos cards
    cardContent = cardContent.map((content) => ({
      ...content,
      buttonText: translations.buttonText,
      link: "EDITE EM MyTrees.jsx " + content._id,
    }));

    // Traduz os campos, se necessário
    await translateCollections(cardContent);
    setLoading(false);
  }

  function orderBy(a, b) {
    if (order === "lowPrice") {
      return a.price - b.price;
    } else if (order === "higherPrice") {
      return b.price - a.price;
    }
  }

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading, order, globalLanguage]);

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
        />
        {loading && <LoadingSpinner />}
      </Filter>

      {isLoading && collections ? (
        <Title>{translations.loadingTitle}</Title>
      ) : (
        <DivLine>
          {collections
            .filter((card) => {
              // 1) Garante que 'card?.name' seja uma string
              const cardName = card?.name ?? "";
              // 2) Garante que 'searchValue' seja string (já inicializamos com "")
              const searchStr = searchValue ?? "";
              // 3) Faz o filtro sem erro, usando toLowerCase() em strings válidas
              return cardName.toLowerCase().includes(searchStr.toLowerCase());
            })
            .map((card, index) => {
              // Ajusta card se já está no carrinho
              const adjustedCard = isInCart(card);

              return (
                <Line key={index}>
                  <LargeCard pageType="buytrees" data={adjustedCard} />
                </Line>
              );
            })}
        </DivLine>
      )}
    </Container>
  );
}

BuyTrees.propTypes = {
  trees: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};
