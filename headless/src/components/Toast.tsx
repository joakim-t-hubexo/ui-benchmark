import { type CSSProperties } from "react";
import { Transition } from "@headlessui/react";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";
import styles from "./Toast.module.css";
import classNames from "classnames";
import { Button } from "./Button";

type ToastProps = {
  style?: CSSProperties;
  isOpen: boolean;
  message: string;
  onClose: () => void;
  variant: "success" | "error";
} & BaseDataAttributes;

export function Toast(props: ToastProps) {
  const { isOpen, message, onClose, variant } = props;

  return (
    <div aria-live="assertive" className={classNames(styles.toast)}>
      <Transition
        show={isOpen}
        appear
        enter="transform ease-out duration-300 transition"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transform ease-in duration-200 transition"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
      >
        <div
          className={classNames(styles.toastContentCommon, styles.toastContent)}
          data-variant={variant}
        >
          <p>{message}</p>
          <Button
            variant="outlined"
            onClick={onClose}
            className={classNames(styles.toastButton)}
          >
            Dismiss
          </Button>
        </div>
      </Transition>
    </div>
  );
}
