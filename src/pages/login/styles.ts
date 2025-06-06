import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.paper};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Card = styled.div`
  width: 90%;
  max-width: 900px;
  height: 520px;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    max-width: 400px;
  }
`;

export const FormSide = styled.div`
  width: 50%;
  padding: 48px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px;
  }

  @media (max-width: 480px) {
    padding: 24px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 26px;
    font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
    margin-bottom: 0px;

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 14px;
    margin-bottom: 32px;

    @media (max-width: 480px) {
      font-size: 13px;
      margin-bottom: 24px;
    }
  }

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: 8px;
    font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  input {
    width: 100%;
    height: 44px;
    padding: 10px 20px;
    border-radius: 100px;
    border: none;
    background-color: ${({ theme }) => theme.colors.grey[50]};
    margin-bottom: 16px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};

    @media (max-width: 480px) {
      height: 40px;
      font-size: 13px;
      padding: 8px 16px;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: 14px;

      @media (max-width: 480px) {
        font-size: 13px;
      }
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}20;
    }
  }

  button {
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.text.inverse};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    font-size: 14px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-top: 8px;

    @media (max-width: 480px) {
      height: 36px;
      font-size: 13px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export const LogoImage = styled.div`
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }

  img {
    width: 160px;
    height: 100%;
    object-fit: contain;

    @media (max-width: 480px) {
      width: 140px;
    }
  }
`;

export const ImageSide = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 10px;
  margin-left: 0;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    position: absolute;
    width: 357px;
    height: auto;
    object-fit: contain;
    transform: translate(-22%, 29.5%);
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error.main};
  font-size: 14px;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 12px;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    margin-bottom: 16px;

    @media (max-width: 480px) {
      margin-bottom: 12px;
    }
  }
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: -8px;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  @media (max-width: 480px) {
    right: 16px;
    padding: 6px;
  }

  img {
    width: 20px;
    height: 20px;
    transition: filter 0.2s ease;

    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }

  &:hover {
    opacity: 1;
  }
`;
