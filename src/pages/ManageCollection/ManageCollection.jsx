import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LoadingOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { newCollectionValidationSchema } from "./utils";
import { Container, Title, LoadingStyles, SubTitle } from "./Styles";
import { useGetCategoryType } from "../../hooks/querys/categoryType";
import {
  Table,
  FormSubmit,
  ModalUpdateTree,
  ModalDeleteItem,
} from "../../components/";
import {
  useGetTree,
  usePostTree,
  useUpdateTree,
  useDeleteTree,
} from "../../hooks/querys/tree";
import {
  AiFillTool,
  AiOutlineUpload,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useGlobalLanguage } from '../../Stores/globalLanguage';
import { TranslateText } from './Translations';

export default function ManageCollection() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });
  
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [collections, setCollections] = useState([]);

  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const openModalUpdate = () => setModalUpdate(true);
  const closeModalUpdate = () => setModalUpdate(false);

  const [selectOptions, setSelectOptions] = useState([]);
  const [treeValue, setTreeValue] = useState({});
  const [TreeID, setTreeID] = useState("");

  const modalCloseButton = <AiOutlineCloseCircle />;
  const queryClient = useQueryClient();

  const [inputs] = useState([
    {
      type: "input",
      key: "name",
      placeholder: translations.textName,
    },
    {
      type: "input",
      key: "description",
      placeholder: translations.textDescription,
    },
    {
      type: "input",
      key: "location",
      placeholder: translations.textLocation,
    },
    {
      type: "input",
      key: "specie",
      placeholder: translations.textSpecie,
    },
    {
      type: "number",
      key: "price",
      placeholder: translations.textPrice,
    },
    {},
    {
      type: "archive",
      key: "archive",
      placeholder: translations.textArchive,
      icon: AiOutlineUpload,
    },
  ]);

  const columns = [
    { field: "name", header: translations.textName },
    { field: "description", header: translations.textDescription },
    { field: "Manage", header: translations.textManage },
  ];

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };

  function handlesubmit(data) {
    postTree(data);
  }

  function handleTreeDelete(_id) {
    deleteTree(_id);
    closeModalDelete();
  }

  function handleTreeUpdate(id, data) {
    updateTree({ _id: id, newData: data });
    closeModalUpdate();
  }

  async function formatAllCollection() {
    const formattedCollection = await collection.map((collection) => ({
      name: collection?.name,
      description: collection?.description,
      Manage: (
        <div>
          <AiFillTool
            style={{ cursor: "pointer" }}
            onClick={() => {
              openModalUpdate();
              setTreeID(collection._id);
              setTreeValue({
                name: collection.name,
                description: collection.description,
                location: collection.location,
                price: collection.price,
                archive: collection.archive,
                specie: collection.specie,
                id_category: collection?.id_category,
              });
            }}
          />
          <RiDeleteBin5Line
            style={{ cursor: "pointer" }}
            onClick={() => {
              openModalDelete();
              setTreeID(collection?._id);
            }}
          />
        </div>
      ),
    }));
    setCollections(formattedCollection);
  }

  //backend calls
  const { data: collection, isLoading } = useGetTree({
    onError: (err) => {
      toast.error(translations.toastGetTreeError, err);
    },
  });

  const { data: categoryTypes, isPending: isLoadingCategories } =
    useGetCategoryType({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["categoryTree"],
        });
        setSelectOptions(transformArrayItems(categoryTypes));
      },
      onError: (err) => {
        toast.error(translations.toastGetCategoryError, err);
      },
    });

  const { mutate: postTree, isPending: loadingPostTree } = usePostTree({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tree"],
      });
      toast.success(translations.toastPostTreeSucess);
    },
    onError: (err) => {
      toast.error(translations.toastPostTreeError, err);
    },
  });
  const { mutate: deleteTree, isPending: loadingDeleteTree } = useDeleteTree({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tree"],
      });
      toast.success(translations.toastDeleteTreeSucess);
    },
    onError: (err) => {
      toast.error(translations.toastDeleteTreeError, err);
    },
  });
  const { mutate: updateTree, isPending: loadingEditTree } = useUpdateTree({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tree"],
      });
      toast.success(translations.toastUpdateTreeSucess);
    },
    onError: (err) => {
      toast.error(translations.toastUpdateTreeError, err);
    },
  });

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }

    const categories = transformArrayItems(categoryTypes);
    let types = categories?.map((category) => {
      return category?.label;
    });

    if (types) {
      inputs[5] = {
        type: "select",
        key: "id_categoryType",
        placeholder: translations.textCategory,
        options: types,
      };
    }
    setSelectOptions(types);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryTypes, collection, isLoading, isLoadingCategories]);
  return (
    <Container>
      <Title>{translations.pageTitle}</Title>
      {!isLoadingCategories ? (
        <FormSubmit
          inputs={inputs}
          onSubmit={handlesubmit}
          schema={newCollectionValidationSchema}
          color={"#33603F"}
          loading={loadingPostTree}
        />
      ) : (
        <SubTitle>{translations.loading}</SubTitle>
      )}
      <SubTitle>{translations.pageSubTitle}</SubTitle>
      {isLoading || loadingEditTree || loadingDeleteTree ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={collections} />
      )}
      <ModalDeleteItem
        close={closeModalDelete}
        handleItemDelete={handleTreeDelete}
        id={TreeID}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />
      <ModalUpdateTree
        close={closeModalUpdate}
        handleTreeUpdate={handleTreeUpdate}
        id={TreeID}
        values={treeValue}
        modal={modalUpdate}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalUpdate}
        options={selectOptions}
      />
    </Container>
  );
}
