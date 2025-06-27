import { Popover } from "radix-ui";
import {
    useCallback,
    useRef,
    useState,
    type ButtonHTMLAttributes,
    type InputHTMLAttributes,
    type KeyboardEventHandler,
} from "react";
import { Input } from "./Input";
import styles from "./forms.module.css";
import { Card } from "./Card";
import { Button } from "./Button";

type Props = {
    width?: string;
    onItemSelect: (element: HTMLButtonElement) => void;
} & InputHTMLAttributes<HTMLInputElement>;

type ClickCache = {
    _clicks?: number;
};

export const Combobox = ({
    children,
    onInput,
    onItemSelect,
    width,
    ...rest
}: Props) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleTriggerKeyDown: KeyboardEventHandler<HTMLInputElement> =
        useCallback(
            (e) => {
                switch (e.key) {
                    case "ArrowDown":
                        e.preventDefault();
                        if (!open) {
                            setOpen(true);
                        }
                        requestAnimationFrame(() => {
                            popoverRef.current
                                ?.querySelector("button")
                                ?.focus();
                        });
                        break;

                    case "Escape":
                        setOpen(false);
                        break;

                    default:
                        break;
                }
            },
            [open]
        );

    const handlePopoverKeyDown: KeyboardEventHandler<HTMLDivElement> =
        useCallback(
            (e) => {
                switch (e.key) {
                    case "ArrowUp": {
                        e.preventDefault();
                        const prev =
                            document.activeElement?.previousElementSibling;
                        if (prev) {
                            (prev as HTMLElement).focus();
                        } else {
                            triggerRef.current?.focus();
                        }
                        break;
                    }

                    case "ArrowDown": {
                        e.preventDefault();
                        const next = document.activeElement?.nextElementSibling;
                        if (next) {
                            (next as HTMLElement).focus();
                        }
                        break;
                    }

                    case "Tab":
                        e.preventDefault();
                        setOpen(false);
                        triggerRef.current?.dispatchEvent(
                            new KeyboardEvent("keydown", {
                                shiftKey: e.shiftKey,
                                key: e.key,
                            })
                        );
                        break;

                    case "Escape":
                        setOpen(false);
                        triggerRef.current?.focus();
                        break;

                    case "Enter":
                        onItemSelect(e.target as HTMLButtonElement);
                        setOpen(false);
                        triggerRef.current?.focus();
                        break;

                    default:
                        break;
                }
            },
            [onItemSelect]
        );

    return (
        <Popover.Root open={open}>
            <Popover.Trigger asChild ref={triggerRef}>
                <Input
                    type="text"
                    placeholder="Values..."
                    style={{ width }}
                    onKeyDown={handleTriggerKeyDown}
                    onInput={(e) => {
                        setOpen(true);
                        onInput?.(e);
                    }}
                    onClick={(e) => {
                        const target = e.currentTarget as ClickCache &
                            HTMLInputElement;
                        target._clicks ??= 0;
                        if (target._clicks) {
                            setOpen(true);
                        } else {
                            target._clicks += 1;
                        }
                    }}
                    {...rest}
                />
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    onInteractOutside={(e) => {
                        if (e.target !== triggerRef.current) {
                            setOpen(false);
                            (triggerRef.current as ClickCache)._clicks = 0;
                        }
                    }}
                    onKeyDown={handlePopoverKeyDown}
                    ref={popoverRef}
                >
                    <Card
                        className={styles.popover}
                        style={{ width, boxSizing: "border-box" }}
                        background="surface-2"
                        onClick={(e) => {
                            if (
                                (e.target as HTMLElement).tagName === "BUTTON"
                            ) {
                                onItemSelect(e.target as HTMLButtonElement);
                                setOpen(false);
                                triggerRef.current?.focus();
                            }
                        }}
                    >
                        {children}
                    </Card>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export const ComboboxItem = (
    props: ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return <Button {...props}></Button>;
};
