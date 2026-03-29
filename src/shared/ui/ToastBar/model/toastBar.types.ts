import { ArgsProps } from "antd/es/notification/interface";
import { ReactNode } from "react";

export type ToastBarType =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "firebase";

interface ToastBarButtonProps {
  buttonText: string;
  onClick: () => void;
}

export interface IToastBarItem extends Omit<ArgsProps, "type"> {
  type: ToastBarType;
  message: string;
  description?: ReactNode;
  button?: ToastBarButtonProps;
  onClick?: (id?: string) => void;
  imgUrl?: string;
  key?: string;
}

export type IToastBarContext = { notify: (args: IToastBarItem) => void };
