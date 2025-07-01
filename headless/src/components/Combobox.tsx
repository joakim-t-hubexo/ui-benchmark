import { useState } from "react";
import type { BaseDataAttributes } from "../types/BaseDataAttributes";
import {
  Checkbox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Combobox as ComboboxPrimitive,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import classNames from "classnames";
import styles from "./Combobox.module.css";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export type ComboboxOptionType = {
  id: number;
  name: string;
};

export type ComboboxCategoryType = {
  id: number;
  categoryName: string;
  options: ComboboxOptionType[];
};

type Props = {
  options: ComboboxCategoryType[];
} & BaseDataAttributes;

export function Combobox(props: Props) {
  const { options } = props;

  const [selectedValues, setSelectedValues] = useState<ComboboxOptionType[]>(
    []
  );

  return (
    <ComboboxPrimitive
      multiple
      value={selectedValues}
      onChange={setSelectedValues}
      immediate
    >
      <ComboboxInput aria-label="Plants" tabIndex={0} aria-activedescendant />
      <ComboboxOptions anchor="bottom" className={classNames(styles.combobox)}>
        {selectedValues.length > 0 && (
          <div className={classNames(styles.chips)}>
            {selectedValues.map((option) => (
              <div key={option.id} className={classNames(styles.chip)}>
                <div>{option.name}</div>
                <div
                  onClick={() =>
                    setSelectedValues(
                      selectedValues.filter((v) => v.id !== option.id)
                    )
                  }
                >
                  x
                </div>
              </div>
            ))}
          </div>
        )}
        {options.map((category) => (
          <>
            <Disclosure>
              <DisclosureButton className={classNames(styles.disclosureButton)}>
                <div data-open className={classNames(styles.categoryName)}>
                  {category.categoryName}
                </div>
                <ChevronDownIcon className={classNames(styles.icon)} />
              </DisclosureButton>
              <DisclosurePanel>
                {category.options.map((option) => (
                  <div className={classNames(styles.comboboxOption)}>
                    <Checkbox
                      className={classNames(styles.checkbox)}
                      checked={selectedValues.includes(option)}
                      data-state={
                        selectedValues.includes(option)
                          ? "checked"
                          : "unchecked"
                      }
                      onChange={(checked) => {
                        if (checked) {
                          setSelectedValues([...selectedValues, option]);
                        } else {
                          setSelectedValues(
                            selectedValues.filter((v) => v.id !== option.id)
                          );
                        }
                      }}
                    />
                    <ComboboxOption key={option.id} value={option}>
                      {option.name}
                    </ComboboxOption>
                  </div>
                ))}
              </DisclosurePanel>
            </Disclosure>
          </>
        ))}
      </ComboboxOptions>
    </ComboboxPrimitive>
  );
}
