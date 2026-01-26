import { ComponentOrientation } from "@react-project/shared/components";
import { BtnProps } from "../Btn/Btn.types";

export interface BtnBarProps {
  orientation: ComponentOrientation;
  btnConfigs: BtnProps[];
  color?: string;
}
