import classNames from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./forms.module.css";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";
import { Button as ButtonPrimitive } from "@headlessui/react";

type Props = {
  children: ReactNode;
  variant?: "outlined" | "filled";
} & BaseDataAttributes &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
  const {
    className,
    children,
    "data-font-size": dataFontSize,
    variant,
    ...restProps
  } = props;

  return (
    <ButtonPrimitive
      className={classNames(styles.common, styles.button, className)}
      data-font-size={dataFontSize}
      data-variant={variant}
      {...restProps}
    >
      {children}
    </ButtonPrimitive>
  );
}
