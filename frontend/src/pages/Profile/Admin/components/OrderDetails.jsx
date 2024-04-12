import React from "react";
import { Link, useParams } from "react-router-dom";
import { useHeaderData } from "../../../../context/headerCtx";
import useOrderFetch from "../../../../hooks/useOrderFetch";
import { useUpdateOrder } from "../../../../hooks/admin/useUpdateOrder";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import formatter from "../../../../utils/formatter";
import { formatDate } from "../../../../utils/formatDate";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { FaChevronLeft } from "react-icons/fa6";

const OrderDetails = () => {
  const { url: id } = useParams();
  const { currency } = useHeaderData();
  const { refetchOrder, isOrderLoading, orderError, order } = useOrderFetch(id);
  const { updateOrder } = useUpdateOrder();

  const handleDeliverOrder = async (id) => {
    try {
      await updateOrder(id);
      refetchOrder();
      toast.success("Succesfully updated order to delivered");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="flex w-full max-w-[600px] flex-col items-center justify-start gap-5">
      <div className="flex w-full justify-start">
        <Link
          to={"/admin/profile/orderlist"}
          className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 font-semibold hover:bg-lightPurple disabled:cursor-not-allowed disabled:bg-sepiaPurple"
        >
          <div className="flex items-center gap-3">
            <FaChevronLeft />
            <span>Back</span>
          </div>
        </Link>
      </div>
      {isOrderLoading && <BeatLoader color="#fff" />}
      {orderError && <ErrorMessage msg={orderError} />}
      {order && !isOrderLoading && order.orderItems && (
        <div className="flex w-full flex-col items-start justify-start gap-5 text-lg">
          <section className="flex w-full items-center justify-start gap-5">
            <h2 className="text-wrap" style={{ wordBreak: "break-all" }}>
              Order-ID: {order._id}
            </h2>
          </section>
          <section className="flex w-full items-center justify-between sm:max-w-[260px]">
            <span className="font-semibold">Created on: </span>
            <span>{formatDate(order.createdAt)}</span>
          </section>
          <section className="w-full sm:w-fit">
            <span className="font-semibold">Products: </span>
            <div className="flex w-full flex-col">
              {order.orderItems.map((p, i) => (
                <div
                  key={i}
                  className={`grid w-full grid-cols-4 border-b border-white sm:grid-cols-10 ${i === 0 ? "border-t" : ""}`}
                >
                  <span className="py-2 pr-3 sm:col-span-2">
                    {p.product.title}
                  </span>
                  <ul className="col-span-2 flex flex-wrap gap-x-2 px-3 py-2 sm:col-span-7">
                    {Object.entries(p.filters).map(
                      ([filterName, filterValue], index, array) => (
                        <React.Fragment key={index}>
                          <li className="flex flex-wrap gap-2">
                            {Array.isArray(filterValue)
                              ? filterValue.join(", ")
                              : filterValue}
                          </li>
                          {index !== array.length - 1 && (
                            <li className="flex items-center justify-center ">
                              <span className="text-center text-xs">
                                &#9679;
                              </span>
                            </li>
                          )}
                        </React.Fragment>
                      ),
                    )}
                  </ul>
                  <span className="px-3 py-2 pr-0 text-right">
                    {formatter(p.price, currency.cur)}
                  </span>
                </div>
              ))}
            </div>
          </section>
          <section className="flex w-full flex-col">
            <div className="flex w-full items-center justify-between sm:max-w-[260px]">
              <span className="font-semibold">Items: </span>
              <span>{formatter(order.itemsPrice, currency.cur)}</span>
            </div>
            <div className="flex w-full items-center justify-between sm:max-w-[260px]">
              <span className="font-semibold">20% Tax: </span>
              <span>{formatter(order.taxPrice, currency.cur)}</span>
            </div>
            <div className="flex w-full items-center justify-between sm:max-w-[260px]">
              <span className="font-semibold">Subtotal: </span>
              <span>{formatter(order.subtotalPrice, currency.cur)}</span>
            </div>
            <div className="flex w-full items-center justify-between sm:max-w-[260px]">
              <span className="font-semibold">Payment fee: </span>
              <span>{formatter(order.paymentFee, currency.cur)}</span>
            </div>
            <div className="flex w-full items-center justify-between sm:max-w-[260px]">
              <span className="font-semibold">Total with fee: </span>
              <span>{formatter(order.totalPrice, currency.cur)}</span>
            </div>
            {order.discount > 0 && (
              <did>
                <div className="flex w-full items-center justify-between sm:max-w-[260px]">
                  <span className="font-semibold">Discount: </span>
                  <span>{formatter(order.discount, currency.cur)}</span>
                </div>
                <div className="flex w-full items-center justify-between sm:max-w-[260px]">
                  <span className="font-semibold">Amount to pay: </span>
                  <span>{formatter(order.totalAmount, currency.cur)}</span>
                </div>
              </did>
            )}
          </section>
          <section className="flex w-full items-center justify-between sm:max-w-[260px]">
            <span className="font-semibold">Delivered: </span>
            {order.isDelivered ? (
              <span className="rounded-md border-none bg-lightGreen px-[10px] py-[6px] text-darkGreen">
                Delivered
              </span>
            ) : (
              <button
                type="button"
                onClick={() => handleDeliverOrder(order._id)}
                className="flex w-fit items-center justify-center rounded-md border-none bg-mediumPurple px-3 py-2 hover:bg-lightPurple"
              >
                Change to delivered
              </button>
            )}
          </section>
          <section className="flex w-full items-center justify-between sm:max-w-[260px]">
            <span className="font-semibold">Paid: </span>
            {order.isPaid ? (
              <span className="rounded-md border-none bg-lightGreen px-[10px] py-[6px] font-semibold text-darkGreen">
                Paid
              </span>
            ) : (
              <span className="rounded-md border-none bg-skyBlue px-[10px] py-[6px] font-semibold text-blueGreen">
                Unpaid
              </span>
            )}
          </section>
        </div>
      )}
    </section>
  );
};

export default OrderDetails;
