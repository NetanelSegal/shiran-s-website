import { useForm, useWatch } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { motion } from "framer-motion";

const Form = ({ feilds, onSubmit, joiSchema }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(joiSchema),
  });

  const autoCompletes = feilds.map((f) => (f == "username" ? "name" : f));

  const [inputsState, setInputsState] = useState(
    feilds.reduce((obj, value) => ({ ...obj, [value]: false }), {}),
  );

  const getLabelFromField = (f) => {
    switch (f) {
      case "username":
        return "שם מלא";
      case "email":
        return "כתובת מייל";
      case "password":
        return "סיסמה";
      default:
        break;
    }
  };

  const handleOnFocus = (field) => {
    setInputsState((prev) => ({ ...prev, [field]: true }));
  };

  const handleOnBlur = (field) => {
    if (!watchedData[field]) {
      setInputsState((prev) => ({ ...prev, [field]: false }));
    }
  };

  const watchedData = useWatch({ control });

  const labelVarients = {
    from: { y: "45%" },
    to: { y: "-30%" },
  };

  return (
    <form id="form" className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {feilds.map((feild, i) => (
        <div key={feild + " signup"} className="relative my-2 w-full">
          <motion.label
            variants={labelVarients}
            initial="from"
            animate={inputsState[feild] ? "to" : "from"}
            className="my-bg-primary absolute right-3 rounded-md px-2 font-bold text-white"
            htmlFor={feild}
          >
            {getLabelFromField(feild)}
          </motion.label>
          <input
            autoComplete={autoCompletes[i]}
            id={feild}
            type={autoCompletes[i]}
            onFocus={() => handleOnFocus(feild)}
            onBlurCapture={() => handleOnBlur(feild)}
            className="w-full rounded-xl border-4 border-[#ccbebc] p-2"
            {...register(feild)}
            key={feild}
          />
          {errors?.[feild] && (
            <p className="font-semibold text-red-500" key={"error " + feild}>
              {errors[feild].message}
            </p>
          )}
        </div>
      ))}
      <button
        className={`my-btn-secondary btn-effect w-full hover:bg-[#ccbebc] hover:text-black hover:after:left-full`}
        type="submit"
        form="form"
      >
        שלח
      </button>
    </form>
  );
};

export default Form;
