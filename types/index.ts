import { Dispatch, ReactNode, SetStateAction } from "react";

export interface themeContext {
  theme: string;
  handleThemeSwitch: Function;
}

export type theme = {
  theme?: string;
};

export type NavbarContext = {
  theme?: string;
  handleThemeSwitch: any;
};

export interface AllPropsFromLayout {
  children?: ReactNode;
}

export interface Theme {
  theme: string;
}

export interface CardsProp {
  id: number;
  tools?: boolean;
  prompts?: boolean;
  datasets?: boolean;
  data: Data;
  setModalData?: Dispatch<SetStateAction<Data>>;
  setModalActive?: Dispatch<SetStateAction<boolean>>;
}

export interface Data {
  title?: string;
  description?: string;
  url?: string;
  tags?: string[];
}

// Modal

export interface ModalProps {
  data: Data;
  tools?: boolean;
  prompts?: boolean;
  datasets?: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}
