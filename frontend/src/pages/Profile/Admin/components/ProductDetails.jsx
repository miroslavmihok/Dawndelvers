import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useProductFetch from "../../../../hooks/useProductFetch";
import { useUpdateProduct } from "../../../../hooks/admin/useUpdateProduct";
import UpdateFilterComponent from "./UpdateFilterComponent";
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
  imgSrc: z.string().url(),
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

const ProductDetails = () => {
  const { url } = useParams();
  const { refetchProduct, isProductLoading, productError, product } =
    useProductFetch(`${process.env.REACT_APP_PRODUCTS_DETAILS_URL}/${url}`);

  const { updateProduct, isProductUpdateLoading, productUpdateError } =
    useUpdateProduct();

  const [filters, setFilters] = useState([]);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (product) {
      const {
        title,
        url,
        imgSrc,
        game,
        gameUrl,
        category,
        description,
        price,
        priceBeforeDiscount,
        deal,
      } = product;
      reset({
        title,
        url,
        imgSrc,
        game,
        gameUrl,
        category,
        description,
        price,
        priceBeforeDiscount,
        deal,
      });
    }
  }, [product, reset]);

  useEffect(() => {
    const updateFilters = (filters) => {
      setFilters(filters);
    };
    if (product && !isProductLoading) {
      updateFilters(product.filters);
    }
  }, [isProductLoading, product]);

  const onSubmit = async (data) => {
    try {
      const details = {
        id: product._id,
        title: data.title,
        url: data.url,
        imgSrc: data.imgSrc,
        category: data.category,
        description: data.description,
        price: data.price,
        priceBeforeDiscount: data.priceBeforeDiscount,
        deal: data.deal,
        filters: filters,
      };
      await updateProduct({ ...details });
      refetchProduct();
      toast.success("Product updated successfully");
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
        {(productError || productUpdateError) && (
          <ErrorMessage msg={productError || productUpdateError} />
        )}
        {isProductLoading && <BeatLoader color="#fff" />}
        {!isProductLoading && !productError && product && (
          <section className="flex w-full items-start justify-center gap-5">
            <h2 className="text-wrap" style={{ wordBreak: "break-all" }}>
              Product-ID: {product._id}
            </h2>
          </section>
        )}
        {!isProductLoading && !productError && product && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-5"
          >
            {/* TITLE */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label htmlFor="title" style={{ flex: 1 }} className="capitalize">
                title:
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
            {/* URL */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label htmlFor="url" style={{ flex: 1 }} className="capitalize">
                path name:
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
            {/* IMGSRC */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label
                htmlFor="imgSrc"
                style={{ flex: 1 }}
                className="capitalize"
              >
                image URL:
              </label>
              <input
                {...register("imgSrc")}
                id="imgSrc"
                type="text" //URL
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.imgSrc && <ErrorMessage msg={errors.imgSrc?.message} />}
            {/* GAME */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label htmlFor="game" style={{ flex: 1 }} className="capitalize">
                game:
              </label>
              <input
                {...register("game")}
                id="game"
                type="text"
                disabled
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.game && <ErrorMessage msg={errors.game?.message} />}
            {/* GAME URL */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label
                htmlFor="gameUrl"
                style={{ flex: 1 }}
                className="capitalize"
              >
                game path name:
              </label>
              <input
                {...register("gameUrl")}
                id="gameUrl"
                type="text"
                disabled
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.gameUrl && <ErrorMessage msg={errors.gameUrl?.message} />}
            {/* CATEGORY */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label
                htmlFor="category"
                style={{ flex: 1 }}
                className="capitalize"
              >
                category:
              </label>
              <input
                {...register("category")}
                id="category"
                type="text"
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.category && <ErrorMessage msg={errors.category?.message} />}
            {/* DESCRIPTION */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label
                htmlFor="description"
                style={{ flex: 1 }}
                className="capitalize"
              >
                description:
              </label>
              <input
                {...register("description")}
                id="description"
                type="text"
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.description && (
              <ErrorMessage msg={errors.description?.message} />
            )}
            {/* PRICE */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label htmlFor="price" style={{ flex: 1 }} className="capitalize">
                price:
              </label>
              <input
                {...register("price", { valueAsNumber: true })}
                id="price"
                type="number"
                step=".01"
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.price && <ErrorMessage msg={errors.price?.message} />}
            {/* PRICE BEFORE DISCOUNT*/}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label
                htmlFor="priceBeforeDiscount"
                style={{ flex: 1 }}
                className="capitalize"
              >
                price before discount:
              </label>
              <input
                {...register("priceBeforeDiscount", { valueAsNumber: true })}
                id="priceBeforeDiscount"
                type="number"
                step=".01"
                autoComplete="off"
                className="h-[30px] w-full rounded-sm border-none px-4 text-black md:w-[400px]"
              />
            </div>
            {errors.priceBeforeDiscount && (
              <ErrorMessage msg={errors.priceBeforeDiscount?.message} />
            )}
            {/* DEAL */}
            <div className="flex w-full flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
              <label htmlFor="deal" style={{ flex: 1 }} className="capitalize">
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
            <UpdateFilterComponent filters={filters} setFilters={setFilters} />
            <button
              type="submit"
              disabled={
                isProductLoading || isProductUpdateLoading || isSubmitting
              }
              className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
            >
              <span>
                {isProductUpdateLoading || isSubmitting
                  ? "Loading..."
                  : "Update"}
              </span>
            </button>
            {errors.root && <ErrorMessage msg={errors.root.message} />}
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
