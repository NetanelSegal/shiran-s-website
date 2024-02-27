import { useEffect, useState } from "react";
import srcIconArrow from "../../assets/icons/select-arrow.svg";
const Dropdown = ({ options, setSelected, selected, disabled }) => {
  if (disabled) {
    return (
      <ul className="mb-2 mt-1 w-full rounded-xl border bg-gray-50 font-sans text-gray-500">
        <li className={"rounded-xl px-5 py-2 font-normal"}>
          {options[0] || "disabled"}
        </li>
      </ul>
    );
  }

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  let selectedLiClass = "custom-option selected relative";
  selectedLiClass = isSelectOpen ? selectedLiClass + " open" : selectedLiClass;

  let arrowIconClass = "absolute left-3 top-1/2 -translate-y-1/2 rotate-180";
  arrowIconClass = isSelectOpen
    ? arrowIconClass.replace("rotate-180", "rotate-90")
    : arrowIconClass;

  useEffect(() => {
    if (!selected) {
      setSelected(options[0]);
    }
  }, []);

  return (
    <ul
      className=" mt-1 w-full font-sans"
      name="areaInWarehouse"
      id="areaInWarehouse"
    >
      <li
        onClick={() => {
          setIsSelectOpen((prevState) => !prevState);
        }}
        className={selectedLiClass}
      >
        {selected}
        <img
          className={arrowIconClass}
          width="7"
          src={srcIconArrow}
          alt="arrow icon"
        />
      </li>

      {isSelectOpen &&
        options.map((option) => {
          return (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsSelectOpen(false);
              }}
              className="custom-option relative"
              value={option}
            >
              {option}
              {option == selected && (
                <img
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  width="12"
                  src={srcIconV}
                  alt="arrow icon"
                />
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default Dropdown;
