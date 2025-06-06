import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import * as S from "./styles";

export default function PrivateLayout() {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
}
