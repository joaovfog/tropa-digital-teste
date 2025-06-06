import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: #f8f8f8;
  overflow-y: auto;
`;
