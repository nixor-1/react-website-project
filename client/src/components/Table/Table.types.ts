import { ReactNode } from "react";
import { SeparatorLineType } from "../SeparatorLine/SeparatorLine.types";

export interface GenericTableColumn<T> {
  header: ReactNode;
  render: (item: T) => ReactNode;
  className?: string;
}

export interface GenericTableProps<T> {
  data: T[];
  columns: GenericTableColumn<T>[];
  onRowClick?: (item: T) => void;
  isEmbedded?: boolean;
  showHeaders?: boolean;
  showSepLines?: boolean;
  heightStyling?: string;
  widthStyling?: string;
  alignment?: string;
  sepLineType?: SeparatorLineType;
  useFixedLayout?: boolean;
  // Unique key extractor (similar to how React uses 'key')
  rowKey: (item: T) => string | number;
}

