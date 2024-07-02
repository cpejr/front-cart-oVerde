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

export default function ManageUsers() {
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
    { field: "imageURL", header: "Foto" },
    { field: "name", header: "Nome" },
    { field: "email", header: "Email" },
    { field: "type", header: "Tipo" },
    { field: "manage", header: "" },
  ];

  const selectOptions = [
    { label: "Administrador", value: true },
    { label: "Usuário", value: false },
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
              ? { label: "Administrador", value: true }
              : { label: "Usuário", value: false }
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
      toast.success("Usuario deletado com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao excluir usuário.", err);
    },
  });

  const { mutate: updateUser } = useUpdateUsers({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("Usuário atualizado com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao atualizar usuário.", err);
    },
  });

  const { data: user, isLoading } = useGetUsers({
    onError: (err) => {
      toast.error("Erro ao pegar itens", err);
    },
  });
  //
  useEffect(() => {
    if (!isLoading && user) {
      formatAllUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading, searchQuery]);

  return (
    <Container>
      <Title>GERENCIAR USUÁRIOS</Title>
      <SearchBar
        placeholder={"Pesquisar usuário"}
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
