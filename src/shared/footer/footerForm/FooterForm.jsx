import { useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ComponentLoader from "../../loaders/ComponentLoader";

const FooterForm = () => {
  const btnSendRef = useRef();
  const [statusMessage, setStatusMessage] = useState("שלח");

  const [isLoading, setIsLoading] = useState(false);
  const feilds = ["name", "phoneNumber", "email"];
  const autoCompletes = ["name", "tel", "email"];

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

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      console.log(data);
      const res = await emailjs.send(
        "service_qowi0kn",
        "shiran_contact_form",
        data,
        {
          publicKey: "6CI1z7b1xE3KIliQo",
        },
      );
      if (res.status == 200) {
        setStatusMessage("הטופס נשלח בהצלחה");
        btnSendRef.current.classList.remove("my-btn-secondary");
        btnSendRef.current.classList.add("bg-green-500");

        setTimeout(() => {
          setStatusMessage("שלח");
          btnSendRef.current.classList.remove("bg-green-500");
          btnSendRef.current.classList.add("my-btn-secondary");
        }, 2500);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setStatusMessage("שגיאה בשליחת הטופס");
      btnSendRef.current.classList.remove("my-btn-secondary");
      btnSendRef.current.classList.add("bg-red-500");

      setTimeout(() => {
        setStatusMessage("שלח");
        btnSendRef.current.classList.remove("bg-red-500");
        btnSendRef.current.classList.add("my-btn-secondary");
      }, 2500);

      setIsLoading(false);
    }
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
      id="footerForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        {feilds.map((feild, i) => {
          return (
            <div key={feild + " container"} className="relative my-2 w-full">
              <motion.label
                variants={labelVarients}
                initial="from"
                animate={inputsState[feild] ? "to" : "from"}
                className="my-bg-secondary absolute right-2 rounded-md px-2 font-bold"
                htmlFor={feild + "-footer"}
              >
                {getLabelFromField(feild)}
              </motion.label>
              <input
                autoComplete={autoCompletes[i]}
                id={feild + "-footer"}
                onFocus={() => handleOnFocus(feild)}
                onBlurCapture={() => handleOnBlur(feild)}
                className="w-full rounded-xl p-2 "
                {...register(feild)}
                key={feild + "-footer"}
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
            ref={btnSendRef}
            className={`my-btn-secondary btn-effect w-full hover:bg-[#ccbebc] hover:text-black hover:after:left-full`}
            type="submit"
            form="footerForm"
          >
            {isLoading ? <ComponentLoader /> : statusMessage}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterForm;
