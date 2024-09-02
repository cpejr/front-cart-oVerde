// Libs
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
// Components
import {
  Container,
  TypeSelect,
  ProfilePic,
  Title,
  LoadingStyles,
} from "./Styles";
import { ModalDeleteItem, Table, SearchBar } from "@components";
import {
  useDeleteUsers,
  useGetUsers,
  useUpdateUsers,
} from "@hooks/querys/user";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";

export default function ManageUsers() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  // States and Variables

  const [userID, setUserID] = useState("");
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();

  // Modal Handling

  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const modalCloseButton = <AiOutlineCloseCircle />;

  // Table Handling

  const columns = [
    { field: "imageURL", header: translations.textColumn1 },
    { field: "name", header: translations.textColumn2 },
    { field: "email", header: translations.textColumn3 },
    { field: "type", header: translations.textColumn4 },
    { field: "manage", header: "" },
  ];

  const selectOptions = [
    { label: translations.textAdmin, value: true },
    { label: translations.textUser, value: false },
  ];

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  // Formating Users object to fit into Table

  async function formatAllUsers() {
    const filteredUsers = user.filter((user) =>
      user?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const formattedUsers = await filteredUsers.map((user) => ({
      imageURL: <ProfilePic src={user?.imageURL} alt={user?.name} />,
      name: user?.name,
      email: user?.email,
      type: (
        <TypeSelect
          defaultValue={
            user?.type
              ? { label: translations.textAdmin, value: true }
              : { label: translations.textUser, value: false }
          }
          onChange={(value) => handleTypeChange(user?._id, value)}
          options={selectOptions}
        />
      ),
      manage: (
        <RiDeleteBin5Line
          style={{ cursor: "pointer" }}
          onClick={() => {
            openModalDelete();
            setUserID(user?._id);
          }}
        />
      ),
    }));

    setUsers(formattedUsers);
  }
  function handleTypeChange(_id, data) {
    const newUserData = { type: data };
    updateUser({ _id, newUserData });
  }
  function handleUserDelete(_id) {
    deleteUser(_id);
    closeModalDelete();
  }

  // Backend Calls

  const { mutate: deleteUser } = useDeleteUsers({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success(translations.toastDeleteSucess);
    },
    onError: (err) => {
      toast.error(translations.toastDeleteError, err);
    },
  });

  const { mutate: updateUser } = useUpdateUsers({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success(translations.toastUpdateSucess);
    },
    onError: (err) => {
      toast.error(translations.toastUpdateError, err);
    },
  });

  const { data: user, isLoading } = useGetUsers({
    onError: (err) => {
      toast.error(translations.toastGetError, err);
    },
  });
  //
  useEffect(() => {
    if (!isLoading && user) {
      formatAllUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading, searchQuery, globalLanguage]);

  return (
    <Container>
      <Title>{translations.pageTitle}</Title>
      <SearchBar
        placeholder={translations.placeholderSearch}
        value={searchQuery}
        search={handleSearchChange}
        width="90%"
      />
      {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={users} />
      )}
      <ModalDeleteItem
        close={closeModalDelete}
        handleItemDelete={handleUserDelete}
        id={userID}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />
    </Container>
  );
}
