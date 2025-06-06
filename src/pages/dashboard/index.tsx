import * as S from "./styles";

export default function Dashboard() {
  return (
    <S.Container>
      <S.Header>
        <div>
          <S.WelcomeText>
            Bem vindo de volta, <strong>Kaique Steck</strong>
          </S.WelcomeText>
          <S.Title>Dashboard</S.Title>
        </div>
      </S.Header>
    </S.Container>
  );
}
