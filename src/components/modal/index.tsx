import type { MouseEvent } from "react";
import { type ReactNode, useEffect } from "react";
import * as S from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "500px",
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Content
        onClick={(e: MouseEvent) => e.stopPropagation()}
        style={{ maxWidth }}
      >
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={onClose}>×</S.CloseButton>
        </S.Header>
        <S.Body>{children}</S.Body>
      </S.Content>
    </S.Overlay>
  );
}
