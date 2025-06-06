import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ theme }) => theme.spacing.xs};
  border-right: 1px solid ${({ theme }) => theme.colors.grey[200]};
  min-height: 100vh;
  width: 60px;
  transition: width 0.3s ease;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 210px;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Logo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 40px;
    height: auto;

    &:first-child {
      display: none;
    }

    &:last-child {
      display: block;
    }
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};

    img {
      max-width: 150px;

      &:first-child {
        display: block;
      }

      &:last-child {
        display: none;
      }
    }
  }
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const MenuTitle = styled.span`
  display: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : "transparent"};
  transition: all 0.2s ease;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    filter: ${({ active }) =>
      active
        ? "brightness(0) invert(1)"
        : "brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(2076%) hue-rotate(176deg) brightness(90%) contrast(90%)"};
    transition: filter 0.2s ease;
  }

  span {
    display: none;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    color: ${({ theme, active }) =>
      active ? theme.colors.text.inverse : theme.colors.text.primary};
    white-space: nowrap;
    transition: color 0.2s ease;
  }

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.primary.main : theme.colors.primary.light + "20"};

    img {
      filter: ${({ active }) =>
        active
          ? "brightness(0) invert(1)"
          : "brightness(0) saturate(100%) invert(35%) sepia(71%) saturate(1622%) hue-rotate(346deg) brightness(93%) contrast(89%)"};
    }

    span {
      color: ${({ theme, active }) =>
        active ? theme.colors.text.inverse : theme.colors.primary.main};
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: ${({ theme }) => theme.spacing.sm};

    span {
      display: block;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.grey[300]};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs};

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 2px;
    border-radius: 18px;
  }

  div {
    display: none;
    flex-direction: column;

    span {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    small {
      font-size: ${({ theme }) => theme.typography.fontSize.xs};
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
    justify-content: flex-start;

    div {
      display: flex;
    }
  }
`;

export const ActionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing.sm};
  transition: all 0.2s ease;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    filter: brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(2076%)
      hue-rotate(176deg) brightness(90%) contrast(90%);
    transition: filter 0.2s ease;
  }

  span {
    display: none;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text.primary};
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};

    img {
      filter: brightness(0) saturate(100%) invert(35%) sepia(71%)
        saturate(1622%) hue-rotate(346deg) brightness(93%) contrast(89%);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
    justify-content: flex-start;

    span {
      display: block;
    }
  }
`;
