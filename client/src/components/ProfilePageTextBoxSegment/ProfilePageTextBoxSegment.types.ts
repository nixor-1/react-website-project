import { ListItem } from "../List";
import { ReactNode } from "react";

interface BaseProps {
  title: string;
  date?: string;
}

interface WithDesc extends BaseProps {
  desc: ReactNode;
  list?: ListItem[];
}

interface WithList extends BaseProps {
  desc?: ReactNode;
  list: ListItem[];
}

export type ProfilePageTextBoxSegmentProps = WithDesc | WithList;
