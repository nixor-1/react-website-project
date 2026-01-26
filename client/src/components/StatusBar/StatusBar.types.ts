import { ComponentOrientation } from "@react-project/shared/components";
import { ReactNode } from "react";

export interface StatusBarProps {
  statusBarText: ReactNode;
  orientation: ComponentOrientation;
}
