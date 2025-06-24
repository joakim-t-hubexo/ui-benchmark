import type { ReactNode, SelectHTMLAttributes } from "react";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";
import classNames from "classnames";
import styles from "./forms.module.css";

type Props = { children: ReactNode } & BaseDataAttributes &
    SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: Props) {
    const { children, "data-font-size": dataFontSize, ...rest } = props;

    return (
        <select
            className={classNames(styles.common)}
            data-font-size={dataFontSize}
            {...rest}
        >
            {children}
        </select>
    );
}
