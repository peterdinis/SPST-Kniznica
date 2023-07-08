import { selector } from "recoil";
import { dropdownState } from "../atoms/dropdownAtom";

export const dropdownSelector = selector({
    key: "dropdownSelector",
    get: ({ get }) => {
      // Retrieve the current value of dropdownState
      const currentValue = get(dropdownState);
      return currentValue;
    },
    set: ({ set }) => {
      // Update the default value of dropdownState when the button is clicked
      // set(dropdownState, newValue);
    },
  });