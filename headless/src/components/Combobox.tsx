import { useState } from "react";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";
import {
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Combobox as ComboboxPrimitive,
} from "@headlessui/react";
import classNames from "classnames";
import styles from "./Combobox.module.css";

export type ComboboxOptionType = {
  id: number;
  name: string;
};

type Props = {
  options: ComboboxOptionType[];
} & BaseDataAttributes;

export function Combobox(props: Props) {
  const { options } = props;

  const [selectedValues, setSelectedValues] = useState<ComboboxOptionType[]>(
    options.slice(0, 2)
  );
  const [query, setQuery] = useState("");
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <ComboboxPrimitive
      multiple
      value={selectedValues}
      onChange={setSelectedValues}
      onClose={() => setQuery("")}
    >
      {selectedValues.length > 0 && (
        <ul>
          {selectedValues.map((option) => (
            <li key={option.id}>{option.name}</li>
          ))}
        </ul>
      )}
      <ComboboxInput
        aria-label="Plants"
        onChange={(event) => setQuery(event.target.value)}
        tabIndex={0}
        aria-activedescendant
      />
      <ComboboxOptions anchor="bottom" className={classNames(styles.combobox)}>
        {filteredOptions.map((option) => (
          <ComboboxOption
            key={option.id}
            value={option}
            className={classNames(styles.comboboxOption)}
          >
            {option.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </ComboboxPrimitive>
  );
}
