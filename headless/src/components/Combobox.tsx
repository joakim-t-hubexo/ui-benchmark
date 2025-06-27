import type { CSSProperties, ReactNode } from "react";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";
import { Combobox as ComboboxPrimitive } from "@headlessui/react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
} & BaseDataAttributes;

export function Combobox(props: Props) {
  const { children, "data-font-size": dataFontSize, ...rest } = props;

  return (
    <ComboboxPrimitive data-font-size={dataFontSize} {...rest}>
      {children}
    </ComboboxPrimitive>
  );
}
