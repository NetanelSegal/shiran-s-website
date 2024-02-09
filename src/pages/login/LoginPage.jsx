import Form from "../../shared/form/Form";
import Joi from "joi";
import { urls } from "../../constants/urls";
import { apiPost } from "../../utils/apiRequests";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const LoginPage = () => {
  const joiSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "האימייל הוא שדה חובה",
        "string.email": "אנא הזינו כתובת דואר אלקטרוני חוקית",
      }),
    password: Joi.string()
      .min(6)
      .max(16)
      .required()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .messages({
        "string.empty": "הסיסמה היא שדה חובה",
        "string.min": "הסיסמה חייבת להכיל לפחות 6 תווים",
        "string.max": "הסיסמה לא יכולה להכיל יותר מ-16 תווים",
        "string.pattern.base":
          "הסיסמה חייבת להכיל לפחות אות אחת גדולה, אות אחת קטנה ומספר אחד",
      }),
  });

  const login = async (formData) => {
    try {
      const { data } = await apiPost(urls.login, formData);
      console.log(data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="horizontal-page-padding flex h-dvh min-h-[500px] flex-col items-center justify-center overflow-y-hidden pt-16">
      <h2 className="py-5 text-center font-bold">התחברות</h2>
      <div className="w-full md:w-2/3 xl:w-1/2">
        <Form
          feilds={["email", "password"]}
          onSubmit={login}
          joiSchema={joiSchema}
        />
      </div>
    </div>
  );
};

export default LoginPage;
