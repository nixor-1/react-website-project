import { ComponentOrientation } from "@react-project/shared/components";
import { ReactNode } from "react";

export interface ComponentBarProps {
  orientation: ComponentOrientation;
  color?: string;
  sepBar?: boolean;
  components: ReactNode[];
}
