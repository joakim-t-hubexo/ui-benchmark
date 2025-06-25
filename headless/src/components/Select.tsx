import type { CSSProperties, ReactNode, SelectHTMLAttributes } from "react";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";
import classNames from "classnames";
import styles from "./forms.module.css";
import { Select as SelectPrimitive } from "@headlessui/react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
} & BaseDataAttributes &
  SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: Props) {
  const { children, "data-font-size": dataFontSize, ...rest } = props;

  return (
    <SelectPrimitive
      className={classNames(styles.common)}
      data-font-size={dataFontSize}
      {...rest}
    >
      {children}
    </SelectPrimitive>
  );
}
