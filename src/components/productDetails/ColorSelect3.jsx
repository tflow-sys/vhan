import React, { useState } from "react";

const colorOptions = [
  {
    id: "values-beige",
    value: "Beige",
    color: "beige",
    price: "",
    checked: false,
  },
  {
    id: "values-gray",
    value: "Gray",
    color: "gray",
    price: "79.99",
    checked: true,
  },
  {
    id: "values-grey",
    value: "Grey",
    color: "grey",
    price: "89.99",
    checked: false,
  },
];

export default function ColorSelect3({ activeColor = "", setActiveColor }) {
  const [activeColorDefault, setActiveColorDefault] = useState("beige");

  const handleSelectColor = (value) => {
    if (setActiveColor) {
      setActiveColor(value);
    } else {
      setActiveColorDefault(value);
    }
  };

  return (
    <div className="variant-picker-item">
      <div className="variant-picker-label mb_12">
        Colors:
        <span className="text-title variant-picker-label-value value-currentColor">
          {activeColor || activeColorDefault}
        </span>
      </div>
      <div className="variant-picker-values gap12">
        {colorOptions.map(({ id, value, color, price }) => (
          <React.Fragment key={id}>
            <input
              id={id}
              type="radio"
              name="color1"
              onChange={() => handleSelectColor(color)}
            />
            <label
              className={`style-text-1 style-rounded radius-60 color-btn  ${
                activeColor == color ? "active" : ""
              } `}
              htmlFor={id}
              data-value={value}
              data-color={color}
              data-price={price}
            >
              <span className={`circle-color bg-color-${color}`} />
              <span className="text-title">{value}</span>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
