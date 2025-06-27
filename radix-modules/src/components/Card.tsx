import classNames from "classnames";
import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";

type Props = {
    background?: "surface-1" | "surface-2" | "surface-3";
} & HTMLAttributes<HTMLDivElement>;

export function Card(props: Props) {
    const { background = "surface-1", className, ...restProps } = props;

    return (
        <div
            className={classNames(styles.card, className)}
            style={{
                background: `var(--color-${background})`,
            }}
            {...restProps}
        ></div>
    );
}
