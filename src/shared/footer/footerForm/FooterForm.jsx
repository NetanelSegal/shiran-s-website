import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { motion } from "framer-motion";

const FooterForm = () => {
  const feilds = ["name", "phoneNumber", "email"];

  const getLabelFromField = (f) => {
    switch (f) {
      case "name":
        return "שם מלא";
      case "phoneNumber":
        return "מספר טלפון";
      case "email":
        return "כתובת מייל";
      default:
        break;
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const watchedData = useWatch({ control });

  const onSubmit = (data) => {
    console.log(data);
  };

  // animation
  const [inputsState, setInputsState] = useState({
    name: false,
    phoneNumber: false,
    email: false,
    context: false,
  });

  const labelVarients = {
    from: { y: "8px" },
    to: { y: "-12px" },
  };

  const handleOnFocus = (field) => {
    setInputsState((prev) => ({ ...prev, [field]: true }));
  };

  const handleOnBlur = (field) => {
    if (!watchedData[field]) {
      setInputsState((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <form
      className="justify-evenly gap-2 md:flex md:grow"
      id="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        {feilds.map((feild) => {
          return (
            <div key={feild + " container"} className="relative my-2 w-full">
              <motion.label
                variants={labelVarients}
                initial="from"
                animate={inputsState[feild] ? "to" : "from"}
                className="my-bg-secondary absolute right-2 rounded-md px-2 font-bold"
                htmlFor={feild}
              >
                {getLabelFromField(feild)}
              </motion.label>
              <input
                id={feild}
                onFocus={() => handleOnFocus(feild)}
                onBlurCapture={() => handleOnBlur(feild)}
                className="w-full rounded-xl p-2 "
                {...register(feild)}
                key={feild}
              />
              {errors?.[feild] && (
                <p className="text-red-500" key={"error " + feild}>
                  {errors[feild].message}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <div className="relative my-2 rounded-xl">
          <motion.label
            variants={labelVarients}
            initial="from"
            animate={inputsState["context"] ? "to" : "from"}
            className="my-bg-secondary absolute right-2 -translate-y-1/2 rounded-md px-2 font-bold text-black"
            htmlFor="textArea"
          >
            במה אפשר לעזור?
          </motion.label>
          <textarea
            onBlurCapture={() => handleOnBlur("context")}
            onFocus={() => handleOnFocus("context")}
            {...register("context")}
            className="w-full rounded-xl p-2 "
            id="textArea"
            cols="30"
            rows="10"
          ></textarea>
          <button
            className={`my-btn-secondary btn-effect w-full hover:bg-[#ccbebc] hover:text-black hover:after:left-full`}
            type="submit"
            form="form"
          >
            שלח
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterForm;
