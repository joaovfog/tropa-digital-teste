import { format } from "date-fns";
import type { Event, Registration, Team } from "../types";

const statuses = ["Ativo", "Inativo", "Pendente"] as const;
const eventTypes = ["Campeonato", "Amistoso", "Treino"] as const;
const teamTypes = ["Profissional", "Amador", "Juvenil"] as const;

const generateRandomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

export const generateMockEvents = (count: number): Event[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Evento ${index + 1}`,
    type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
    date: formatDate(generateRandomDate(new Date(2023, 0, 1), new Date())),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

export const generateMockTeams = (count: number): Team[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Time ${index + 1}`,
    type: teamTypes[Math.floor(Math.random() * teamTypes.length)],
    members: Math.floor(Math.random() * 30) + 10,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    createdAt: formatDate(generateRandomDate(new Date(2023, 0, 1), new Date())),
  }));
};

export const generateMockRegistrations = (count: number): Registration[] => {
  const teams = generateMockTeams(5);
  const positions = [
    "Atacante",
    "Meio-campo",
    "Zagueiro",
    "Goleiro",
    "Lateral",
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Inscrito ${index + 1}`,
    team: teams[Math.floor(Math.random() * teams.length)].name,
    position: positions[Math.floor(Math.random() * positions.length)],
    joinDate: formatDate(generateRandomDate(new Date(2023, 0, 1), new Date())),
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};
