import React, { Fragment, useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";

export const Category = () => {
  const options = useSelector((state) => state.getCategory);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleChange(e) {
    const value = e.label;
    setSelectedOption(value);
  }

  return (
    <Fragment>
      <Select
        options={options}
        onChange={handleChange}
        value={selectedOption}
        label="Single select"
        placeholder="Categoría"
        isMulti={true}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : "red",
          }),
        }}
      />
    </Fragment>
  );
};
