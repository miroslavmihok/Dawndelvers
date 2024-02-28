import React from "react";
import formatter from "../utils/formatter";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: [],
    };
  }

  handleInputChange = (event) => {
    const { onChange, name } = this.props;
    const { value, checked, type } = event.target;

    if (type === "checkbox") {
      // If it's a checkbox, handle multiple values
      if (checked) {
        this.setState(
          (prevState) => ({
            selectedValues: [...prevState.selectedValues, value],
          }),
          () => {
            // Pass updated values to the parent component
            onChange(name, this.state.selectedValues);
          },
        );
      } else {
        this.setState(
          (prevState) => ({
            selectedValues: prevState.selectedValues.filter(
              (val) => val !== value,
            ),
          }),
          () => {
            // Pass updated values to the parent component
            onChange(name, this.state.selectedValues);
          },
        );
      }
    } else {
      // For single and range inputs, store a single value
      this.setState({ selectedValue: value }, () => {
        // Pass updated values to the parent component
        onChange(name, value);
      });
    }
  };

  renderSingle() {
    const { values, name } = this.props;
    const { selectedValue } = this.state;
    const { basePrice } = this.props;
    const { currencySymbol } = this.props;

    return (
      <div className="mb-4 flex flex-col gap-3">
        {values.map((value, index) => {
          // Find the selected option in the filter values
          const selectedOption =
            value.multiplicator !== 0 ? value.multiplicator * basePrice : null;

          return (
            <div key={index} className="flex items-center justify-between">
              <label htmlFor={value.title} className="flex gap-2">
                <input
                  type="radio"
                  id={value.title}
                  name={`${name}Group`}
                  value={value.title}
                  checked={value.title === selectedValue}
                  onChange={this.handleInputChange}
                />
                {value.title}
              </label>
              {selectedOption && (
                <span className="flex gap-1">
                  {`+`}
                  {formatter(selectedOption, currencySymbol)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  renderCheckbox() {
    const { values } = this.props;
    const { selectedValues } = this.state;
    const { basePrice } = this.props;
    const { currencySymbol } = this.props;

    return (
      <div className="mb-4 flex flex-col gap-3">
        {values.map((value, index) => {
          // Find the selected option in the filter values
          const selectedOption =
            value.multiplicator !== 0 ? value.multiplicator * basePrice : null;

          return (
            <div key={index} className="flex items-center justify-between">
              <label htmlFor={value.title} className="flex gap-2">
                <input
                  type="checkbox"
                  id={value.title}
                  name={value.title}
                  value={value.title}
                  checked={selectedValues.includes(value.title)}
                  onChange={this.handleInputChange}
                />
                {value.title}
              </label>
              {selectedOption && (
                <span className="flex gap-1">
                  {`+`}
                  {formatter(selectedOption, currencySymbol)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  renderRange() {
    const { values, name } = this.props;

    return (
      <div className="mb-4 flex">
        {values.map((value, index) => (
          <input
            key={index}
            type="range"
            min={value.min}
            max={value.max}
            step={value.step}
            name={`${name}`}
            className="w-full"
            onChange={this.handleInputChange}
          ></input>
        ))}
      </div>
    );
  }

  render() {
    switch (this.props.type) {
      case "Single":
        return this.renderSingle();
      case "Checkbox":
        return this.renderCheckbox();
      case "Range":
        return this.renderRange();
      default:
        return null;
    }
  }
}

export { Filter };
