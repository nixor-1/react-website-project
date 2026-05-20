import { ComponentOrientation } from "@react-project/shared/components"

export enum SeparatorLineType {
  Solid = "SOLID",
  Dashed = "DASHED",
  Dotted = "DOTTED",
}

export type SeparatorlineProps = {
  orientation: ComponentOrientation;
  type: SeparatorLineType;
  className?: string;
}
