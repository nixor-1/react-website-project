import { ReactNode } from "react";

export interface PageMarginsProps {
  className?: string;
  leftCol?: ReactNode;
  rightCol?: ReactNode;
  pageMarginsWidth: string;
  isScrollable?: boolean;
}
