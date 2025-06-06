import { format, parse } from "date-fns";
import { useState, type FormEvent } from "react";
import * as S from "../../../components/modal/styles";
import type { Event, ModalMode } from "../../../types";

interface EventModalProps {
  mode: ModalMode;
  onClose: () => void;
  onConfirm: (data?: Event) => void;
  data?: Event;
}

export default function EventModal({
  mode,
  onClose,
  onConfirm,
  data,
}: EventModalProps) {
  const [formData, setFormData] = useState<Partial<Event>>(() => {
    if (data) {
      const parsedDate = parse(data.date, "dd/MM/yyyy", new Date());

      return {
        ...data,
        date: format(parsedDate, "yyyy-MM-dd"),
      };
    }
    return {
      name: "",
      type: "Campeonato",
      date: "",
      status: "Ativo",
    };
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.date) {
      const parsedDate = parse(formData.date, "yyyy-MM-dd", new Date());

      onConfirm({
        ...formData,
        date: format(parsedDate, "dd/MM/yyyy"),
      } as Event);
    }
  };

  if (mode === "delete") {
    return (
      <>
        <S.Body>
          <p>Tem certeza que deseja excluir o evento "{data?.name}"?</p>
          <p>Esta ação não poderá ser desfeita.</p>
        </S.Body>
        <S.ButtonGroup>
          <S.Button variant="text" onClick={onClose}>
            Cancelar
          </S.Button>
          <S.Button variant="danger" onClick={() => onConfirm()}>
            Excluir
          </S.Button>
        </S.ButtonGroup>
      </>
    );
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormGroup>
        <label htmlFor="name">Nome do evento</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Digite o nome do evento"
          required
        />
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="type">Tipo</label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value as Event["type"] })
          }
          required
        >
          <option value="Campeonato">Campeonato</option>
          <option value="Amistoso">Amistoso</option>
          <option value="Treino">Treino</option>
        </select>
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="date">Data</label>
        <input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value as Event["status"],
            })
          }
          required
        >
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Pendente">Pendente</option>
        </select>
      </S.FormGroup>

      <S.ButtonGroup>
        <S.Button variant="text" type="button" onClick={onClose}>
          Cancelar
        </S.Button>
        <S.Button type="submit">
          {mode === "create" ? "Criar" : "Salvar"}
        </S.Button>
      </S.ButtonGroup>
    </S.Form>
  );
}
