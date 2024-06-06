import PropTypes from "prop-types";
import { ModalStyle } from "./Styles";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { updateCollectionValidationSchema } from "./utils";
import { FaLink } from "react-icons/fa6";
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
      key: "title",
      placeholder: "Mudar Titulo",
      value: values.title,
    },
    {
      type: "input",
      key: "link",
      placeholder: "Mudar Link",
      value: values.link,
      icon: FaLink,
    },
    {
      type: "archive",
      key: "archive",
      placeholder: "Adicionar Arquivo",
      values: values.archives?.map((archive) => ({
        name: archive?.name,
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
        color={"black"}
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
