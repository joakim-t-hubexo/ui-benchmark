import svg from "../assets/react.svg";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Select } from "../components/Select";
import { useState } from "react";
import styles from "./HomePage.module.css";

export function HomePage() {
    const [preference, setPreference] = useState(
        localStorage.getItem("colorScheme") ?? undefined
    );

    return (
        <>
            <h1 data-font-size="large3">Hello</h1>
            <img src={svg} alt="react" />
            <br />
            <p>
                <a href="/about">About</a>
            </p>
            <div className={styles["color-scheme-switch-area"]}>
                <label htmlFor="color-scheme-switcher">Color scheme:</label>
                <Select
                    id="color-scheme-switcher"
                    value={preference}
                    onChange={(e) => {
                        setColorSchemePreference(
                            e.target.value as ColorSchemePreference
                        );
                        setPreference(e.target.value);
                    }}
                >
                    <option value="auto">Auto</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </Select>
            </div>
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
                <Select disabled>
                    <option>Disabled</option>
                </Select>
            </p>
        </>
    );
}
