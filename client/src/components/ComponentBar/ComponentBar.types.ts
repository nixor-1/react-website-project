import { ComponentOrientation } from "@react-project/shared/components";
import { ReactNode } from "react";

export interface ComponentBarProps {
  orientation: ComponentOrientation;
  color?: string;
  sepBar?: boolean;
  children: ReactNode[];
}

export interface ComponentBarGroupProps {
  alignment?: "left" | "right";
  children: ReactNode;
  /** @internal Passed down natively via React configuration looping */
  forceMobileLayout?: boolean;
}
