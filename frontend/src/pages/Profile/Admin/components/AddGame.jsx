import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGamesData } from "../../../../context/gamesCtx";
import { useAddGame } from "../../../../hooks/admin/useAddGame";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaChevronLeft } from "react-icons/fa6";

const schema = z.object({
  title: z.string().min(1, { message: "Enter a valid title" }),
  url: z.string().min(1, { message: "Enter a valid url path name" }),
  bg: z.string().url(),
  logo: z.string().url(),
});

const AddGame = () => {
  const { addGame, isAddingGameLoading, addingGameError } = useAddGame();
  const { refetchGames } = useGamesData();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await addGame({
        title: data.title,
        url: data.url,
        bg: data.bg,
        logo: data.logo,
      });
      refetchGames();
      toast.success("Game added successfully");
    } catch (error) {
      setError("root", {
        message: error?.data?.message || error.error,
      });
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-start gap-5">
      <div className="flex w-full max-w-[600px] flex-col items-center justify-start gap-5">
        <div className="w-full items-center justify-start">
          <Link
            to={"/admin/profile/gamelist"}
            className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
          >
            <div className="flex items-center gap-3">
              <FaChevronLeft />
              <span>Back</span>
            </div>
          </Link>
        </div>
        {addingGameError && <ErrorMessage msg={addingGameError} />}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="title" style={{ flex: 1 }}>
              Title:
            </label>
            <input
              {...register("title")}
              id="title"
              type="text"
              placeholder="Game title"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.title && <ErrorMessage msg={errors.title?.message} />}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="url" style={{ flex: 1 }}>
              Url:
            </label>
            <input
              {...register("url")}
              id="url"
              type="text"
              placeholder="Game url"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.url && <ErrorMessage msg={errors.url?.message} />}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="bg" style={{ flex: 1 }}>
              Background:
            </label>
            <input
              {...register("bg")}
              id="bg"
              type="url"
              placeholder="Game background url"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.bg && <ErrorMessage msg={errors.bg?.message} />}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="logo" style={{ flex: 1 }}>
              Logo:
            </label>
            <input
              {...register("logo")}
              id="logo"
              type="url"
              placeholder="Game logo url"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.logo && <ErrorMessage msg={errors.logo?.message} />}
          <button
            type="submit"
            disabled={isAddingGameLoading || isSubmitting}
            className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
          >
            <span>
              {isAddingGameLoading || isSubmitting ? "Loading..." : "Add game"}
            </span>
          </button>
          {errors.root && <ErrorMessage msg={errors.root.message} />}
        </form>
      </div>
    </div>
  );
};

export default AddGame;
