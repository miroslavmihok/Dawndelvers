import React from "react";
import { useAuthData } from "../../../../context/authCtx";
import { useForm } from "react-hook-form";
import { useProfileUpdate } from "../../../../hooks/useProfileUpdate";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../../../../components/UI/ErrorMessage";

const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
);

const schema = z
  .object({
    name: z
      .string()
      .min(6, { message: "Name must contain at least 6 characters" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
    if (password.length > 0) {
      if (!passwordValidation.test(password)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Password does not meet complexity requirements",
          path: ["password"],
        });
      }
    }
  });

const AdminProfileDetails = () => {
  const { updateProfile, isProfileLoading } = useProfileUpdate();
  const { userItem, dispatch } = useAuthData();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: userItem.name,
      email: userItem.email,
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await updateProfile({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      dispatch({ type: "LOGIN", payload: { ...response } });
      toast.success("Profile updated successfully");
    } catch (error) {
      if (error.status === 400) {
        setError("email", {
          message: error?.data?.message || error.error,
        });
      } else {
        setError("root", {
          message: error?.data?.message || error.error,
        });
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-[400px] flex-col gap-5"
      >
        <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
          <label htmlFor="name" style={{ flex: 1 }}>
            Name:
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            autoComplete="off"
            className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[240px]"
          />
        </div>
        {errors.name && <ErrorMessage msg={errors.name?.message} />}
        <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
          <label htmlFor="email" style={{ flex: 1 }}>
            Email:
          </label>
          <input
            {...register("email")}
            id="email"
            type="text"
            autoComplete="off"
            className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[240px]"
          />
        </div>
        {errors.email && <ErrorMessage msg={errors.email?.message} />}
        <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
          <label htmlFor="password" style={{ flex: 1 }}>
            Password:
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            autoComplete="off"
            className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[240px]"
          />
        </div>
        {errors.password && <ErrorMessage msg={errors.password?.message} />}
        <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
          <label htmlFor="confirmPassword" style={{ flex: 1 }}>
            Confirm Password:
          </label>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
            autoComplete="off"
            className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[240px]"
          />
        </div>
        {errors.confirmPassword && (
          <ErrorMessage msg={errors.confirmPassword?.message} />
        )}
        <button
          type="submit"
          disabled={isProfileLoading || isSubmitting}
          className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
        >
          <span>
            {isProfileLoading || isSubmitting ? "Loading..." : "Update"}
          </span>
        </button>
        {errors.root && <ErrorMessage msg={errors.root.message} />}
      </form>
    </>
  );
};

export default AdminProfileDetails;
