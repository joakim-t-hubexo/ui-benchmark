import svg from "../assets/react.svg";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Select } from "../components/Select";
import { useState } from "react";
import styles from "./HomePage.module.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
} from "@headlessui/react";
import { Toast } from "../components/Toast";

type Plant = {
  id: number;
  name: string;
};

const plants: Plant[] = [
  { id: 1, name: "Anthurium Clarinervium" },
  { id: 2, name: "Philodendron Verrucosum" },
  { id: 3, name: "Philodendron Crystallinum" },
  { id: 4, name: "Macodes Petola" },
  { id: 5, name: "Philodendron Micans" },
];

export function HomePage() {
  const [preference, setPreference] = useState(
    localStorage.getItem("colorScheme") ?? undefined
  );

  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(plants[0]);
  const [query, setQuery] = useState("");
  const filteredPlants =
    query === ""
      ? plants
      : plants.filter((plant) => {
          return plant.name.toLowerCase().includes(query.toLowerCase());
        });

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
      <Combobox
        value={selectedPlant}
        onChange={setSelectedPlant}
        onClose={() => setQuery("")}
      >
        <ComboboxInput
          aria-label="This is the label"
          displayValue={(plant: Plant) => plant?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxOptions anchor="bottom" className="border empty:invisible">
          {filteredPlants.map((plant) => (
            <ComboboxOption
              key={plant.id}
              value={plant}
              className="data-focus:bg-blue-100"
            >
              {plant.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
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
