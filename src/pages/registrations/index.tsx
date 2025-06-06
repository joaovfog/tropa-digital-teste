import { useState } from "react";
import Modal from "../../components/modal";
import Table from "../../components/table";
import type { ModalMode, Registration } from "../../types";
import {
  generateMockRegistrations,
  generateMockTeams,
} from "../../utils/mockData";
import RegistrationModal from "./components/RegistrationModal";
import * as S from "./styles";

const columns = [
  { header: "Nome", key: "name" },
  { header: "Equipe", key: "team" },
  { header: "Posição", key: "position" },
  { header: "Data de entrada", key: "joinDate" },
  { header: "Status", key: "status" },
];

export default function Registrations() {
  const [registrations, setRegistrations] = useState<Registration[]>(() =>
    generateMockRegistrations(50)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("create");
  const [selectedRegistration, setSelectedRegistration] = useState<
    Registration | undefined
  >();

  const teamNames = generateMockTeams(5).map((team) => team.name);

  const handleOpenModal = (mode: ModalMode, registration?: Registration) => {
    setModalMode(mode);
    setSelectedRegistration(registration);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRegistration(undefined);
  };

  const handleConfirm = (data?: Registration) => {
    if (modalMode === "delete" && selectedRegistration) {
      setRegistrations(
        registrations.filter(
          (registration) => registration.id !== selectedRegistration.id
        )
      );
    } else if (data) {
      if (modalMode === "create") {
        setRegistrations([
          ...registrations,
          {
            ...data,
            id: Math.max(...registrations.map((e) => e.id)) + 1,
          },
        ]);
      } else {
        setRegistrations(
          registrations.map((registration) =>
            registration.id === selectedRegistration?.id
              ? { ...data, id: registration.id }
              : registration
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
    if (column === "joinDate") {
      return String(value);
    }
    return String(value);
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <S.Title>Inscrições</S.Title>
          <S.Description>Gerencie as inscrições do seu clube</S.Description>
        </div>
      </S.Header>

      <Table
        columns={columns}
        data={registrations}
        searchPlaceholder="Buscar inscrição..."
        insertButtonText="Nova inscrição"
        onInsert={() => handleOpenModal("create")}
        renderCustomCell={renderCustomCell}
        onView={(registration) =>
          handleOpenModal("edit", registration as Registration)
        }
        onEdit={(registration) =>
          handleOpenModal("edit", registration as Registration)
        }
        onRemove={(registration) =>
          handleOpenModal("delete", registration as Registration)
        }
        itemsPerPage={5}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={
          modalMode === "create"
            ? "Nova inscrição"
            : modalMode === "edit"
            ? "Editar inscrição"
            : "Excluir inscrição"
        }
      >
        <RegistrationModal
          mode={modalMode}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
          data={selectedRegistration}
          teams={teamNames}
        />
      </Modal>
    </S.Container>
  );
}
