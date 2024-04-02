import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGetUser from "../../../../hooks/admin/useGetUser";
import { useUpdateUser } from "../../../../hooks/admin/useUpdateUser";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { FaChevronLeft } from "react-icons/fa6";

const schema = z.object({
  name: z
    .string()
    .min(6, { message: "Name must contain at least 6 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  isAdmin: z.boolean(),
});

const UserDetails = () => {
  const { url: id } = useParams();
  const { refetchUser, isUserLoading, user } = useGetUser(id);
  const { updateUser, isUserUpdateLoading } = useUpdateUser();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (user) {
      const { name, email, isAdmin } = user;
      reset({
        name,
        email,
        isAdmin,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      const details = {
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
      };
      await updateUser(id, details);
      refetchUser();
      toast.success("User updated successfully");
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
        className="flex w-full max-w-[500px] flex-col gap-5"
      >
        <div className="w-full items-center justify-start">
          <Link
            to={"/admin/profile/userlist"}
            className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
          >
            <div className="flex items-center gap-3">
              <FaChevronLeft />
              <span>Back</span>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <h2>User-ID: {user._id}</h2>
        </div>
        <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
          <label htmlFor="name" style={{ flex: 1 }}>
            Name:
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            autoComplete="off"
            className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[320px]"
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
            className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[320px]"
          />
        </div>
        {errors.email && <ErrorMessage msg={errors.email?.message} />}
        <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
          <label htmlFor="isAdmin" style={{ flex: 1 }}>
            Email:
          </label>
          <input
            {...register("isAdmin")}
            id="isAdmin"
            type="checkbox"
            autoComplete="off"
            className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[320px]"
          />
        </div>
        {errors.isAdmin && <ErrorMessage msg={errors.isAdmin?.message} />}
        <button
          type="submit"
          disabled={isUserLoading || isUserUpdateLoading || isSubmitting}
          className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
        >
          <span>
            {isUserLoading || isUserUpdateLoading || isSubmitting
              ? "Loading..."
              : "Update"}
          </span>
        </button>
        {errors.root && <ErrorMessage msg={errors.root.message} />}
      </form>
    </>
  );
};

export default UserDetails;
