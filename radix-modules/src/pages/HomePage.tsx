import svg from "../assets/react.svg";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Select, SelectItem } from "../components/Select";
import { useState } from "react";
import styles from "./HomePage.module.css";
import { Label } from "radix-ui";
import { Combobox, ComboboxItem } from "../components/Combobox";

const VALUES = [
    { label: "Item 1", value: 1 },
    { label: "Item 2", value: 2 },
    { label: "Item 3", value: 3 },
    { label: "Item 4", value: 4 },
    { label: "Item 5", value: 5 },
];

export function HomePage() {
    const [preference, setPreference] = useState(
        localStorage.getItem("colorScheme") ?? "auto"
    );
    const [value, setValue] = useState<string>("");
    const [filteredValues, setFilteredValues] = useState(VALUES);

    return (
        <>
            <h1 data-font-size="large3">Hello</h1>
            <img src={svg} alt="react" />
            <br />
            <p>
                <a href="/about">About</a>
            </p>
            <Combobox
                value={value}
                onInput={(e) => {
                    setValue(e.currentTarget.value);
                    setFilteredValues(
                        e.currentTarget.value.length > 0
                            ? VALUES.filter((v) =>
                                  v.label
                                      .toLocaleLowerCase()
                                      .includes(
                                          e.currentTarget.value.toLocaleLowerCase()
                                      )
                              )
                            : VALUES
                    );
                }}
                onItemSelect={(element) => {
                    const itemValue = Number(element.dataset.value);
                    setValue(
                        VALUES.find((v) => v.value === itemValue)?.label ?? ""
                    );
                }}
            >
                {filteredValues.map((v) => (
                    <ComboboxItem key={v.value} data-value={v.value}>
                        {v.label}
                    </ComboboxItem>
                ))}
            </Combobox>
            <br />
            <Label.Root className={styles["color-scheme-switch-area"]}>
                Color scheme:
                <Select
                    value={preference}
                    onValueChange={(value) => {
                        setColorSchemePreference(
                            value as ColorSchemePreference
                        );
                        setPreference(value);
                    }}
                    style={{ width: "10ch" }}
                >
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                </Select>
            </Label.Root>
            <Card className={styles.card}>
                <p>Surface 1</p>
                <div className={styles["buttons-spacing"]}>
                    <Button>Button</Button>
                    <Button variant="filled">Button</Button>
                </div>
            </Card>
            <Card className={styles.card} background="surface-2">
                <p>Surface 2</p>
                <div className={styles["buttons-spacing"]}>
                    <Button>Button</Button>
                    <Button variant="filled">Button</Button>
                </div>
            </Card>
            <Card className={styles.card} background="surface-3">
                <p>Surface 3</p>
                <div className={styles["buttons-spacing"]}>
                    <Button>Button</Button>
                    <Button variant="filled">Button</Button>
                </div>
            </Card>
            <br />
            <p className={styles["buttons-spacing"]}>
                <Button>Outlined</Button>
                <Button variant="filled">Filled</Button>
            </p>
            <p className={styles["buttons-spacing"]}>
                <Button disabled>Disabled</Button>
                <Button variant="filled" disabled>
                    Disabled
                </Button>
            </p>
            <p>
                <Select disabled value="disabled">
                    <SelectItem value="disabled">Disabled</SelectItem>
                </Select>
            </p>
        </>
    );
}
