import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 16px;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: modalFadeIn 0.2s ease-out;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Header = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing.xs};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  position: relative;

  label {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  }

  input,
  select {
    height: 44px;
    padding: 10px ${({ theme }) => theme.spacing.md};
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: all 0.2s ease;
    background-color: ${({ theme }) => theme.colors.background.paper};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.main};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}20;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.disabled};
    }
  }

  input[type="date"] {
    position: relative;
    padding-right: 40px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%236E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }

    &::before {
      content: attr(placeholder);
      position: absolute;
      color: ${({ theme }) => theme.colors.text.disabled};
      pointer-events: none;
    }

    &:valid::before {
      display: none;
    }
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 40px;
    cursor: pointer;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%236E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.main};
    }

    &::-ms-expand {
      display: none;
    }

    option {
      color: ${({ theme }) => theme.colors.text.primary};
      background-color: ${({ theme }) => theme.colors.background.paper};
      padding: 8px;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Button = styled.button<{
  variant?: "primary" | "danger" | "text";
}>`
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-radius: 100px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  ${({ theme, variant = "primary" }) => {
    switch (variant) {
      case "danger":
        return `
          background-color: ${theme.colors.error.main};
          color: ${theme.colors.text.inverse};

          &:hover {
            background-color: ${theme.colors.error.dark};
          }
        `;
      case "text":
        return `
          background-color: transparent;
          color: ${theme.colors.text.primary};

          &:hover {
            background-color: ${theme.colors.grey[100]};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.text.inverse};

          &:hover {
            background-color: ${theme.colors.primary.dark};
          }
        `;
    }
  }}
`;

export const InfoGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const InfoLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const InfoValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;
