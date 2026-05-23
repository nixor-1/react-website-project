import { PropsWithChildren, ComponentPropsWithoutRef } from "react";

export enum BtnVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
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
}

type LinkAttributes = Pick<
  ComponentPropsWithoutRef<"a">,
  "target" | "rel" | "download"
>;
type BtnAttributes = Pick<ComponentPropsWithoutRef<"button">, "type">;

type BtnClickProps =
  | ({
      onClick: () => void;
      href?: never;
    } & BtnAttributes)
  | ({
      href: string;
      onClick?: never;
    } & LinkAttributes)
  | {
      href?: never;
      onClick?: never;
    };

export type BtnProps = BtnBaseProps & BtnClickProps & BtnContentProps;
