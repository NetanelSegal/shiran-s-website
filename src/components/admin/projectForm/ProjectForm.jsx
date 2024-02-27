import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import Joi from "joi";

const ProjectForm = ({ data, onSubmit }) => {
  // inputs code
  const textInpsRefs = useRef([]);
  const constructionAreaInpRef = useRef();
  const categoriesInpsRefs = useRef([]);
  const statusInpsRefs = useRef([]);
  const descriptionInpRef = useRef();

  const { categoriesCodeMap } = useContext(AppContext);
  const textInputsfeilds = ["title", "location", "client"];
  const labelsText = ["כותרת", "מיקום", "לקוח"];

  const [addProjectData, setAddProjectData] = useState({
    title: "",
    description: "",
    categories: [],
    location: "",
    client: "",
    isCompleted: false,
    constructionArea: 0,
  });

  const [isCompleted, setIsCompleted] = useState();

  const [selectedProjectCategories, setSelectedProjectCategories] = useState(
    [],
  );

  // inputs functions
  const handleCategorySelection = (e) => {
    if (e.target.checked) {
      setSelectedProjectCategories((prev) => [...prev, e.target.value]);
    } else {
      setSelectedProjectCategories((prev) =>
        prev.filter((c) => c != e.target.value),
      );
    }
  };

  const handleTextInput = (e) => {
    setAddProjectData((prev) => ({
      ...prev,
      [e.target.id]: Number(e.target.value) || e.target.value,
    }));
  };

  const handleIsCompleted = (e) => {
    setIsCompleted(e.target.value == "true" ? true : false);
  };

  useEffect(() => {
    setAddProjectData((prev) => ({
      ...prev,
      isCompleted: isCompleted,
    }));
    if (errors.isCompleted) {
      const newErrors = { ...errors };
      delete newErrors.isCompleted;
      setErrors(newErrors);
    }
  }, [isCompleted]);

  useEffect(() => {
    setAddProjectData((prev) => ({
      ...prev,
      categories: selectedProjectCategories,
    }));
  }, [selectedProjectCategories]);

  // errors and validation
  const [errors, setErrors] = useState({});

  const joiProjectSchema = Joi.object({
    title: Joi.string().min(5).max(50).required().messages({
      "string.empty": "הכותרת היא שדה חובה",
      "string.min": "הכותרת חייבת להכיל לפחות 5 תווים",
      "string.max": "הכותרת יכולה להכיל עד 50 תווים",
    }),
    categories: Joi.array().items(Joi.string()).min(1).required().messages({
      "array.min": "יש לבחור לפחות קטגוריה אחת",
    }),
    isCompleted: Joi.boolean().required().messages({
      "any.required": "יש לבחור האם הפרויקט הושלם או לא",
      "boolean.base": "יש לבחור האם הפרויקט הושלם או לא",
    }),
    description: Joi.string().min(20).max(500).required().messages({
      "string.empty": "התיאור הוא שדה חובה",
      "string.min": "התיאור חייב להכיל לפחות 20 תווים",
      "string.max": "התיאור יכול להכיל עד 500 תווים",
    }),
    location: Joi.string().min(3).max(50).required().messages({
      "string.empty": "המיקום הוא שדה חובה",
      "string.min": "המיקום חייב להכיל לפחות 3 תווים",
      "string.max": "המיקום יכול להכיל עד 50 תווים",
    }),
    client: Joi.string().min(3).max(50).required().messages({
      "string.empty": "שדה הלקוח הוא שדה חובה",
      "string.min": "הלקוח חייב להכיל לפחות 3 תווים",
      "string.max": "הלקוח יכול להכיל עד 50 תווים",
    }),
    constructionArea: Joi.number().min(10).max(1500).required().messages({
      "number.empty": "שדה שטח הבנייה הוא שדה חובה",
      "number.min": "שטח הבנייה חייב להיות לפחות 10",
      "number.max": "שטח הבנייה יכול להיות במרבית 1500",
    }),
  });

  const validateFormData = (data) => {
    const { error } = joiProjectSchema.validate(data, {
      abortEarly: false,
    });
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.context.label] = detail.message;
      });
      setErrors(validationErrors);
      return false;
    }
    return true;
  };

  // animation

  const labelVarients = {
    from: { y: "45%" },
    to: { y: "-30%" },
  };

  // if edit mode

  useEffect(() => {
    if (data) {
      setInpurValuesOnEdit();
      setSelectedProjectCategories(data.categories);
      setAddProjectData({
        title: data.title,
        description: data.description,
        categories: data.categories,
        location: data.location,
        client: data.client,
        isCompleted: data.isCompleted,
        constructionArea: data.constructionArea,
      });
    }
  }, [data]);

  const setInpurValuesOnEdit = () => {
    textInpsRefs.current.forEach((e) => setInputValuesFromId(e));
    setInputValuesFromId(constructionAreaInpRef.current);
    categoriesInpsRefs.current.forEach((e) => setInputValuesFromId(e));
    statusInpsRefs.current.forEach((e) => setInputValuesFromId(e));
    setInputValuesFromId(descriptionInpRef.current);
  };

  const setInputValuesFromId = (elem) => {
    if (elem.type == "text" || elem.type == "number" || elem.type == "textarea")
      elem.value = data[elem.id];
    else if (elem.type == "checkbox")
      data["categories"].forEach((c) =>
        elem.id == c ? (elem.checked = true) : (elem.checked = false),
      );
    else {
      console.log(data.isCompleted);
      if (data.isCompleted && elem.value == "ture") elem.checked = true;
      if (!data.isCompleted && elem.value == "false") elem.checked = true;
    }
  };

  return (
    <form
      id="form"
      className="mx-auto w-full max-w-lg"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(addProjectData, validateFormData);
      }}
    >
      {/* title, location, client */}
      {textInputsfeilds.map((f, i) => (
        <div key={f + i} className="relative my-2 w-full">
          <motion.label
            variants={labelVarients}
            initial="from"
            animate="to"
            className="my-bg-primary absolute right-3 rounded-md px-2 font-bold text-white"
            htmlFor={f}
          >
            {labelsText[i]}
          </motion.label>
          <input
            ref={(e) => (textInpsRefs.current[i] = e)}
            onChange={handleTextInput}
            type="text"
            id={f}
            className="project-form-input w-full rounded-xl border-4 border-[#ccbebc] p-2"
          />
          {errors?.[f] && (
            <span className="block text-red-500">* {errors[f]}</span>
          )}
        </div>
      ))}
      {/* constructionArea */}
      <div className="relative my-2 w-full">
        <motion.label
          variants={labelVarients}
          initial="from"
          animate="to"
          className="my-bg-primary absolute right-3 rounded-md px-2 font-bold text-white"
          htmlFor="constructionArea"
        >
          שטח בניה
        </motion.label>
        <input
          ref={constructionAreaInpRef}
          onChange={handleTextInput}
          type="number"
          id="constructionArea"
          className="project-form-input w-full rounded-xl border-4 border-[#ccbebc] p-2"
        />
      </div>
      {errors?.constructionArea && (
        <span className="block text-red-500">* {errors.constructionArea}</span>
      )}
      {/* categries */}
      <div className="relative my-2 flex w-full items-end justify-between gap-2">
        <motion.label
          initial={{ top: "10px" }}
          animate={{ top: "-8px" }}
          className="my-bg-primary absolute right-3 rounded-md px-2 font-bold text-white"
        >
          קטגוריות
        </motion.label>
        {Object.entries(categoriesCodeMap).map((c, i) => (
          <label
            key={c}
            className=" grow rounded-xl border-4 border-[#ccbebc] py-2 text-center text-black"
          >
            {c[1]}
            <input
              ref={(e) => (categoriesInpsRefs.current[i] = e)}
              id={c[0]}
              onChange={handleCategorySelection}
              type="checkbox"
              value={c[0]}
              className="project-form-input hidden"
            />
          </label>
        ))}
      </div>
      {errors?.categories && (
        <span className="block text-red-500">* {errors.categories}</span>
      )}
      {/* status */}
      <div className="relative my-2 flex w-full gap-2">
        <motion.p
          variants={labelVarients}
          initial="from"
          animate="to"
          className="my-bg-primary absolute right-3 rounded-md px-2 font-bold text-white"
        >
          סטטוס
        </motion.p>
        <label className="radio-label grow rounded-xl border-4 border-[#ccbebc] p-2 text-center">
          הושלם
          <input
            ref={(e) => (statusInpsRefs.current[0] = e)}
            onChange={handleIsCompleted}
            type="radio"
            name="isCompleted"
            id="completed"
            className="project-form-input hidden"
            value="true"
          />
        </label>
        <label className="radio-label grow rounded-xl border-4 border-[#ccbebc] p-2 text-center">
          בתהליך
          <input
            ref={(e) => (statusInpsRefs.current[1] = e)}
            onChange={handleIsCompleted}
            type="radio"
            name="isCompleted"
            id="inProcess"
            className="project-form-input hidden"
            value="false"
          />
        </label>
      </div>
      {errors?.isCompleted && (
        <span className="block text-red-500">* {errors.isCompleted}</span>
      )}

      {/* description */}
      <div className="relative my-2 w-full">
        <motion.label
          variants={labelVarients}
          initial="from"
          animate="to"
          className="my-bg-primary absolute right-3 rounded-md px-2 font-bold text-white"
          htmlFor="description"
        >
          תיאור
        </motion.label>
        <textarea
          ref={descriptionInpRef}
          onChange={handleTextInput}
          id="description"
          className="project-form-input h-32 w-full resize-none rounded-xl border-4 border-[#ccbebc] p-2"
        />
      </div>
      {errors?.description && (
        <span className="block text-red-500">* {errors.description}</span>
      )}
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

export default ProjectForm;
