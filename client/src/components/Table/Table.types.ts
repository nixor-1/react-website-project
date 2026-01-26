import { ReactNode } from "react";

export interface GenericTableColumn<T> {
  header: ReactNode;
  render: (item: T) => ReactNode;
  className?: string;
}

export interface GenericTableProps<T> {
  data: T[];
  columns: GenericTableColumn<T>[];
  onRowClick?: (item: T) => void;
  // Unique key extractor (similar to how React uses 'key')
  rowKey: (item: T) => string | number;
}

