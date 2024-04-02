import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaRegTrashCan, FaPlus, FaXmark } from "react-icons/fa6";

const UpdateFilterComponent = ({ filters, setFilters }) => {
  const [currentFilter, setCurrentFilter] = useState({
    type: "",
    name: "",
  });
  const [values, setValues] = useState([]);
  const [currentValue, setCurrentValue] = useState({
    title: "",
    multiplicator: "",
  });
  const [currentRangeValue, setCurrentRangeValue] = useState({
    min: "",
    max: "",
    step: "",
    multiplicator: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setCurrentFilter({ ...currentFilter, [name]: value });
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;

    if (currentFilter.type !== "Range") {
      setCurrentValue({ ...currentValue, [name]: value });
    } else {
      setCurrentRangeValue({ ...currentRangeValue, [name]: value });
    }
  };

  const handleAddValue = () => {
    if (currentFilter.type !== "Range") {
      setValues([...values, currentValue]);
    } else {
      setValues([...values, currentRangeValue]);
    }
    setCurrentValue({
      title: "",
      multiplicator: "",
    });
    setCurrentRangeValue({
      min: "",
      max: "",
      step: "",
      multiplicator: "",
    });
  };

  const handleRemoveValue = (i) => {
    const updatedValues = [...values];
    updatedValues.splice(i, 1);
    setValues(updatedValues);
  };

  const handleAddFilter = () => {
    if (!values.length || !currentFilter.type || !currentFilter.name) {
      toast.error("Add filter type, name and at least one value");
    } else {
      setFilters([...filters, { ...currentFilter, values: values }]);
      setCurrentFilter({
        type: "",
        name: "",
      });
      setCurrentValue({
        title: "",
        multiplicator: "",
      });
      setCurrentRangeValue({
        min: "",
        max: "",
        step: "",
        multiplicator: "",
      });
      setValues([]);
    }
  };

  const handleRemoveFilter = (i) => {
    const updatedFilters = [...filters];
    updatedFilters.splice(i, 1);
    setFilters(updatedFilters);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {/* ADDED FILTERS */}
      <div className="flex w-full flex-col items-center justify-center gap-y-2 rounded-[14px] border border-lightGrey p-2">
        {filters && filters.length === 0 && (
          <span>No filters have been added yet.</span>
        )}
        {filters &&
          filters.length > 0 &&
          filters.map((filter, i) => (
            <div
              key={i}
              className="flex w-full flex-col gap-y-3 rounded-md border border-white bg-lightGrey p-4 text-sepiaGray sm:flex-row sm:gap-y-0"
            >
              <div className="flex w-full">
                <div className="flex w-full flex-col justify-around">
                  <div className="flex gap-2">
                    <span className="font-semibold">Type:</span>
                    <span>{filter.type}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">Name:</span>
                    <span>{filter.name}</span>
                  </div>
                </div>
                <div className="flex w-full">
                  <ul className="list-disc pl-5">
                    {filter.type !== "Range" &&
                      filter.values.map((value, i) => (
                        <li key={i}>
                          {value.title} (multiplicator: {value.multiplicator})
                        </li>
                      ))}
                    {filter.type === "Range" && (
                      <>
                        <li>Min: {filter.values[0].min}</li>
                        <li>Max: {filter.values[0].max}</li>
                        <li>Step: {filter.values[0].step}</li>
                        <li>Multiplicator: {filter.values[0].multiplicator}</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center sm:w-fit">
                <button
                  onClick={() => handleRemoveFilter(i)}
                  className="rounded-md border border-sepiaGray bg-transparent px-2 py-1 hover:bg-sepiaGray hover:text-lightGrey"
                >
                  <div className="flex h-full items-center gap-2 whitespace-nowrap">
                    <FaRegTrashCan className="text-md" />
                    <span>Remove</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
      </div>
      {/* FILTER INPUTS */}
      <div className="flex w-full flex-col items-center gap-4 rounded-md border border-lightGrey p-4">
        <div className="flex w-full flex-col gap-4">
          {/* FILTER TYPE AND NAME */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col" stlye={{ flex: 1 }}>
              <label>Type:</label>
              <select
                name="type"
                value={currentFilter.type}
                className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                onChange={(e) => handleFilterChange(e)}
              >
                <option value="" hidden>
                  Select filter type...
                </option>
                <option value="Single">Single</option>
                <option value="Checkbox">Checkbox</option>
                <option value="Range">Range</option>
              </select>
            </div>
            <div className="flex flex-col" stlye={{ flex: 1 }}>
              <label>Name:</label>
              <input
                name="name"
                type="text"
                value={currentFilter.name}
                placeholder="Filter heading"
                className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                onChange={(e) => handleFilterChange(e)}
              />
            </div>
          </div>
          {/* ADDED FILTER VALUES */}
          <div className="flex w-full flex-wrap gap-2">
            {values.length === 0 && (
              <span className="w-full text-center">Add value/s to display</span>
            )}
            {values.length > 0 &&
              values.map((value, i) => (
                <div
                  key={i}
                  className="flex w-fit items-center gap-4 overflow-hidden rounded-sm border-none bg-lightGrey pl-4 text-sepiaGray"
                >
                  {currentFilter.type === "Range" && (
                    <>
                      <span>Min: {value.min}</span>
                      <span>Max: {value.max}</span>
                      <span>Step: {value.step}</span>
                      <span>Multiplicator: {value.multiplicator}</span>
                    </>
                  )}
                  {currentFilter.type !== "Range" && (
                    <>
                      <span>{value.title}</span>
                      <span>Multiplicator: {value.multiplicator}</span>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemoveValue(i)}
                    className="flex border-none p-2 text-sepiaRed hover:bg-sepiaRed hover:text-white"
                  >
                    <FaXmark />
                  </button>
                </div>
              ))}
          </div>
          {/* FILTER VALUES TITLE AND MULTIPLICATOR */}
          {currentFilter.type !== "Range" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-4">
                <div className="col-span-4">
                  <div className="flex flex-col">
                    <label>Title:</label>
                    <input
                      name="title"
                      type="text"
                      value={currentValue.title}
                      placeholder="Value title"
                      className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                      onChange={(e) => handleValueChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4 xs:col-span-3">
                  <div className="flex flex-col">
                    <label>Multiplicator:</label>
                    <input
                      name="multiplicator"
                      type="number"
                      step={0.1}
                      value={currentValue.multiplicator}
                      placeholder="Value multiplicator"
                      className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                      onChange={(e) => handleValueChange(e)}
                    />
                  </div>
                </div>
                <div className="col-span-1 hidden items-end justify-center xs:flex">
                  <div className="flex items-end">
                    <div className="flex h-[42px] flex-col items-center justify-center">
                      <button
                        type="button"
                        onClick={() => handleAddValue()}
                        className="flex w-fit items-center justify-center rounded-full border-2 border-mediumPurple p-1 hover:border-lightPurple hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple sm:p-2"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 grid items-center xs:hidden">
                <div className="flex h-[42px] flex-col items-center justify-center">
                  <button
                    type="button"
                    disabled={values.length > 0}
                    onClick={() => handleAddValue()}
                    className="flex w-fit items-center justify-center rounded-full border-2 border-mediumPurple p-2 hover:border-lightPurple hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          )}
          {currentFilter.type === "Range" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4 lg:col-span-2">
                  <div className="flex flex-col">
                    <label>Min:</label>
                    <input
                      name="min"
                      type="number"
                      step={0.01}
                      disabled={values.length > 0}
                      value={currentRangeValue.min}
                      placeholder="Value min"
                      className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                      onChange={(e) => handleValueChange(e)}
                    />
                  </div>
                </div>
                <div className="col-span-4 lg:col-span-2">
                  <div className="flex flex-col">
                    <label>Max:</label>
                    <input
                      name="max"
                      type="number"
                      step={0.01}
                      disabled={values.length > 0}
                      value={currentRangeValue.max}
                      placeholder="Value max"
                      className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                      onChange={(e) => handleValueChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 xs:grid-cols-5">
                <div className="col-span-4 grid grid-cols-4 gap-4">
                  <div className="col-span-4 lg:col-span-2">
                    <label>Step:</label>
                    <input
                      name="step"
                      type="number"
                      step={0.01}
                      disabled={values.length > 0}
                      value={currentRangeValue.step}
                      placeholder="Value step"
                      className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                      onChange={(e) => handleValueChange(e)}
                    />
                  </div>
                  <div className="col-span-4 lg:col-span-2">
                    <label>Multiplicator:</label>
                    <input
                      name="multiplicator"
                      type="number"
                      step={0.1}
                      disabled={values.length > 0}
                      value={currentRangeValue.multiplicator}
                      placeholder="Value multiplicator"
                      className="h-[42px] w-full rounded-[4px] border border-sepiaGray bg-lightGrey px-4 text-sepiaGray outline-0"
                      onChange={(e) => handleValueChange(e)}
                    />
                  </div>
                </div>
                <div className={`hidden grid-cols-1 items-end xs:grid`}>
                  <div className="flex h-[42px] flex-col items-center justify-center">
                    <button
                      type="button"
                      disabled={values.length > 0}
                      onClick={() => handleAddValue()}
                      className="flex w-fit items-center justify-center rounded-full border-2 border-mediumPurple p-1 hover:border-lightPurple hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple sm:p-2"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className={`col-span-2 grid items-center xs:hidden`}>
                <div className="flex h-[42px] flex-col items-center justify-center">
                  <button
                    type="button"
                    disabled={values.length > 0}
                    onClick={() => handleAddValue()}
                    className="flex w-fit items-center justify-center rounded-full border-2 border-mediumPurple p-2 hover:border-lightPurple hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => handleAddFilter()}
          className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
        >
          Add Filter
        </button>
      </div>
    </div>
  );
};

export default UpdateFilterComponent;
