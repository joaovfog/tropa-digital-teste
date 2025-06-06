import { format, parse } from "date-fns";
import { useState, type FormEvent } from "react";
import * as S from "../../../components/modal/styles";
import type { ModalMode, Registration } from "../../../types";

interface RegistrationModalProps {
  mode: ModalMode;
  onClose: () => void;
  onConfirm: (data?: Registration) => void;
  data?: Registration;
  teams: string[];
}

export default function RegistrationModal({
  mode,
  onClose,
  onConfirm,
  data,
  teams,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState<Partial<Registration>>(() => {
    if (data) {
      const parsedDate = parse(data.joinDate, "dd/MM/yyyy", new Date());

      return {
        ...data,
        joinDate: format(parsedDate, "yyyy-MM-dd"),
      };
    }
    return {
      name: "",
      team: teams[0] || "",
      position: "",
      status: "Ativo",
    };
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.joinDate) {
      const parsedDate = parse(formData.joinDate, "yyyy-MM-dd", new Date());

      onConfirm({
        ...formData,
        joinDate: format(parsedDate, "dd/MM/yyyy"),
      } as Registration);
    }
  };

  if (mode === "delete") {
    return (
      <>
        <S.Body>
          <p>Tem certeza que deseja excluir a inscrição de "{data?.name}"?</p>
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
        <label htmlFor="name">Nome do inscrito</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Digite o nome do inscrito"
          required
        />
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="team">Equipe</label>
        <select
          id="team"
          value={formData.team}
          onChange={(e) => setFormData({ ...formData, team: e.target.value })}
          required
        >
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="position">Posição</label>
        <input
          id="position"
          type="text"
          value={formData.position}
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
          placeholder="Digite a posição"
          required
        />
      </S.FormGroup>

      <S.FormGroup>
        <label htmlFor="joinDate">Data de entrada</label>
        <input
          id="joinDate"
          type="date"
          value={formData.joinDate}
          onChange={(e) =>
            setFormData({ ...formData, joinDate: e.target.value })
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
              status: e.target.value as Registration["status"],
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
