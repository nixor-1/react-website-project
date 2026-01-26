import type { IconType, IconBaseProps } from "react-icons";

export type IconMapping = {
  [key: string]: IconType,
}

export interface IconProps extends IconBaseProps {
  iconName: string;
}
