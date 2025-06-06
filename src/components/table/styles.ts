import styled from "styled-components";

export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  overflow-x: auto;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    left: ${({ theme }) => theme.spacing.md};
    width: 18px;
    height: 18px;
    filter: brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(2076%)
      hue-rotate(176deg) brightness(90%) contrast(90%);
  }
`;

export const Search = styled.input`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  padding-left: ${({ theme }) => `calc(${theme.spacing.md} * 2 + 8px)`};
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.background.paper};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}20;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const InsertButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.inverse};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: 200px;
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  transition: background-color 0.2s;
  cursor: pointer;

  .plus-icon {
    font-size: 24px;
    line-height: 1;
    margin-top: -2px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 56px;
    height: 56px;
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    justify-content: center;

    .plus-icon {
      font-size: 32px;
    }

    span:not(.plus-icon) {
      display: none;
    }
  }

  @media (max-width: 640px) {
    bottom: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  th {
    text-align: left;
    color: ${({ theme }) => theme.colors.primary.main}90;
    padding: ${({ theme }) => theme.spacing.md};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main}20;
  }

  td {
    padding: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.grey[600]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main}20;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.grey[600]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.success.main};
  border-radius: 50%;
`;

export const Options = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary.main};
  transition: color 0.2s;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const OptionsMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.spacing.xs};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 120px;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const OptionItem = styled.div<{ isRemove?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme, isRemove }) =>
    isRemove ? theme.colors.error.main : theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: all 0.2s ease;

  img {
    width: 16px;
    height: 16px;
    filter: ${({ isRemove }) =>
      isRemove
        ? "brightness(0) saturate(100%) invert(22%) sepia(78%) saturate(2960%) hue-rotate(343deg) brightness(94%) contrast(95%)"
        : "brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(2076%) hue-rotate(176deg) brightness(90%) contrast(90%)"};
    transition: filter 0.2s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    color: ${({ theme, isRemove }) =>
      isRemove ? theme.colors.error.dark : theme.colors.primary.main};

    img {
      filter: ${({ isRemove }) =>
        isRemove
          ? "brightness(0) saturate(100%) invert(22%) sepia(78%) saturate(2960%) hue-rotate(343deg) brightness(74%) contrast(95%)"
          : "brightness(0) saturate(100%) invert(35%) sepia(71%) saturate(1622%) hue-rotate(346deg) brightness(93%) contrast(89%)"};
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PageButton = styled.button<{
  isNext?: boolean;
  disabled?: boolean;
}>`
  background-color: ${({ theme, isNext }) =>
    isNext ? theme.colors.primary.main : theme.colors.background.default};
  color: ${({ theme, isNext }) =>
    isNext ? theme.colors.text.inverse : theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 200px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all 0.2s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ theme, isNext, disabled }) =>
      disabled
        ? isNext
          ? theme.colors.primary.main
          : theme.colors.background.default
        : isNext
        ? theme.colors.primary.dark
        : theme.colors.primary.light};
    color: ${({ theme, disabled }) =>
      disabled ? "inherit" : theme.colors.text.inverse};
  }

  @media (max-width: 768px) {
    font-size: 0;
    min-width: 40px;
    padding: ${({ theme }) => theme.spacing.sm};

    &::after {
      content: attr(data-mobile);
      font-size: ${({ theme }) => theme.typography.fontSize.base};
    }
  }
`;

export const PageNumber = styled.button<{ active?: boolean }>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.background.default};
  color: ${({ theme, active }) =>
    active ? theme.colors.text.inverse : theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 200px;
  width: 40px;
  height: 40px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.primary.dark : theme.colors.grey[100]};
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

export const PlusIcon = styled.span`
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  margin-top: -2px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: -4px;
  }
`;
