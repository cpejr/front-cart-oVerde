import PropTypes from "prop-types";
import { ModalStyle } from "./Styles";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { updateCollectionValidationSchema } from "./utils";
import { AiOutlineUpload } from "react-icons/ai";

export default function ModalUpdateTree({
  close,
  handleTreeUpdate,
  id,
  values,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  const inputs = [
    {
      type: "input",
      key: "name",
      placeholder: "Mudar Nome",
      value: values.name,
    },
    {
      type: "input",
      key: "location",
      placeholder: "Mudar Localização",
      value: values.location,
    },
    {
      type: "input",
      key: "description",
      placeholder: "Mudar Descrição",
      value: values.description,
    },
    {
      type: "input",
      key: "especire",
      placeholder: "Mudar Espécie",
      value: values.especire,
    },
    {
      type: "number",
      key: "price",
      placeholder: "Mudar preço",
      value: values.price,
    },
    {
      type: "archive",
      key: "archive",
      placeholder: "Adicionar Foto",
      values: values.archives?.map((archive) => ({
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
