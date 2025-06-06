import { useMemo, useState } from "react";
import Modal from "../../components/modal";
import Table from "../../components/table";
import type { Event, ModalMode } from "../../types";
import { generateMockEvents } from "../../utils/mockData";
import EventModal from "./components/EventModal";
import * as S from "./styles";

const columns = [
  { header: "Nome", key: "name" },
  { header: "Tipo", key: "type" },
  { header: "Data", key: "date" },
  { header: "Status", key: "status" },
];

export default function Events() {
  const [events, setEvents] = useState<Event[]>(() => generateMockEvents(50));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("create");
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();

  const modalTitle = useMemo(() => {
    return modalMode === "create"
      ? "Novo evento"
      : modalMode === "edit"
      ? "Editar evento"
      : "Excluir evento";
  }, [modalMode]);

  const handleOpenModal = (mode: ModalMode, event?: Event) => {
    setModalMode(mode);
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(undefined);
  };

  const handleConfirm = (data?: Event) => {
    if (modalMode === "delete" && selectedEvent) {
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
    } else if (data) {
      if (modalMode === "create") {
        setEvents([
          ...events,
          {
            ...data,
            id: Math.max(...events.map((e) => e.id)) + 1,
          },
        ]);
      } else {
        setEvents(
          events.map((event) =>
            event.id === selectedEvent?.id ? { ...data, id: event.id } : event
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
    if (column === "date") {
      return String(value);
    }
    return String(value);
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <S.Title>Eventos</S.Title>
          <S.Description>Gerencie os eventos do seu clube</S.Description>
        </div>
      </S.Header>

      <Table
        columns={columns}
        data={events}
        searchPlaceholder="Buscar evento..."
        insertButtonText="Novo evento"
        onInsert={() => handleOpenModal("create")}
        renderCustomCell={renderCustomCell}
        onView={(event) => handleOpenModal("edit", event as Event)}
        onEdit={(event) => handleOpenModal("edit", event as Event)}
        onRemove={(event) => handleOpenModal("delete", event as Event)}
        itemsPerPage={5}
      />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
        <EventModal
          mode={modalMode}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
          data={selectedEvent}
        />
      </Modal>
    </S.Container>
  );
}
