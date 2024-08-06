import PropTypes from "prop-types";
import { useGetCategoryType } from "../../../hooks/querys/categoryType";
import { useGetCategoryPrice } from "../../../hooks/querys/categoryPrice";
import { toast } from "react-toastify";
import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
} from "./Styles";
import { useGlobalLanguage } from '../../../Stores/globalLanguage';
import { TranslateTextHeader } from './Translations';

export default function FilterArea({
  types,
  setTypes,
  prices,
  setPrices,
  filter,
  setFilter,
  setArray,
  setNames,
}) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  // Set variables
  const { data: categoryType } = useGetCategoryType({
    onError: (err) => {
      toast.error(err);
    },
  });
  const { data: categoryPrice } = useGetCategoryPrice({
    onError: (err) => {
      toast.error(err);
    },
  });
  const filters = [
    { label: translations.textDate, value: "date" },
    { label: translations.textName, value: "name" },
  ];
  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };
  const handleFilterChange = () => {
    const newArray = [...prices, ...types];
    setArray(newArray);
  };
  const handleResetFilter = () => {
    setTypes([]);
    setPrices([]);
    setFilter([]);
    setArray([]);
    setNames([]);
  };

  return (
    <ContainerFilter>
      <DivSelect>
        <MultipleSelect
          value={types}
          onChange={(e) => setTypes(e.value)}
          options={transformArrayItems(categoryType)}
          optionLabel="label"
          placeholder={translations.placeholderType}
          className="w-full md:w-20rem"
          filter
        />
        <MultipleSelect
          value={prices}
          onChange={(e) => setPrices(e.value)}
          options={transformArrayItems(categoryPrice)}
          optionLabel="label"
          placeholder={translations.placeholderPrice}
          className="w-full md:w-20rem"
          filter
        />

        <UniSelect
          value={filter}
          onChange={(e) => setFilter(e.value)}
          options={filters}
          optionLabel="label"
          showClear
          placeholder={translations.placeholderOrder}
          className="w-full md:w-14rem"
        ></UniSelect>
      </DivSelect>
      <ButtonsDiv>
        <Buttons onClick={handleFilterChange}>{translations.buttonFilter}</Buttons>
        <Buttons onClick={handleResetFilter}>{translations.buttonClear}</Buttons>
      </ButtonsDiv>
    </ContainerFilter>
  );
}

FilterArea.propTypes = {
  onFilterClick: PropTypes.func,
  setArray: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  setTypes: PropTypes.func.isRequired,
  prices: PropTypes.array.isRequired,
  setPrices: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.array.isRequired,
  setNames: PropTypes.func.isRequired,
  filterReset: PropTypes.func,
};
