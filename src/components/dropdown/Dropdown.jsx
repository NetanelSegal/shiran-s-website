import { useEffect, useRef, useState } from "react";
import srcIconArrow from "../../assets/icons/select-arrow.svg";
import srcIconV from "../../assets/icons/select-V icon.svg";

const Dropdown = ({ options, setSelected, selected, disabled }) => {
  const ref = useRef(null);
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

  let arrowIconClass = "absolute left-3 top-1/2 -translate-y-1/2 rotate-180";
  arrowIconClass = isSelectOpen
    ? arrowIconClass.replace("rotate-180", "rotate-90")
    : arrowIconClass;

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsSelectOpen(false);
      }
    };
    addEventListener("click", onClickOutside);
    if (!selected) {
      setSelected(options[0]);
    }
    return () => {
      removeEventListener("click", onClickOutside);
    };
  }, []);

  return (
    <ul
      ref={ref}
      className="relative mt-1 w-full rounded-xl font-semibold text-white"
    >
      <li
        onClick={() => {
          setIsSelectOpen((prevState) => !prevState);
        }}
        className={
          "my-bg-primary rounded-xl " +
          (isSelectOpen
            ? "selected open relative px-4 py-2 "
            : "selected relative px-4 py-2 ")
        }
      >
        {selected}
        <img
          className={arrowIconClass}
          width="7"
          src={srcIconArrow}
          alt="arrow icon"
        />
      </li>
      <div className="absolute z-50 w-full">
        {isSelectOpen &&
          options.map((option, i) => {
            return (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsSelectOpen(false);
                }}
                className={
                  "custom-option relative bg-white px-4 py-2 text-black hover:bg-neutral-300" +
                  (i == options.length - 1 ? " rounded-b-xl" : "") +
                  (i == 0 ? " rounded-t-xl" : "")
                }
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
      </div>
    </ul>
  );
};

export default Dropdown;
