import svg from "../assets/react.svg";
import { useState } from "react";
import styles from "./HomePage.module.css";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


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
                <Select value={preference}
                        onValueChange={(e) =>{
                        setColorSchemePreference(e as ColorSchemePreference);
                        setPreference(e);
                        }}
                >
                    <SelectTrigger>
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="auto">Auto</SelectItem>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                        </SelectGroup>    
                    </SelectContent>
                </Select>
            </div>
            <Card className={styles.card}>
                <p>Surface 1</p>
                <div className={styles["buttons-spacing"]}>
                    <Button>Button</Button>
                    <Button variant="secondary">Button</Button>
                </div>
            </Card>
            <Card className={styles.card}>
                <p>Surface 2</p>
                <div className={styles["buttons-spacing"]}>
                    <Button>Button</Button>
                    <Button variant="secondary">Button</Button>
                </div>
            </Card>
            <Card className={styles.card}>
                <p>Surface 3</p>
                <div className={styles["buttons-spacing"]}>
                    <Button>Button</Button>
                    <Button variant="secondary">Button</Button>
                </div>
            </Card>
            <br />
            <p className={styles["buttons-spacing"]}>
                <Button>Outlined</Button>
                <Button variant="secondary">Filled</Button>
            </p>
            <p className={styles["buttons-spacing"]}>
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>
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
