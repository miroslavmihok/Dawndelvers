import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useController, useForm } from "react-hook-form";
import { useGamesData } from "../../../../context/gamesCtx";
import { useAddProduct } from "../../../../hooks/admin/useAddProduct";
import useProductsFetch from "../../../../hooks/useProductsFetch";
import AddFilterComponent from "./AddFilterComponent";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import Select from "react-select";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaChevronLeft } from "react-icons/fa6";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must have at least 3 characters" }),
  url: z
    .string()
    .min(3, { message: "Path name must have at least 3 characters" }),
  imgSrc: z.string().url(),
  game: z.string(),
  gameUrl: z.string(),
  category: z
    .string()
    .min(3, { message: "Category must have at least 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must have at least 3 characters" }),
  price: z.number().positive(),
  priceBeforeDiscount: z.number().positive(),
  deal: z.boolean(),
});

const AddProduct = () => {
  const { addProduct, isAddingProductLoading, addingProductError } =
    useAddProduct();
  const { refetchProducts } = useProductsFetch(
    `${process.env.REACT_APP_PRODUCTS_URL}`,
  );
  const { games } = useGamesData();

  const [filters, setFilters] = useState([]);

  const gameOptions = games.map((game) => ({
    value: game.title,
    label: game.title,
  }));

  const {
    register,
    handleSubmit,
    control,
    setError,
    setValue,
    reset,
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
        setValue("gameUrl", selectedGameObj.url);
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      const details = {
        title: data.title,
        url: data.url,
        imgSrc: data.imgSrc,
        game: data.game,
        gameUrl: data.gameUrl,
        category: data.category,
        description: data.description,
        price: data.price,
        priceBeforeDiscount: data.priceBeforeDiscount,
        deal: data.deal,
        filters: filters,
      };
      await addProduct({ ...details });
      reset();
      refetchProducts();
      toast.success("Product added successfully");
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
            to={"/admin/profile/productlist"}
            className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
          >
            <div className="flex items-center gap-3">
              <FaChevronLeft />
              <span>Back</span>
            </div>
          </Link>
        </div>
        {addingProductError && <ErrorMessage msg={addingProductError} />}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          {/* TITLE */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="title" style={{ flex: 1 }}>
              Title:
            </label>
            <input
              {...register("title")}
              id="title"
              type="text"
              placeholder="Product title"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.title && <ErrorMessage msg={errors.title?.message} />}
          {/* URL */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="url" style={{ flex: 1 }}>
              Path name:
            </label>
            <input
              {...register("url")}
              id="url"
              type="text"
              placeholder="Product path name"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.url && <ErrorMessage msg={errors.url?.message} />}
          {/* IMG SRC */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="imgSrc" style={{ flex: 1 }}>
              Background:
            </label>
            <input
              {...register("imgSrc")}
              id="imgSrc"
              type="url"
              placeholder="Product background url"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.imgSrc && <ErrorMessage msg={errors.imgSrc?.message} />}
          {/* GAME */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label style={{ flex: 1 }}>Game:</label>
            <Select
              value={gameOptions.find(({ value }) => value === field.value)}
              onChange={handleGameChange}
              options={gameOptions}
              className="w-full rounded-sm border-none text-black md:w-[400px]"
            />
          </div>
          {errors.game && <ErrorMessage msg={errors.game?.message} />}
          {/* GAME URL */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="gameUrl" style={{ flex: 1 }}>
              Game path name:
            </label>
            <input
              {...register("gameUrl")}
              id="gameUrl"
              disabled
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.gameUrl && <ErrorMessage msg={errors.gameUrl?.message} />}
          {/* CATEGORY */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="category" style={{ flex: 1 }}>
              Category:
            </label>
            <input
              {...register("category")}
              id="category"
              type="text"
              placeholder="Product category"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.category && <ErrorMessage msg={errors.category?.message} />}
          {/* DESCRIPTION */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="description" style={{ flex: 1 }}>
              Description:
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              placeholder="Product description"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.description && (
            <ErrorMessage msg={errors.description?.message} />
          )}
          {/* PRICE */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="price" style={{ flex: 1 }}>
              Price:
            </label>
            <input
              {...register("price", { valueAsNumber: true })}
              id="price"
              type="number"
              step=".01"
              placeholder="Product price"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.price && <ErrorMessage msg={errors.price?.message} />}
          {/* PRICE BEFORE DISCOUNT */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="priceBeforeDiscount" style={{ flex: 1 }}>
              Price before discount:
            </label>
            <input
              {...register("priceBeforeDiscount", { valueAsNumber: true })}
              id="priceBeforeDiscount"
              type="number"
              step=".01"
              placeholder="Product price before discount"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.priceBeforeDiscount && (
            <ErrorMessage msg={errors.priceBeforeDiscount?.message} />
          )}
          {/* DEAL */}
          <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
            <label htmlFor="deal" style={{ flex: 1 }}>
              Deal:
            </label>
            <input
              {...register("deal")}
              id="deal"
              type="checkbox"
              autoComplete="off"
              className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
            />
          </div>
          {errors.deal && <ErrorMessage msg={errors.deal?.message} />}
          {/* FILTERS */}
          <h4>Filters:</h4>
          <AddFilterComponent filters={filters} setFilters={setFilters} />
          <button
            type="submit"
            disabled={isAddingProductLoading || isSubmitting}
            className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
          >
            <span>
              {isAddingProductLoading || isSubmitting
                ? "Loading..."
                : "Add product"}
            </span>
          </button>
          {errors.root && <ErrorMessage msg={errors.root.message} />}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
