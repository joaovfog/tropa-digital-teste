import { useState } from "react";
import Modal from "../../components/modal";
import Table from "../../components/table";
import type { ModalMode, Team } from "../../types";
import { generateMockTeams } from "../../utils/mockData";
import TeamModal from "./components/TeamModal";
import * as S from "./styles";

const columns = [
  { header: "Nome", key: "name" },
  { header: "Tipo", key: "type" },
  { header: "Membros", key: "members" },
  { header: "Status", key: "status" },
  { header: "Data de criação", key: "createdAt" },
];

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>(() => generateMockTeams(50));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("create");
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>();

  const handleOpenModal = (mode: ModalMode, team?: Team) => {
    setModalMode(mode);
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(undefined);
  };

  const handleConfirm = (data?: Team) => {
    if (modalMode === "delete" && selectedTeam) {
      setTeams(teams.filter((team) => team.id !== selectedTeam.id));
    } else if (data) {
      if (modalMode === "create") {
        setTeams([
          ...teams,
          {
            ...data,
            id: Math.max(...teams.map((e) => e.id)) + 1,
          },
        ]);
      } else {
        setTeams(
          teams.map((team) =>
            team.id === selectedTeam?.id ? { ...data, id: team.id } : team
          )
        );
      }
    }
    handleCloseModal();
  };

  const renderCustomCell = (column: string, value: unknown) => {
    if (column === "status") {
      return (
        <S.Status>
          <S.Dot />
          {String(value)}
        </S.Status>
      );
    }
    if (column === "createdAt") {
      return String(value);
    }
    return String(value);
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <S.Title>Equipes</S.Title>
          <S.Description>Gerencie as equipes do seu clube</S.Description>
        </div>
      </S.Header>

      <Table
        columns={columns}
        data={teams}
        searchPlaceholder="Buscar equipe..."
        insertButtonText="Nova equipe"
        onInsert={() => handleOpenModal("create")}
        renderCustomCell={renderCustomCell}
        onView={(team) => handleOpenModal("edit", team as Team)}
        onEdit={(team) => handleOpenModal("edit", team as Team)}
        onRemove={(team) => handleOpenModal("delete", team as Team)}
        itemsPerPage={5}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={
          modalMode === "create"
            ? "Nova equipe"
            : modalMode === "edit"
            ? "Editar equipe"
            : "Excluir equipe"
        }
      >
        <TeamModal
          mode={modalMode}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
          data={selectedTeam}
        />
      </Modal>
    </S.Container>
  );
}
