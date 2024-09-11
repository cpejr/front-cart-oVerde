/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { ModalStyle } from "./Styles";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { updateCollectionValidationSchema } from "./utils";
import { AiOutlineUpload } from "react-icons/ai";
import { useGlobalLanguage } from "../../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";

export default function ModalUpdateTree({
  close,
  handleTreeUpdate,
  id,
  values,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const inputs = [
    {
      type: "input",
      key: "name",
      placeholder: translations.textName,
      value: values.name,
    },
    {
      type: "input",
      key: "location",
      placeholder: translations.textLocation,
      value: values.location,
    },
    {
      type: "input",
      key: "description",
      placeholder: translations.textDescription,
      value: values.description,
    },

    {
      type: "number",
      key: "price1",
      placeholder: translations.textPrice,
      decimal: 2,
      value: values.price?.[0],
    },
    {
      type: "number",
      key: "price2",
      decimal: 2,
      placeholder: translations.textPrice,
      value: values.price?.[1],
    },
    {
      type: "number",
      key: "price3",
      decimal: 2,
      placeholder: translations.textPrice,
      value: values.price?.[2],
    },
    {
      type: "number",
      key: "total_quantity",
      placeholder: translations.textQuantity,
      value: values.total_quantity,
      decimal: 0,
    },
    {
      type: "archive",
      key: "archive",
      placeholder: translations.textArchive,
      values: values.archive?.map((archive) => ({
        name: archive.name,
        base64: undefined,
      })),
      icon: AiOutlineUpload,
    },
  ];

  function handleSubmit(data) {
    handleTreeUpdate(id, data);
    close();
  }

  return (
    <ModalStyle
      open={modal}
      onCancel={closeModal}
      width={500}
      height={250}
      padding={0}
      footer={null}
      closeIcon={modalCloseIcon}
      centered
      destroyOnClose
    >
      <FormSubmit
        inputs={inputs}
        onSubmit={handleSubmit}
        schema={updateCollectionValidationSchema}
        color={"#33603F"}
      ></FormSubmit>
    </ModalStyle>
  );
}

ModalUpdateTree.propTypes = {
  close: PropTypes.func.isRequired,
  handleTreeUpdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
};
