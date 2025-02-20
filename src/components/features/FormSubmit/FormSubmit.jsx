/* eslint-disable react/react-in-jsx-scope */
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, ErrorMessage, InputKeep, Select, StyledNumber } from "./Styles";
import FormInput from "../../common/FormInput/FormInput";
import UploadInput from "../../common/UploadInput/UploadInput";
import { LoadingOutlined } from "@ant-design/icons";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateText } from "./Translations";
import FormRegister from "../../common/FormRegister/FormRegister";
import { validationSchemaRegister } from "../../common/FormRegister/Validators";

export default function FormSubmit({
  inputs,
  onSubmit,
  schema,
  color,
  loading,
  alternativeText,
  
  
}) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    
  } = useForm({
    resolver: zodResolver(validationSchemaRegister(globalLanguage)),
  });

  const [selectedOptions, setSelectedOptions] = useState({});
  const [prices, setPrices] = useState({ price1: 0, price2: 0, price3: 0 });
  const [totalQuantity, setTotalQuantity] = useState(0);


  useEffect(() => {
    if (inputs) {
      const priceInputs = inputs.filter(
        (input) => input.key && input.key.startsWith("price")
      );
      if (priceInputs.length > 0) {
        setPrices({
          price1:
            priceInputs.find((input) => input.key === "price1")?.value || 0,
          price2:
            priceInputs.find((input) => input.key === "price2")?.value || 0,
          price3:
            priceInputs.find((input) => input.key === "price3")?.value || 0,
        });
      }
    }
  }, [inputs]);

  const handleSelectChange = (key, value) => {
    setSelectedOptions({ ...selectedOptions, [key]: value });
  };

  function handlePriceChange(key, value) {
    if (key.startsWith("price")) {
      setPrices((prevPrices) => ({ ...prevPrices, [key]: value }));
    } else {
      setTotalQuantity(value);
    }
  }

  const [archivesArray, setArchivesArray] = useState([]);
  const [archiveError, setArchiveError] = useState(false);

  function submitHandler(data) {
    
    const hasArchiveInput = inputs.some((input) => input.type === "archive");
    if (hasArchiveInput && !archivesArray[0]) {
      setArchiveError(true);
      return;
    } else if (hasArchiveInput) {
      onSubmit({
        ...data,
        id_category: selectedOptions.id_categoryType,
        total_quantity: totalQuantity,
        price1: prices.price1,
        price2: prices.price2,
        price3: prices.price3,
        
        archive: archivesArray,
      });
      
      setArchivesArray([]);
    } else {
      onSubmit({
        ...data,
        id_category: selectedOptions,
        total_quantity: totalQuantity,
        price1: prices.price1,
        price2: prices.price2,
        price3: prices.price3,
      });
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
              options={input.options}
              selectColor={color}
              placeholder={input.placeholder}
              value={selectedOptions[input.key] || ""}
              onChange={(e) => {
                handleSelectChange(input.key, e.target.value);
              }}
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
        } else if (input.type === "number") {
          return (
            <StyledNumber
              key={input.key}
              value={input.value}
              minFractionDigits={input.decimal}
              maxFractionDigits={input.decimal}
              placeholder={input.placeholder}
              error={errors[input.key] ? true : false}
              onValueChange={(e) => handlePriceChange(input.key, e.value)}
            />
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
        } else if (input.type === "register") {
          return (
            <FormRegister
              inputKey={input.key}
              placeholder={input.placeholder}
              type={input.key === "senha" || input.key === "confirmarSenha" ? "password" : "text"}
              showEyeIcon={input.showEyeIcon !== undefined ? input.showEyeIcon : true}
              showGoogleButton={input.showGoogleButton !== undefined ? input.showGoogleButton : true} 
              register={register} 
              errors={errors}
            />
          );
        } 
        
        return null;
      })}
      <Button
  type="submit"
  width="200px"
  height="50px"
  onClick={handleSubmit(submitHandler)}
>
  {loading ? <LoadingOutlined /> : alternativeText || translations.button}
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
