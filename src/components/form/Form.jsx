import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const Form = ({ feilds, onSubmit, joiSchema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(joiSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {feilds.map((feild) => {
        return (
          <label key={feild + " label"}>
            {feild}
            <input className="input1" {...register(feild)} key={feild} />
            {errors?.[feild] && (
              <p key={"error " + feild}>{errors[feild].message}</p>
            )}
          </label>
        );
      })}
      <input
        className="button-effect-blue button-sand"
        key={"submit"}
        type="submit"
        value={"Send"}
      />
    </form>
  );
};

export default Form;
