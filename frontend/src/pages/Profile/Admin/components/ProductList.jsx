import React from "react";
import { Link } from "react-router-dom";
import { useHeaderData } from "../../../../context/headerCtx";
import useProductsFetch from "../../../../hooks/useProductsFetch";
import { useRemoveProduct } from "../../../../hooks/admin/useRemoveProduct";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import { BeatLoader } from "react-spinners";
import { formatDate } from "../../../../utils/formatDate";
import formatter from "../../../../utils/formatter";
import {
  FaPlus,
  FaRegTrashCan,
  FaRegPenToSquare,
  FaCheck,
} from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductList = () => {
  const { refetchProducts, areProductsLoading, productsError, products } =
    useProductsFetch(`${process.env.REACT_APP_PRODUCTS_URL}`);

  const { removeProduct, isProductRemoveLoading } = useRemoveProduct();

  const { currency } = useHeaderData();

  const deleteHandler = async (id) => {
    try {
      const response = await removeProduct(id);
      toast.success(response.message);
      refetchProducts();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full items-center justify-end">
        <Link
          to={"/admin/profile/productlist/add"}
          className="flex w-fit items-center justify-center gap-2 rounded bg-mediumPurple px-5 py-2 font-semibold text-white hover:bg-lightPurple"
        >
          <FaPlus size={14} />
          <span>Add</span>
        </Link>
      </div>
      <table>
        <thead className="bg-darkestPurple">
          <tr className="h-[48px] text-center">
            <th className="hidden 2xl:table-cell">Game ID</th>
            <th>Product</th>
            <th className="hidden xs:table-cell">Game</th>
            <th className="hidden md:table-cell">Created on</th>
            <th>New Price</th>
            <th>Old Price</th>
            <th className="hidden xs:table-cell">Deal</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productsError && (
            <tr>
              <td>
                <ErrorMessage msg={productsError} />
              </td>
            </tr>
          )}
          {areProductsLoading && (
            <tr>
              <td>
                <BeatLoader color="#fff" />
              </td>
            </tr>
          )}
          {products &&
            !areProductsLoading &&
            products.map((product, index) => (
              <tr
                key={index}
                className={`h-[48px] text-center font-semibold ${index === 0 || index % 2 === 0 ? "bg-mediumPurple" : "bg-lightPurple"}`}
              >
                <td className="hidden 2xl:table-cell">{product._id}</td>
                <td>{product.title}</td>
                <td className="hidden xs:table-cell">{product.game}</td>
                <td className="hidden md:table-cell">
                  {formatDate(product.createdAt)}
                </td>
                <td>{formatter(product.price, currency.cur)}</td>
                <td>{formatter(product.priceBeforeDiscount, currency.cur)}</td>
                <td className="hidden xs:table-cell">
                  <div className="flex w-full items-center justify-center text-xl text-darkGreen">
                    {product.deal ? <FaCheck /> : null}
                  </div>
                </td>
                <td>
                  <div className="flex w-full items-center justify-center">
                    <Link
                      to={`/admin/profile/productlist/details/${product.url}`}
                      className="flex w-fit items-center justify-center rounded-md border-none bg-darkGrey/70 px-2 py-2 hover:bg-lightGrey hover:text-black"
                    >
                      <FaRegPenToSquare />
                    </Link>
                  </div>
                </td>
                <td>
                  <button
                    className="rounded-md border-none bg-sepiaRed px-2 py-2 hover:bg-lightSepiaRed disabled:cursor-not-allowed disabled:bg-sepiaPurple"
                    disabled={isProductRemoveLoading}
                    onClick={() => deleteHandler(product._id)}
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {products.length === 0 && (
        <span className="w-full text-center">
          No products were created yet.
        </span>
      )}
    </div>
  );
};

export default ProductList;
