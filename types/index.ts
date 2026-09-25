import { Dispatch, SetStateAction } from "react";

export interface CardsProp {
  id: number;
  tools?: boolean;
  prompts?: boolean;
  datasets?: boolean;
  data: Data;
  setModalData: Dispatch<SetStateAction<Data | null>>;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}

export interface Data {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

// Modal

export interface ModalProps {
  data: Data;
  tools?: boolean;
  prompts?: boolean;
  datasets?: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}
