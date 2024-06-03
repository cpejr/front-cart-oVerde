import { useForm } from "react-hook-form";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Select, ErrorMessage, InputKeep } from "./Styles";
import FormInput from "../../common/FormInput/FormInput";
import UploadInput from "../../common/UploadInput/UploadInput";
import { LoadingOutlined } from "@ant-design/icons";

export default function FormSubmit({
  inputs,
  onSubmit,
  schema,
  color,
  loading,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [selectedOptions, setSelectedOptions] = useState({});
  const handleSelectChange = (key, value) => {
    setSelectedOptions({ ...selectedOptions, [key]: value });
  };

  const [archivesArray, setArchivesArray] = useState([]);
  const [archiveError, setArchiveError] = useState(false);

  function submitHandler(data) {
    const hasArchiveInput = inputs.some((input) => input.type === "archive");
    if (hasArchiveInput && !archivesArray[0]) {
      setArchiveError(true);
      return;
    } else if (hasArchiveInput) {
      onSubmit({ ...data, archives: archivesArray });
      setArchivesArray([]);
    } else {
      onSubmit(data);
    }
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      {inputs.map((input) => {
        if (input.type === "select") {
          return (
            <Select
              key={input.key}
              {...register(input.key, { required: input.required })}
              error={errors[input.key] ? true : false}
              options={input.options}
              placeholder={input.placeholder}
              value={selectedOptions[input.key] || ""}
              onChange={(e) => handleSelectChange(input.key, e.target.value)}
            ></Select>
          );
        } else if (input.type === "input") {
          return (
            <InputKeep key={input.key}>
              <FormInput
                inputKey={input.key}
                type={input.type}
                placeholder={input.placeholder}
                icon={input.icon}
                error={errors[input.key] ? true : false}
                defaultValue={input.value}
                register={register}
                color={color}
              />
              {errors[input.key]?.message && (
                <ErrorMessage>{errors[input.key]?.message}</ErrorMessage>
              )}
            </InputKeep>
          );
        } else if (input.type === "archive") {
          return (
            <UploadInput
              key={input.key}
              inputKey={input.key}
              placeholder={input.placeholder}
              error={archiveError}
              register={register}
              values={input?.values}
              setArchivesArray={setArchivesArray}
              archivesArray={archivesArray}
              icon={input.icon}
              color={color}
            />
          );
        }
        return null;
      })}
      <Button type="submit" width="200px" height="50px">
        {loading ? <LoadingOutlined /> : "Enviar"}
      </Button>
    </Form>
  );
}

FormSubmit.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  color: PropTypes.string,
  loading: PropTypes.bool,
};
