export interface Event {
  id: number;
  name: string;
  type: "Campeonato" | "Amistoso" | "Treino";
  date: string;
  status: "Ativo" | "Inativo" | "Pendente";
  [key: string]: unknown;
}

export interface Team {
  id: number;
  name: string;
  type: "Profissional" | "Amador" | "Juvenil";
  members: number;
  status: "Ativo" | "Inativo" | "Pendente";
  createdAt: string;
  [key: string]: unknown;
}

export interface Registration {
  id: number;
  name: string;
  team: string;
  position: string;
  joinDate: string;
  status: "Ativo" | "Inativo" | "Pendente";
  [key: string]: unknown;
}

export type ModalMode = "create" | "edit" | "delete";
