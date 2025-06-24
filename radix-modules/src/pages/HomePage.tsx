import svg from "../assets/react.svg";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Select, SelectItem } from "../components/Select";
import { useState } from "react";
import styles from "./HomePage.module.css";
import { Label } from "radix-ui";

export function HomePage() {
    const [preference, setPreference] = useState(
        localStorage.getItem("colorScheme") ?? "auto"
    );

    return (
        <>
            <h1 data-font-size="large3">Hello</h1>
            <img src={svg} alt="react" />
            <br />
            <p>
                <a href="/about">About</a>
            </p>

            <Label.Root className={styles["color-scheme-switch-area"]}>
                Color scheme:
                <Select
                    defaultValue={preference}
                    onChange={(e) => {
                        console.debug(e);

                        setColorSchemePreference(
                            e.currentTarget.value as ColorSchemePreference
                        );
                        setPreference(e.currentTarget.value);
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
                <Select disabled defaultValue="disabled">
                    <SelectItem value="disabled">Disabled</SelectItem>
                </Select>
            </p>
        </>
    );
}
