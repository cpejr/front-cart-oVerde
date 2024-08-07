import PropTypes from "prop-types";
import { TableShape, TableColumn } from "./Styles";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateText } from './Translations';

export default function Table({ columns, data }) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  return (
    <TableShape
      value={data}
      paginator
      rows={10}
      removableSort
      scrollable
      scrollHeight="1000px"
      emptyMessage={translations.message}
    >
      {columns.map((data) => (
        <TableColumn
          key={data?.field}
          field={data?.field}
          header={data?.header}
        />
      ))}
    </TableShape>
  );
}
Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
