import { ListItem } from "../List";

interface BaseProps {
  title: string;
  date?: string;
}

interface WithDesc extends BaseProps {
  desc: string;
  list?: ListItem[];
}

interface WithList extends BaseProps {
  desc?: string;
  list: ListItem[];
}

export type ProfilePageTextBoxSegmentProps = WithDesc | WithList;
