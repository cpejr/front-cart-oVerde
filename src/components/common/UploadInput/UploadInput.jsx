import PropTypes from "prop-types";
import { AddArchive, RemoveArchive, Upload, ErrorMessage } from "./styles";
import FormInput from "../FormInput/FormInput";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";
import { TranslateText } from './Translations';
import { useGlobalLanguage } from "../../../Stores/globalLanguage";

export default function UploadInput({
  inputKey,
  placeholder,
  error,
  icon: Icon,
  color,
  setArchivesArray,
  archivesArray,
  values,
}) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info) => {
    const { originFileObj } = info?.fileList[0] || {};
    if (originFileObj) {
      getBase64(originFileObj, (url) => {
        setArchivesArray((prev) => [
          ...prev,
          {
            name: info?.fileList[0].name,
            base64: url,
            inputKey: info?.inputKey,
          },
        ]);
      });
    }
  };

  const addInput = () => {
    const newInput = {
      inputKey: `archive${archiveCount}`,
      placeholder,
      icon: Icon,
      color,
      error,
      index: archiveCount,
    };

    setInputs([...inputs, newInput]);
    setArchiveCount(archiveCount + 1);
  };

  const removeInput = (inputKey) => {
    setInputs(inputs.filter((input) => input.inputKey !== inputKey));
    setArchivesArray(
      archivesArray.filter((archive) => archive.inputKey !== inputKey)
    );
  };

  const [archiveCount, setArchiveCount] = useState(values?.length ?? 1);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    if (!pageLoaded) {
      const newInputs = (values ?? []).map((value, index) => ({
        inputKey: `archive${index}`,
        placeholder: value.name,
        icon: Icon,
        color,
        error,
        index,
      }));
      setInputs(newInputs);
      setArchivesArray(
        (values ?? []).map((value, index) => ({
          inputKey: `archive${index}`,
          name: value.name,
          base64: undefined,
        }))
      );
      setPageLoaded(true);
    } else if (archivesArray.length === 0) {
      setInputs([
        { inputKey, placeholder, error, icon: Icon, color, index: 0 },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, archivesArray, pageLoaded]);
  return (
    <>
      {inputs.map((props, index) => (
        <div style={{ width: "100%" }} key={index}>
          <Upload
            key={props.inputKey}
            name={props.inputKey}
            onChange={(values) =>
              handleChange({ ...values, inputKey: props.inputKey })
            }
            beforeUpload={() => false}
            maxCount={1}
            disabled={archivesArray.some(
              (archive) => archive.inputKey === props.inputKey
            )}
          >
            <FormInput
              {...props}
              value={
                archivesArray.find(
                  (archive) => archive.inputKey === props.inputKey
                )?.name ?? props.placeholder
              }
              error={error}
              readOnly="readonly"
              cursor={
                archivesArray.some(
                  (archive) => archive.inputKey === props.inputKey
                )
                  ? "not-allowed"
                  : "pointer"
              }
            />
          </Upload>
          <RemoveArchive
            color={color}
            onClick={() => removeInput(props.inputKey)}
          >
            <AiOutlineDelete
              style={{
                width: "2rem",
                height: "3rem",
                cursor: "pointer",
              }}
            />
            {translations.remove}
          </RemoveArchive>
          {error && (
            <ErrorMessage color={color}>
              {translations.errorMessage}
            </ErrorMessage>
          )}
        </div>
      ))}
      <AddArchive color={color} onClick={addInput}>
        <AiOutlinePlusCircle
          style={{
            width: "2rem",
            height: "3rem",
            cursor: "pointer",
          }}
        />
        {translations.addArchive}
      </AddArchive>
    </>
  );
}

UploadInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
  index: PropTypes.number,
  setArchivesArray: PropTypes.func,
  archivesArray: PropTypes.array,
  values: PropTypes.array,
};
