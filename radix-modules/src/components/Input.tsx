import type { InputHTMLAttributes } from "react";
import styles from "./forms.module.css";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";

type Props = {} & BaseDataAttributes & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
    return <input type="text" className={styles.common} {...props} />;
};
