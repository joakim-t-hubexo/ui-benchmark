import { type CSSProperties, type ReactNode } from "react";
import { Select as SelectPrimitive } from "radix-ui";
import classNames from "classnames";
import formStyles from "./forms.module.css";
import cardStyles from "./Card.module.css";

type Props = {
    children: ReactNode;
    value?: string;
    disabled?: boolean;
    onValueChange?: (value: string) => void;
    style?: CSSProperties;
};

export const Select = ({ children, style, ...props }: Props) => {
    return (
        <SelectPrimitive.Root {...props}>
            <SelectPrimitive.Trigger
                className={classNames(formStyles.common, formStyles.select)}
                style={style}
            >
                <SelectPrimitive.Value />
                <span data-icon="chevron"></span>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content>
                    <SelectPrimitive.Viewport
                        className={classNames(
                            formStyles.popover,
                            cardStyles.card
                        )}
                        style={{ background: "var(--color-surface-3)" }}
                    >
                        {children}
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    );
};

type ItemProps = {
    children: ReactNode;
    value: string;
};

export const SelectItem = ({ children, ...props }: ItemProps) => {
    return (
        <SelectPrimitive.Item className={formStyles.common} {...props}>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator>
                <span data-icon="check"></span>
            </SelectPrimitive.ItemIndicator>
        </SelectPrimitive.Item>
    );
};
