import React, { useState } from "react";
import { useGamesData } from "../../context/gamesCtx";
import { useSendEmail } from "../../hooks/useSendEmail";
import ErrorMessage from "../UI/ErrorMessage";
import { useController, useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(6, { message: "Name must contain at least 6 characters" }),
  age: z.number(),
  discord: z.string(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  country: z.string(),
  about: z.string().min(10),
});

const customStyles = {
  control: (base) => ({
    ...base,
    paddingLeft: 12,
    height: 48,
    minHeight: 48,
  }),
};

const WorkWithUsComponent = () => {
  const { games } = useGamesData();
  const { sendEmail, isLoading } = useSendEmail();

  const [jobType, setJobType] = useState("Booster");

  const gameOptions = games.map((game) => ({
    value: game.title,
    label: game.title,
  }));

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { field } = useController({ name: "game", control });

  const handleGameChange = (option) => {
    if (option) {
      const selectedGameObj = games.find((game) => game.title === option.value);
      if (selectedGameObj) {
        field.onChange(option.value);
      }
    }
  };

  const jobTypeHandler = (name) => {
    setJobType(name);
  };

  const onSubmit = async (data) => {
    try {
      const details = {
        name: data.name,
        jobType: jobType,
        age: data.age,
        discord: data.discord,
        email: data.email,
        country: data.country,
        about: data.about,
      };
      console.log(details);
      const response = await sendEmail(details);
      console.log("response:", response);
      toast.success("Email sent successfully");
    } catch (error) {
      console.error(error);
      setError("root", {
        message: error?.data?.message || error.error,
      });
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 text-black">
      <div className="flex w-full max-w-[800px] flex-col gap-4 md:min-w-[565px]">
        <div className="flex w-full gap-4">
          <button
            name="Booster"
            className={`rounded-md border px-5 py-3 text-white outline-0 hover:border-lightPurple hover:bg-lightPurple ${jobType === "Booster" ? "border-lightPurple bg-lightPurple" : "border-white/25 bg-transparent"}`}
            onClick={() => jobTypeHandler("Booster")}
          >
            Booster
          </button>
          <button
            name="Coach"
            className={`rounded-md border px-5 py-3 text-white outline-0 hover:border-lightPurple hover:bg-lightPurple ${jobType === "Coach" ? "border-lightPurple bg-lightPurple" : "border-white/25 bg-transparent"}`}
            onClick={() => jobTypeHandler("Coach")}
          >
            Coach
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {/* NAME */}
            <div className="col-span-1 sm:col-span-2">
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Your Name"
                autoComplete="off"
                className="w-full rounded-md px-5 py-3"
              />
              {errors.name && <ErrorMessage msg={errors.name?.message} />}
            </div>
            {/* AGE */}
            <div className="col-span-1 sm:col-span-2">
              <input
                {...register("age", { valueAsNumber: true })}
                id="age"
                type="number"
                placeholder="Your Age"
                autoComplete="off"
                className="w-full rounded-md px-5 py-3"
              />
              {errors.age && <ErrorMessage msg={errors.age?.message} />}
            </div>
            {/* GAME */}
            <div className="col-span-1 sm:col-span-2">
              <Select
                value={gameOptions.find(({ value }) => value === field.value)}
                onChange={handleGameChange}
                options={gameOptions}
                styles={customStyles}
                placeholder={"Choose game"}
              />
              {errors.game && <ErrorMessage msg={errors.game?.message} />}
            </div>
            {/* DISCORD */}
            <div className="col-span-1 sm:col-span-2">
              <input
                {...register("discord")}
                id="discord"
                type="text"
                placeholder="Your Discord"
                autoComplete="off"
                className="w-full rounded-md px-5 py-3"
              />
              {errors.discord && <ErrorMessage msg={errors.discord?.message} />}
            </div>
            {/* EMAIL */}
            <div className="col-span-1 sm:col-span-2">
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Your Email"
                autoComplete="off"
                className="w-full rounded-md px-5 py-3"
              />
              {errors.email && <ErrorMessage msg={errors.email?.message} />}
            </div>
            {/* COUNTRY */}
            <div className="col-span-1 sm:col-span-2">
              <input
                {...register("country")}
                id="country"
                type="text"
                placeholder="Your Country"
                autoComplete="off"
                className="w-full rounded-md px-5 py-3"
              />
              {errors.country && <ErrorMessage msg={errors.country?.message} />}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-black">
            {/* ABOUT */}
            <div className="col-span-1 sm:col-span-4">
              <textarea
                {...register("about")}
                id="about"
                type="text"
                placeholder="Something about yourself"
                autoComplete="off"
                className="min-h-[200px] w-full rounded-md px-5 py-3"
              />
              {errors.about && <ErrorMessage msg={errors.about?.message} />}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button
              type="submit"
              disabled={isLoading || isSubmitting}
              className="col-span-2 rounded-md border border-lightPurple bg-transparent px-5 py-3 text-white outline-0 hover:bg-lightPurple focus:border-lightPurple sm:col-span-1"
            >
              <span>{isLoading || isSubmitting ? "Sending..." : "Send"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkWithUsComponent;
