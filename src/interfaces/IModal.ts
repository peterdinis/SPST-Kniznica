import { ReactElement, ReactNode } from "react";

export interface FadeProps {
  children: ReactElement;
  in?: boolean;
  onClick?: () => void;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: string;
}

export interface IModalProps {
  children?: ReactNode;
  btnName: string;
  modalHeader: string;
}
