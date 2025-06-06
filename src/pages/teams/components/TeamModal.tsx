import { format, parse } from "date-fns";
import { useState, type FormEvent } from "react";
import * as S from "../../../components/modal/styles";
import type { ModalMode, Team } from "../../../types";

interface TeamModalProps {
  mode: ModalMode;
  onClose: () => void;
  onConfirm: (data?: Team) => void;
  data?: Team;
}

export default function TeamModal({
  mode,
  onClose,
  onConfirm,
  data,
}: TeamModalProps) {
  const [formData, setFormData] = useState<Partial<Team>>(() => {
    if (data) {
      const parsedDate = parse(data.createdAt, "dd/MM/yyyy", new Date());

      return {
        ...data,
        createdAt: format(parsedDate, "yyyy-MM-dd"),
      };
    }
    return {
      name: "",
      type: "Profissional",
      createdAt: "",
      status: "Ativo",
    };
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.createdAt) {
      const parsedDate = parse(formData.createdAt, "yyyy-MM-dd", new Date());

      onConfirm({
        ...formData,
        createdAt: format(parsedDate, "dd/MM/yyyy"),
      } as Team);
    }
  };

  if (mode === "delete") {
    return (
      <>
        <S.Body>
          <p>Tem certeza que deseja excluir o time "{data?.name}"?</p>
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
        <label htmlFor="name">Nome do time</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Digite o nome do time"
          required
        />
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="type">Tipo</label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value as Team["type"] })
          }
          required
        >
          <option value="Profissional">Profissional</option>
          <option value="Amador">Amador</option>
          <option value="Base">Base</option>
        </select>
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="createdAt">Data de criação</label>
        <input
          id="createdAt"
          type="date"
          value={formData.createdAt}
          onChange={(e) =>
            setFormData({ ...formData, createdAt: e.target.value })
          }
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
              status: e.target.value as Team["status"],
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
