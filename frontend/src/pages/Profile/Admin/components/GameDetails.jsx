import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGameFetch from "../../../../hooks/useGameFetch";
import { useUpdateGame } from "../../../../hooks/admin/useUpdateGame";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BeatLoader } from "react-spinners";
import { FaChevronLeft } from "react-icons/fa6";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must have at least 3 characters" }),
  url: z
    .string()
    .min(3, { message: "Path name must have at least 3 characters" }),
  bg: z.string().url(),
  logo: z.string().url(),
});

const GameDetails = () => {
  const { url: gameUrl } = useParams();
  const { refetchGame, isGameLoading, gameError, game } = useGameFetch(
    `${process.env.REACT_APP_GAMES_URL}/${gameUrl}`,
  );
  const { updateGame, isGameUpdateLoading, gameUpdateError } = useUpdateGame();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (game) {
      const { title, url, bg, logo } = game;
      reset({
        title,
        url,
        bg,
        logo,
      });
    }
  }, [game, reset]);

  const onSubmit = async (data) => {
    try {
      await updateGame({
        id: game._id,
        title: data.title,
        url: data.url,
        bg: data.bg,
        logo: data.logo,
      });
      refetchGame();
      toast.success("Game updated successfully");
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
        {(gameError || gameUpdateError) && (
          <ErrorMessage msg={gameError || gameUpdateError} />
        )}
        {isGameLoading && <BeatLoader color="#fff" />}
        {!isGameLoading && !gameError && game && (
          <section className="flex w-full items-start justify-center gap-5">
            <h2 className="text-wrap" style={{ wordBreak: "break-all" }}>
              Game-ID: {game._id}
            </h2>
          </section>
        )}
        {!isGameLoading && !gameError && game && (
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
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.title && <ErrorMessage msg={errors.title?.message} />}
            <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label htmlFor="url" style={{ flex: 1 }}>
                Path name:
              </label>
              <input
                {...register("url")}
                id="url"
                type="text"
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
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.logo && <ErrorMessage msg={errors.logo?.message} />}
            <button
              type="submit"
              disabled={isGameLoading || isGameUpdateLoading || isSubmitting}
              className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
            >
              <span>
                {isGameUpdateLoading || isSubmitting ? "Loading..." : "Update"}
              </span>
            </button>
            {errors.root && <ErrorMessage msg={errors.root.message} />}
          </form>
        )}
      </div>
    </div>
  );
};

export default GameDetails;
