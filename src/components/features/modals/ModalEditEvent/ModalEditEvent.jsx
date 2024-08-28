import PropTypes from "prop-types";
import Button from "../../../common/Button/Button";
import { colors } from "../../../../styles/stylesVariables";
import { Container, Message, ModalStyle, Form, MultipleSelect } from "./Styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { newEventValidationSchema } from "../../../../pages/ManageEvents/utils";
import FormInput from "../../../common/FormInput/FormInput";
import { useState, useEffect } from "react";
import { useUpdateEvents } from "../../../../hooks/querys/events";
import { useGetCategoryPrice } from "../../../../hooks/querys/categoryPrice";
import { useGetCategoryType } from "../../../../hooks/querys/categoryType";
import { useGlobalLanguage } from "../../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";

export default function ModalEditEvent({
  event,
  close,
  _id,
  modal,
  transformArrayItems,
}) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const [idsCategoryType, setIdsCategoryType] = useState([]);
  const [idsCategoryPrice, setIdsCategoryPrice] = useState([]);
  const queryClient = useQueryClient();
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
  const { mutate: updatEvent } = useUpdateEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: (err) => {
      return err;
    },
  });
  const setCategories = () => {
    setIdsCategoryType(event?.id_categoryType?.map((ids) => ids._id) || []);
    setIdsCategoryPrice(event?.id_categoryPrice?.map((ids) => ids._id) || []);
  };
  useEffect(() => {
    if (modal) {
      setCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  // On Submit
  const onSubmit = (data) => {
    const body = {
      ...data,
      id_categoryType: idsCategoryType,
      id_categoryPrice: idsCategoryPrice,
    };

    updatEvent({ _id: _id, body: body });
    close();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newEventValidationSchema),
  });

  return (
    <Container>
      <ModalStyle
        open={modal}
        onCancel={close}
        centered
        destroyOnClose
        footer={null}
      >
        <Message>Editar Informações</Message>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="name"
            label={translations.textName}
            defaultValue={event.name}
            register={register}
            placeholder={translations.textName}
            errors={errors}
          />
          <FormInput
            name="eventUpload"
            label={translations.textImage}
            defaultValue={event.eventUpload}
            register={register}
            placeholder={translations.textURL}
            errors={errors}
          />
          <FormInput
            name="shortDescription"
            label={translations.textShortDescription}
            defaultValue={event.shortDescription}
            register={register}
            placeholder={translations.textShortDescription}
            errors={errors}
          />
          <FormInput
            name="longDescription"
            label={translations.textLongDescription}
            defaultValue={event.longDescription}
            register={register}
            placeholder={translations.textLongDescription}
            errors={errors}
          />
          <FormInput
            name="link"
            label={translations.textLink2}
            defaultValue={event.link}
            register={register}
            placeholder={translations.textLink}
            errors={errors}
          />
          <MultipleSelect
            value={idsCategoryPrice}
            name="id_categoryPrice"
            options={transformArrayItems(categoryPrice)}
            optionLabel="label"
            placeholder={translations.textCaracter}
            className="w-full md:w-20rem"
            filter
          />
          <MultipleSelect
            value={idsCategoryType}
            name="id_categoryType"
            options={transformArrayItems(categoryType)}
            optionLabel="label"
            placeholder={translations.textCaracter}
            className="w-full md:w-20rem"
            filter
          />
          <Button
            type="submit"
            backgroundcolor="transparent"
            color={colors.font.primary}
            border="1px solid"
            borderRadius="0.5rem"
            marginTop="1.5rem"
            fontSize="1.8rem"
            fontWeight="500"
            lineHeight="2.2rem"
            hoverBackgroundColor={colors.modals.modalButton}
            hoverColor={colors.font.secondary}
            borderColor={colors.modals.modalButton}
          >
            {translations.textButton}
          </Button>
        </Form>
      </ModalStyle>
    </Container>
  );
}

ModalEditEvent.propTypes = {
  _id: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  transformArrayItems: PropTypes.func.isRequired,
};
