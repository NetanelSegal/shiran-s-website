import Joi from "joi";
import { urls } from "../constants/urls";
import { apiPut } from "./apiRequests";

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

        throw validationErrors
        return false;
    }
    return true;
};

export const updateProject = async (pData, id) => {
    const isValid = validateFormData(pData);
    if (isValid) {
        try {
            const { data } = await apiPut(`${urls.projects}/${id}`, pData);
            return data
        } catch (error) {
            throw (error);
        }
    } else {
        throw ("Form is invalid")
        // console.log("Form is invalid");
    }
};