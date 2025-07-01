import svg from "../assets/react.svg";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Select } from "../components/Select";
import { useState } from "react";
import styles from "./HomePage.module.css";
import { Field, Label } from "@headlessui/react";
import { Toast } from "../components/Toast";
import { Combobox, type ComboboxCategoryType } from "../components/Combobox";

const plants: ComboboxCategoryType[] = [
  {
    id: 1,
    categoryName: "Anthurium",
    options: [
      { id: 1, name: "Anthurium Clarinervium" },
      { id: 2, name: "Anthurium Crystallinum" },
    ],
  },
  {
    id: 2,
    categoryName: "Philodendron",
    options: [
      { id: 3, name: "Philodendron Verrucosum" },
      { id: 4, name: "Philodendron Micans" },
    ],
  },
  {
    id: 3,
    categoryName: "Övrigt",
    options: [{ id: 5, name: "Macodes Petola" }],
  },
];

export function HomePage() {
  const [preference, setPreference] = useState(
    localStorage.getItem("colorScheme") ?? undefined
  );

  const [isToastOpen, setIsToastOpen] = useState(false);
  const showToast = () => {
    setIsToastOpen(true);
    setTimeout(() => setIsToastOpen(false), 3500);
  };

  return (
    <>
      <h1 data-font-size="large3">Hello</h1>
      <img src={svg} alt="react" />
      <br />
      <p>
        <a href="/about">About</a>
      </p>

      <Field className={styles["color-scheme-switch-area"]}>
        <Label htmlFor="color-scheme-switcher">Color scheme:</Label>
        <Select
          id="color-scheme-switcher"
          value={preference}
          onChange={(e) => {
            setColorSchemePreference(e.target.value as ColorSchemePreference);
            setPreference(e.target.value);
          }}
          style={{ width: "10ch" }}
        >
          <option value="auto">Auto</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Select>
      </Field>
      <br />
      <Combobox options={plants}></Combobox>
      <br />

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
      <Button onClick={showToast}>Show Toast</Button>
      <Toast
        message="This is a custom toast notification!"
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
        variant="error"
      />
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
