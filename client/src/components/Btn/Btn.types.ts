import { PropsWithChildren } from "react";

export enum BtnVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

type BtnContentProps =
  | { children: React.ReactNode; btnText?: never; iconName?: never }
  | { children?: never; btnText: string; iconName?: string }
  | { children?: never; btnText?: never; iconName: string };

interface BtnBaseProps extends PropsWithChildren {
  disabled?: boolean;
  variant?: BtnVariant;
  className?: string;
  rotatedText?: boolean;
  isToggled?: boolean;
  hasShadow?: boolean;
};

type BtnClickProps =
  | {
    onClick: () => void;
    href?: never;
  }
  | {
    href: string;
    onClick?: never;
  }
  | {
    href?: never;
    onClick?: never;
  };

export type BtnProps = BtnBaseProps & BtnClickProps & BtnContentProps;
