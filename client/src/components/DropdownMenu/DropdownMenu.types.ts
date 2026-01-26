import { PropsWithChildren } from "react";
import { BtnProps } from "../Btn";

export interface DropdownMenuProps extends PropsWithChildren {
  dropdownMenuLabel: string;
  dropdownMenuIconName?: string;
  dropdownMenuItems: BtnProps[];
}
