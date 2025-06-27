import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";
import styles from "./forms.module.css";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";

type Props = {
    variant?: "outlined" | "filled";
} & BaseDataAttributes &
    ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Props) {
    const { className, children, variant, ...restProps } = props;

    return (
        <button
            className={classNames(styles.common, styles.button, className)}
            data-variant={variant}
            {...restProps}
        >
            {children}
        </button>
    );
}
